export function useBreadcrumb() {
    const route = useRoute();

    const breadcrumbs = computed(() => {
        return [
            {
                title: "Documentation",
                path: "/documentation",
                isActive: route.path === "/documentation",
            }, // Tambahkan "Documentation" secara manual
            ...route.matched.map((r, index) => ({
                title: r.meta?.breadcrumb || r.name,
                path:
                    "/" +
                    route.matched
                        .slice(0, index + 1)
                        .map((r) => r.path.replace(/^\//, ""))
                        .join("/"),
                isActive: r.path === route.path,
            })),
        ];
    });

    return { breadcrumbs };
}
