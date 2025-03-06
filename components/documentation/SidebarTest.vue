<script setup lang="ts">
const { data } = useSidebar();
</script>

<template>
    <div class="pb-4">
        <div v-for="item in data.navMain" :key="item.title">
            <h4 class="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
                {{ item.title }}
            </h4>
            <div
                class="grid grid-flow-row auto-rows-max gap-0.5 text-sm"
                v-for="subItem in item.items"
                :key="subItem.title"
            >
                <NuxtLink
                    :to="subItem.url"
                    class="group flex h-8 w-full items-center rounded-lg px-2 underline-offset-2 hover:bg-accent hover:text-accent-foreground text-accent-foreground"
                >
                    {{ subItem.title }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
