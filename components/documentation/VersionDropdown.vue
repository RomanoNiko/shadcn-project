<script setup lang="ts">
import { GalleryVerticalEnd } from "lucide-vue-next";

const {
    selectedVersion,

    dropdownOpen,
    toggleDropdown,
} = useSidebar();
</script>
<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <SidebarMenuButton
                size="lg"
                :class="{
                    'data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground':
                        dropdownOpen,
                }"
                @click="toggleDropdown"
            >
                <div
                    class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
                >
                    <GalleryVerticalEnd class="size-4" />
                </div>
                <div class="flex flex-col gap-0.5 leading-none">
                    <span class="font-semibold">Documentation</span>
                    <span>v{{ selectedVersion }}</span>
                </div>
                <!-- <ChevronsUpDown class="ml-auto" /> -->
            </SidebarMenuButton>
        </DropdownMenuTrigger>
        <!-- <DropdownMenuContent
                                v-if="dropdownOpen"
                                class="w-[--radix-dropdown-menu-trigger-width]"
                                align="start"
                            >
                                <DropdownMenuItem
                                    v-for="version in data.versions"
                                    :key="version"
                                    @click="setSelectedVersion(version)"
                                >
                                    v{{ version }}
                                    <Check
                                        v-if="version === selectedVersion"
                                        class="ml-auto"
                                    />
                                </DropdownMenuItem>
                            </DropdownMenuContent> -->
    </DropdownMenu>
</template>
