<script setup lang="ts">
const { headings, activeHeading } = useInPageNav();
const isOpen = ref(false);
</script>

<template>
    <!-- desktop -->
    <div
        v-if="headings.length"
        class="hidden xl:block no-scrollbar h-full overflow-auto pb-16"
    >
        <div class="space-y-2">
            <p class="font-medium">On This Page</p>
            <ul class="m-0 list-none">
                <li
                    class="mt-0 pt-2"
                    v-for="heading in headings"
                    :key="heading.id"
                >
                    <NuxtLink
                        :to="'#' + heading.id"
                        class="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground"
                    >
                        {{ heading.text }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>

    <!-- mobile -->
    <div class="block xl:hidden mb-6">
        <Button
            @click="isOpen = !isOpen"
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
        >
            On This Page
        </Button>
        <div class="overflow-hidden text-sm mt-4 border-l pl-4" v-if="isOpen">
            <ul class="m-0 list-none">
                <li
                    class="mt-0 pt-2"
                    v-for="heading in headings"
                    :key="heading.id"
                >
                    <NuxtLink
                        :to="'#' + heading.id"
                        class="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground"
                    >
                        {{ heading.text }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>
