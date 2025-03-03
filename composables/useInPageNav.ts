import { ref, watch, nextTick, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useIntersectionObserver, isClient } from "@vueuse/core";

export function useInPageNav() {
    const headings = ref<{ id: string; text: string }[]>([]);
    const activeHeading = ref("");
    const route = useRoute();

    const updateHeadings = async () => {
        if (!isClient) return;

        await nextTick(); // Pastikan semua elemen sudah dimuat

        const container = document.querySelector("main") || document.body;
        const contentHeadings = Array.from(
            container.querySelectorAll("h2")
        ).map((heading) => ({
            id: heading.id,
            text: (heading as HTMLElement).innerText,
        }));

        console.log("Headings ditemukan:", contentHeadings); // Debugging

        headings.value = contentHeadings;

        contentHeadings.forEach((heading) => {
            const element = document.getElementById(heading.id);
            if (element) {
                useIntersectionObserver(element, ([{ isIntersecting }]) => {
                    if (isIntersecting) {
                        activeHeading.value = heading.id;
                    }
                });
            }
        });
    };

    watch(() => route.fullPath, updateHeadings, { immediate: true });
    onMounted(updateHeadings);

    return { headings, activeHeading };
}
