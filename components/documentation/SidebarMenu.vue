<script setup lang="ts">
const { data } = useSidebar();

import {
    SidebarProvider,
    Sidebar,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenuButton,
    SidebarRail,
    SidebarInset,
    SidebarTrigger,
} from "@/components/ui/sidebar";
</script>

<template>
    <SidebarProvider>
        <Sidebar>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DocumentationVersionDropdown />
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup v-for="item in data.navMain" :key="item.title">
                    <SidebarGroupLabel>{{ item.title }}</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem
                                v-for="subItem in item.items"
                                :key="subItem.title"
                            >
                                <SidebarMenuButton
                                    :class="{ 'is-active': subItem.isActive }"
                                    as-child
                                >
                                    <NuxtLink :to="subItem.url">{{
                                        subItem.title
                                    }}</NuxtLink>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarRail />
        </Sidebar>

        <SidebarInset>
            <header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                <SidebarTrigger class="-ml-1" />
                <Separator orientation="vertical" class="mr-2 h-4" />
                <DocumentationBreadcrumbMenu />
            </header>
            <div class="flex p-3">
                <slot />
                <!-- <DocumentationInPageNavigation /> -->
            </div>
        </SidebarInset>
    </SidebarProvider>
</template>
