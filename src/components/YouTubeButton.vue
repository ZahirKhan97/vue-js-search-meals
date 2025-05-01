<template>
    <a :href="href" target="_blank" rel="noopener noreferrer"
        class="inline-block mt-4 px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg transition-all text-sm font-medium mr-2">
        <slot>YouTube</slot>
    </a>
</template>

<script setup>
const props = defineProps({
    href: String
})
</script>