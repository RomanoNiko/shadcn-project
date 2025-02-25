<script setup lang="ts">
const { data } = useSidebar();
</script>

<template>
    <div class="grid w-full gap-5 text-md text-muted-foreground">
        <div v-for="item in data.navMain" :key="item.title">
            <h1 class="font-semibold text-primary pb-3">
                {{ item.title }}
            </h1>
            <ul
                class="grid pl-4"
                v-for="subItem in item.items"
                :key="subItem.title"
            >
                <li class="py-1">
                    <NuxtLink :to="subItem.url" class="hover:text-primary">
                        {{ subItem.title }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>
