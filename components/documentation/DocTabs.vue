<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
</script>

<template>
    <Tabs default-value="preview" class="w-full">
        <TabsList class="grid w-full grid-cols-2">
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
