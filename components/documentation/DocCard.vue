<script setup lang="ts">
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
</script>

<template>
    <Card>
        <CardHeader>
            <CardTitle
                class="scroll-m-20 text-4xl font-bold tracking-tight pb-3"
            >
                <slot name="title"></slot>
            </CardTitle>
            <div class="text-lg text-muted-foreground">
                <slot name="description_title"></slot>
            </div>
        </CardHeader>
        <CardContent>
            <div class="text-lg text-justify text-black">
                <slot name="description"></slot>
            </div>
        </CardContent>
    </Card>
</template>
