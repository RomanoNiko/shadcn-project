<script setup lang="ts">
import { Card, CardContent } from "@/components/ui/card";
</script>

<template>
    <Card>
        <CardContent
            class="flex justify-center items-center p-4 border rounded bg-gray-100 min-h-[200px]"
        >
            <slot></slot>
        </CardContent>
    </Card>
</template>
