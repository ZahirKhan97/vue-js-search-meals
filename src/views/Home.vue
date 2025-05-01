<template>
    <div class="rounded-lg flex flex-col p-8 w-full">
        <!-- Search Input -->
        <!-- Alphabet Navigation -->
        
       
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import store from '../store';
import axiosClient from '../axiosClient';


const ingredients = ref([])
onMounted(async () => {
    let response = await axiosClient.get('list.php?i=list')
    ingredients.value = response.data
})
</script>