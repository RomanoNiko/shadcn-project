<template>
    <div>
        <h1 class="scroll-m-20 text-5xl font-bold tracking-tight pb-3">
            Introduction
        </h1>
        <h2
            id="Tes1"
            class="scroll-m-20 border-b pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0"
        >
            Tes1
        </h2>
        <p class="text-lg text-muted-foreground text-justify">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur
        </p>
        <br />
        <h2
            id="Tes2"
            class="scroll-m-20 border-b pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0"
        >
            Tes2
        </h2>
        <p class="text-lg text-muted-foreground text-justify">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur
        </p>
        <br />
        <h2
            id="tes3"
            class="scroll-m-20 border-b pb-2 text-3xl font-bold tracking-tight transition-colors first:mt-0"
        >
            tes3
        </h2>
        <p class="text-lg text-muted-foreground text-justify">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur
        </p>
        <br />
        <p class="text-lg text-muted-foreground text-justify">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur
        </p>
        <br />
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
            <DocumentationDocCard>
                <template #title>Preview</template>
                <template #description_title>Preview tampil disini</template>
                <template #description>
                    <div>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Lorem ipsum dolor, sit amet
                        consectetur adipisicing elit. Incidunt ad deleniti
                        fugiat cupiditate sint perspiciatis quod tenetur
                        dignissimos praesentium fugit vel, possimus neque
                        assumenda eaque eveniet in cum quasi debitis.
                    </div>
                    <br />
                    <div>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Lorem ipsum dolor, sit amet
                        consectetur adipisicing elit. Incidunt ad deleniti
                        fugiat cupiditate sint perspiciatis quod tenetur
                        dignissimos praesentium fugit vel, possimus neque
                        assumenda eaque eveniet in cum quasi debitis.
                    </div>
                    <br />

                    <DocumentationPreviewCard>
                        <template #content>
                            <Button>Button</Button>
                        </template>
                    </DocumentationPreviewCard>
                </template>
            </DocumentationDocCard>
        </template>
        <template #code>
            <DocumentationDocCard>
                <template #title>Code</template>
                <template #description_title>Code tampil disini</template>
                <template #description>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Incidunt ad deleniti fugiat cupiditate sint perspiciatis
                    quod tenetur dignissimos praesentium fugit vel, possimus
                    neque assumenda eaque eveniet in cum quasi debitis.

                    <ContentRenderer :value="installation" />
                </template>
            </DocumentationDocCard>
        </template>
    </DocumentationDocTabs>
</template>

<script setup>
definePageMeta({
    breadcrumb: "Introduction",
    layout: "documentation-layout",
});

const installation = await queryCollection("content")
    .path("/installation")
    .first();
</script>
