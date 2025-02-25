<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
</script>

<template>
    <Tabs default-value="preview" class="w-full">
        <TabsList class="grid w-full grid-cols-2 max-w-sm mx-auto">
            <TabsTrigger value="preview"> Preview </TabsTrigger>
            <TabsTrigger value="code"> Code </TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
            <slot name="preview"></slot>
        </TabsContent>
        <TabsContent value="code">
            <slot name="code"></slot>
        </TabsContent>
    </Tabs>
</template>
