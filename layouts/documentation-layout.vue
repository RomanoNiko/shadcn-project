<template>
    <DocumentationNavbar />
    <main
        class="w-full flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10 overflow-x-hidden"
    >
        <div
            class="container mx-auto w-full max-w-full md:max-w-screen-2xl px-0 md:px-10"
        >
            <div class="mx-auto grid w-full max-w-full pb-2">
                <h1 class="scroll-m-20 text-4xl font-bold tracking-tight pb-3">
                    Documentation
                </h1>
            </div>

            <div
                class="mx-auto grid w-full max-w-full items-start gap-6 md:grid-cols-[1fr_3fr_1fr] lg:grid-cols-[1fr_3fr_1fr]"
            >
                <!-- Sidebar -->
                <DocumentationSidebarTest class="hidden md:block" />

                <!-- Konten -->
                <div class="grid gap-3">
                    <DocumentationBreadcrumbMenu />
                    <Separator />
                    <slot />
                </div>

                <!-- in Page Navigation -->
                <DocumentationInPageNavigation />
            </div>
        </div>
    </main>
</template>
