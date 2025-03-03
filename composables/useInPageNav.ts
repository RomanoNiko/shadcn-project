import { ref, watch, nextTick, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useIntersectionObserver, isClient } from "@vueuse/core";

export function useInPageNav() {
    const headings = ref<{ id: string; text: string }[]>([]);
    const activeHeading = ref("");
    const route = useRoute();

    const updateHeadings = async () => {
        if (!isClient) return;

        // Reset headings agar tidak menampilkan data lama
        headings.value = [];
        activeHeading.value = "";

        await nextTick(); // Pastikan halaman baru sudah dimuat

        setTimeout(async () => {
            const container = document.querySelector("main");
            if (!container) return;

            // Ambil heading dari halaman yang aktif
            let contentHeadings = Array.from(
                container.querySelectorAll("h2")
            ).map((heading) => ({
                id: heading.id,
                text: (heading as HTMLElement).innerText,
                top: (heading as HTMLElement).offsetTop,
            }));

            // Urutkan berdasarkan posisi (biar dari atas ke bawah)
            contentHeadings.sort((a, b) => a.top - b.top);

            console.log("Headings ditemukan:", contentHeadings);

            // Simpan headings
            headings.value = contentHeadings.map(({ id, text }) => ({
                id,
                text,
            }));

            // Reset observer
            activeHeading.value = "";

            nextTick(() => {
                contentHeadings.forEach((heading) => {
                    const element = document.getElementById(heading.id);
                    if (element) {
                        useIntersectionObserver(
                            element,
                            ([{ isIntersecting }]) => {
                                if (isIntersecting) {
                                    activeHeading.value = heading.id;
                                }
                            },
                            { threshold: [0.5] }
                        );
                    }
                });
            });
        }, 100); // Tambahkan delay kecil untuk memastikan DOM sudah benar-benar diperbarui
    };

    watch(
        () => route.fullPath,
        async () => {
            console.log("Route berubah, update headings...");
            await nextTick(); // Tunggu agar halaman baru dimuat
            updateHeadings();
        },
        { immediate: true }
    );

    onMounted(updateHeadings);

    return { headings, activeHeading };
}
