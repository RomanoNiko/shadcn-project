<script setup>
import { ref, onMounted, nextTick } from "vue";
import { Clipboard, ClipboardCheck } from "lucide-vue-next";

const copied = ref(false);
const contentText = ref("");

const cleanText = (text) => {
    return text
        .split("\n") // Pisahkan teks menjadi array per baris
        .map((line) => line.trimEnd()) // Hapus spasi di akhir setiap baris
        .filter((line) => line.length > 0) // Hapus baris kosong
        .join("\n"); // Gabungkan kembali menjadi string
};

const copyToClipboard = async () => {
    try {
        await navigator.clipboard.writeText(contentText.value);
        copied.value = true;
        setTimeout(() => (copied.value = false), 2000);
    } catch (error) {
        console.error("Gagal menyalin teks:", error);
    }
};

onMounted(async () => {
    await nextTick(); // Tunggu sampai Vue selesai merender slot

    const preElement = document.querySelector(".copy-content");

    if (preElement) {
        contentText.value = cleanText(preElement.innerText);

        // Observer untuk menangkap perubahan dalam slot
        const observer = new MutationObserver(() => {
            contentText.value = cleanText(preElement.innerText);
        });

        observer.observe(preElement, { childList: true, subtree: true });
    }
});
</script>

<template>
    <Card
        class="relative flex w-full bg-slate-950 shadow rounded-lg overflow-auto"
    >
        <button
            @click="copyToClipboard"
            class="absolute top-3 right-3 p-2 rounded bg-gray-800 hover:bg-gray-700 transition"
        >
            <ClipboardCheck v-if="copied" class="w-5 h-5 text-green-400" />
            <Clipboard v-else class="w-5 h-5 text-gray-400" />
        </button>

        <div class="p-1 text-sm">
            <slot name="content"></slot>
        </div>
    </Card>
</template>
