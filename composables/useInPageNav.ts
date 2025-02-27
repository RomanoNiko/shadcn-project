import { ref, onMounted } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

export function useInPageNav() {
    const headings = ref<{ id: string; text: string }[]>([]);
    const activeHeading = ref("");

    onMounted(() => {
        // Ambil hanya elemen <h2>
        const contentHeadings = Array.from(document.querySelectorAll("h2")).map(
            (heading) => ({
                id: heading.id,
                text: (heading as HTMLElement).innerText,
            })
        );
        headings.value = contentHeadings;

        // Gunakan Intersection Observer untuk mendeteksi heading yang aktif
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
    });

    return { headings, activeHeading };
}
