export function useBreadcrumb() {
    const route = useRoute();

    const breadcrumbs = computed(() => {
        return route.matched.map((r) => ({
            title: r.meta?.breadcrumb || r.name,
            path: r.path,
            isActive: r.path === route.path,
        }));
    });

    return { breadcrumbs };
}
