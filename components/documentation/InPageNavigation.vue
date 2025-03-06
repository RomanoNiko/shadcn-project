<script setup lang="ts">
import { ref } from "vue";
const { headings, activeHeading } = useInPageNav();
const isOpen = ref(false);
</script>

<template>
    <!-- Mobile View -->
    <div class="md:hidden top-0">
        <Button
            @click="isOpen = !isOpen"
            class="md:hidden text-left bg-primary text-white font-semibold rounded"
        >
            On This Page
        </Button>
        <div v-if="isOpen">
            <ul class="ml-2 space-y-1 text-sm">
                <li v-for="heading in headings" :key="heading.id">
                    <NuxtLink
                        :to="'#' + heading.id"
                        class="hover:text-primary block p-1"
                        @click="isOpen = false"
                    >
                        {{ heading.text }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>

    <!-- Desktop View -->
    <Card
        v-if="headings.length"
        class="hidden md:block p-4 w-full max-w-xs min-h-[100px] text-md text-muted-foreground"
    >
        <h1 class="text-primary font-semibold">On This Page</h1>
        <ul class="ml-2 mt-2 space-y-1 text-sm">
            <li v-for="heading in headings" :key="heading.id">
                <NuxtLink :to="'#' + heading.id" class="hover:text-primary">
                    {{ heading.text }}
                </NuxtLink>
            </li>
        </ul>
    </Card>
</template>
