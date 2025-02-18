<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Heading {
    id: string;
    text: string;
    level: number;
}

const headings = ref<Heading[]>([]);

onMounted(() => {
    const contentHeadings = Array.from(document.querySelectorAll("h2, h3")).map(
        (heading) => ({
            id: heading.id,
            text: (heading as HTMLElement).innerText,
            level: heading.tagName.toLowerCase() === "h2" ? 2 : 3,
        })
    );
    headings.value = contentHeadings;
});
</script>

<template>
    <Card v-if="headings.length" class="p-4 w-full max-w-xs">
        <h2 class="text-lg font-semibold">On This Page</h2>
        <ul class="mt-2 space-y-1">
            <li
                v-for="heading in headings"
                :key="heading.id"
                :class="heading.level === 3 ? 'pl-4 text-sm' : 'text-base'"
            >
                <NuxtLink
                    :to="`#${heading.id}`"
                    class="text-blue-600 hover:underline"
                >
                    {{ heading.text }}
                </NuxtLink>
            </li>
        </ul>
    </Card>
</template>
