<script setup>
import { ref } from "vue";
import { Clipboard, ClipboardCheck } from "lucide-vue-next";

const props = defineProps({
    code: String,
});

const copied = ref(false);

const copyToClipboard = async () => {
    try {
        await navigator.clipboard.writeText(props.code);
        copied.value = true;
        setTimeout(() => (copied.value = false), 2000); // Reset setelah 2 detik
    } catch (error) {
        console.error("Gagal menyalin teks:", error);
    }
};
</script>

<template>
    <Card
        class="relative flex min-w-[300px] min-h-[200px] bg-slate-950 shadow-lg rounded-lg overflow-hidden"
    >
        <button
            @click="copyToClipboard"
            class="absolute top-3 right-3 p-2 rounded bg-gray-800 hover:bg-gray-700 transition"
        >
            <ClipboardCheck v-if="copied" class="w-5 h-5 text-green-400" />
            <Clipboard v-else class="w-5 h-5 text-gray-400" />
        </button>

        <CardContent class="p-4 w-full">
            <pre
                class="text-sm text-gray-300 font-mono whitespace-pre-wrap break-words"
            >
        <slot name="content"></slot>
      </pre>
        </CardContent>
    </Card>
</template>
