<template>
    <div class="grid w-full gap-5 text-md text-muted-foreground">
        <div>
            <h1 class="font-semibold text-primary pb-3">Getting Started</h1>
            <ul class="grid gap-2 pl-4">
                <li>
                    <NuxtLink to="/documentation/getting-started/introduction"
                        >Introduction</NuxtLink
                    >
                </li>
                <li>
                    <NuxtLink to="/documentation/getting-started/installation"
                        >Installation</NuxtLink
                    >
                </li>
                <li>
                    <NuxtLink to="#">Configuration</NuxtLink>
                </li>
            </ul>
        </div>
        <div>
            <h1 class="font-semibold text-primary pb-3">Installation</h1>
            <ul class="grid gap-2 pl-4">
                <li>
                    <NuxtLink to="#">Vite</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#">Nuxt</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="#">Astro</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>
