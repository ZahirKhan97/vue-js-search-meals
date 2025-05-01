<template>
    <a :href="href" target="_blank" rel="noopener noreferrer"
        class="inline-block mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 hover:shadow-lg transition-all text-sm font-medium">
        <slot>Source</slot>
    </a>
</template>

<script setup>
const props = defineProps({
    href: String
})
</script>