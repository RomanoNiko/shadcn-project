<script setup lang="ts">
const { headings, activeHeading } = useInPageNav();
</script>

<template>
    <Card
        v-if="headings.length"
        class="p-4 w-full max-w-xs min-h-[100px] text-md text-muted-foreground"
    >
        <h1 class="text-primary font-semibold">On This Page</h1>
        <ul class="mt-2 space-y-1">
            <li
                v-for="heading in headings"
                :key="heading.id"
                :class="activeHeading === heading.id ? '' : ''"
            >
                <NuxtLink :to="'#' + heading.id" class="hover:text-primary">
                    {{ heading.text }}
                </NuxtLink>
            </li>
        </ul>
    </Card>
</template>
