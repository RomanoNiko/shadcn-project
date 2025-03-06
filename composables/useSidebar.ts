export function useSidebar() {
    const data = {
        versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
        navMain: [
            {
                title: "Getting Started",
                url: "#",
                items: [
                    {
                        title: "Introduction",
                        url: "/documentation/getting-started/introduction",
                    },
                    {
                        title: "Installation",
                        url: "/documentation/getting-started/installation",
                    },
                ],
            },
            {
                title: "Building Your Application",
                url: "#",
                items: [
                    { title: "Routing", url: "/documentation/" },
                    {
                        title: "Data Fetching",
                        url: "/documentation/",
                        isActive: true,
                    },
                ],
            },
            {
                title: "API Reference",
                url: "#",
                items: [
                    { title: "Components", url: "#" },
                    { title: "File Conventions", url: "#" },
                ],
            },
            {
                title: "Architecture",
                url: "#",
                items: [
                    { title: "Accessibility", url: "#" },
                    { title: "Fast Refresh", url: "#" },
                ],
            },
            {
                title: "Components",
                url: "#",
                items: [
                    { title: "Tes", url: "/documentation/components/tes" },
                    { title: "Button", url: "#" },
                    { title: "Card", url: "#" },
                    { title: "Form", url: "#" },
                    { title: "Modal", url: "#" },
                    { title: "Table", url: "#" },
                    { title: "Tabs", url: "#" },
                ],
            },
        ],
    };

    const selectedVersion = ref(data.versions[0]);
    const dropdownOpen = ref(false);
    const search = ref("");

    function toggleDropdown() {
        dropdownOpen.value = !dropdownOpen.value;
    }

    function setSelectedVersion(version: string) {
        selectedVersion.value = version;
    }

    return {
        data,
        selectedVersion,
        dropdownOpen,
        search,
        toggleDropdown,
        setSelectedVersion,
    };
}
