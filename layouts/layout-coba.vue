<template>
    <div
        class="relative flex min-h-svh flex-col bg-background bg-gradient-to-b from-[#859bb5]/50 via-[#EEF0F2] via-20% to-[#EEF0F2]"
    >
        <div class="border-grid flex flex-1 flex-col">
            <header
                class="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
            >
                <div class="container-wrapper">
                    <div class="container flex h-14 items-center">
                        <DocumentationNavbar />
                    </div>
                </div>
            </header>
            <main class="flex flex-1 flex-col">
                <div class="container-wrapper">
                    <div
                        class="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10"
                    >
                        <aside
                            class="border-grid fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block"
                        >
                            <div
                                class="no-scrollbar h-full overflow-auto py-6 pr-6 lg:py-8"
                            >
                                <DocumentationSidebarTest />
                            </div>
                        </aside>
                        <main
                            class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]"
                        >
                            <div class="mx-auto w-full min-w-0 max-w-2xl">
                                <!-- Konten -->

                                <!-- breadcrumb -->
                                <div class="mb-4">
                                    <DocumentationBreadcrumbMenu />
                                </div>

                                <!-- judul -->
                                <div class="space-y-2">
                                    <div class="flex items-center space-x-4">
                                        <h1
                                            class="scroll-m-20 text-3xl font-bold tracking-tight"
                                        >
                                            <slot name="judul"></slot>
                                        </h1>
                                    </div>
                                    <p class="text-base text-muted-foreground">
                                        <slot name="deskripsi"></slot>
                                    </p>
                                </div>

                                <!-- isi -->
                                <div class="vp-doc py-8">
                                    <div class="relative">
                                        <div>
                                            <slot name="isi" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- On Page Nav -->
                            <div class="hidden text-sm xl:block">
                                <div
                                    class="sticky top-20 -mt-6 h-[calc(100vh-3.5rem)] pt-4"
                                >
                                    <DocumentationOnPageNav />
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
