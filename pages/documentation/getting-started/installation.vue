<template>
    <div>
        <h1 class="scroll-m-20 text-5xl font-bold tracking-tight pb-3">
            Installation
        </h1>
        <p class="text-lg text-muted-foreground text-justify">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur
        </p>
    </div>
    <DocumentationDocTabs>
        <template #preview>
            <DocumentationPreviewCard>
                <template #content>
                    <Button>Button</Button>
                </template>
            </DocumentationPreviewCard>
        </template>
        <template #code>
            <DocumentationCodeCard>
                <template #content>
                    <ContentRenderer :value="index" />
                </template>
            </DocumentationCodeCard>
        </template>
    </DocumentationDocTabs>
</template>

<script setup>
import { DocumentationPreviewCard } from "#components";

definePageMeta({
    breadcrumb: "Installation",
    layout: "documentation-layout",
});

const index = await queryCollection("content").path("/").first();
</script>
