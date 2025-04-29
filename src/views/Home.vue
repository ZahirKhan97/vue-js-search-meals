<template>
    <div class="rounded-lg flex flex-col p-8 w-full">
        <!-- Search Input -->
            

        <!-- Alphabet Navigation -->
        <div class="flex flex-wrap justify-center gap-4 mt-4 w-full">
            <router-link 
                v-for="letter in letters"
                :to="{name: 'byLetter', params: { letter }}" 
                :key="letter" 
                class="text-gray-700 text-lg font-medium hover:text-blue-500 transition"
            >
                {{ letter }}
            </router-link>
        </div>
        <pre>
            {{ ingredients }}
        </pre>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import store from '../store';
import axiosClient from '../axiosClient';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const ingredients = ref([])
onMounted(async () => {
    let response = await axiosClient.get('list.php?i=list')
    ingredients.value = response.data
})
</script>