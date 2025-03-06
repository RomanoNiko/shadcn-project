<script setup lang="ts">
const { breadcrumbs } = useBreadcrumb();
</script>

<template>
    <Breadcrumb>
        <BreadcrumbList>
            <template v-for="(crumb, index) in breadcrumbs" :key="crumb.path">
                <BreadcrumbItem v-if="!crumb.isActive">
                    <BreadcrumbLink :to="crumb.path">{{
                        crumb.title
                    }}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem v-else>
                    <BreadcrumbPage>{{ crumb.title }}</BreadcrumbPage>
                </BreadcrumbItem>

                <BreadcrumbSeparator v-if="index < breadcrumbs.length - 1" />
            </template>
            <Separator />
        </BreadcrumbList>
    </Breadcrumb>
</template>
