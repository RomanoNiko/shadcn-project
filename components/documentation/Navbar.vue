<script setup lang="ts">
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CircleUser, Menu, Package2, Search } from "lucide-vue-next";
</script>

<template>
    <div class="flex h-auto w-full flex-col">
        <header class="sticky top-0 flex h-14 items-center gap-4 px-4 md:px-6">
            <nav
                class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
            >
                <nuxt-link
                    to="/"
                    class="flex items-center gap-2 text-lg font-semibold md:text-base"
                >
                    <Package2 class="h-6 w-6" />
                    <span class="sr-only">Acme Inc</span>
                </nuxt-link>
                <nuxt-link
                    to="/"
                    class="text-muted-foreground transition-colors hover:text-foreground"
                >
                    Home
                </nuxt-link>
                <nuxt-link
                    to="/documentation"
                    class="text-muted-foreground transition-colors hover:text-foreground"
                >
                    Documentation
                </nuxt-link>
            </nav>
            <Sheet>
                <SheetTrigger as-child>
                    <Button
                        variant="outline"
                        size="icon"
                        class="shrink-0 md:hidden"
                    >
                        <Menu class="h-5 w-5" />
                        <span class="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <nav class="grid gap-6 text-lg font-medium pb-5">
                        <a
                            href="#"
                            class="flex items-center gap-2 text-lg font-semibold"
                        >
                            <Package2 class="h-6 w-6" />
                            <span class="sr-only">Acme Inc</span>
                        </a>
                        <a
                            href="#"
                            class="text-muted-foreground hover:text-foreground"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            class="text-muted-foreground hover:text-foreground"
                        >
                            Documentation
                        </a>
                    </nav>
                    <DocumentationSidebarTest class="md:hidden" />
                </SheetContent>
            </Sheet>
            <div
                class="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4"
            >
                <form class="ml-auto flex-1 sm:flex-initial">
                    <div class="relative">
                        <Search
                            class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                        />
                        <Input
                            type="search"
                            placeholder="Search products..."
                            class="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                        />
                    </div>
                </form>
            </div>
        </header>
    </div>
</template>
