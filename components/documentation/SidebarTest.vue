<template>
    <main
        class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10"
    >
        <div class="mx-auto grid w-full max-w-6xl gap-2">
            <h1 class="text-3xl font-semibold">Documentation</h1>
        </div>
        <div
            class="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_3fr]"
        >
            <!-- Kolom Kiri -->
            <div class="grid gap-5 text-sm text-muted-foreground">
                <div>
                    <h1 class="font-semibold text-primary pb-3">
                        Getting Started
                    </h1>
                    <ul class="grid gap-2 pl-4">
                        <li>
                            <nuxt-link to="#">Introduction</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="#">Installation</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="#">Configuration</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 class="font-semibold text-primary pb-3">
                        Installation
                    </h1>
                    <ul class="grid gap-2 pl-4">
                        <li>
                            <nuxt-link to="#">Vite</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="#">Nuxt</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="#">Astro</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Kolom Kanan -->
            <div class="grid gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <slot name="title"></slot>
                        </CardTitle>
                        <CardDescription>
                            <slot name="description_title"></slot>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <!-- <form>
                            <Input placeholder="Store Name" />
                        </form> -->
                        <CardDescription>
                            <slot name="description"></slot>
                        </CardDescription>
                    </CardContent>
                    <!-- <CardFooter class="border-t px-6 py-4">
                        <Button>Save</Button>
                    </CardFooter> -->
                </Card>
            </div>
        </div>
    </main>
</template>
