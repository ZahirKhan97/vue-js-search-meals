<template>

    <Navbar />
    <main class="container mx-auto flex items-center justify-between">
        <div class="flex flex-col gap-6 p-8 w-full">
            <router-view />
        </div>
    </main>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Navbar from './Navbar.vue';

</script>