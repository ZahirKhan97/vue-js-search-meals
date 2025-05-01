<template>
    <h1 class="text-3xl font-bold text-gray-800 mb-1">
        Ingredients
    </h1>
    <!-- Ingredients Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3">
        <router-link v-for="ingredient in ingredients" :key="ingredient.idIngredient"
            :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient } }"
            class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow block">
            <!-- Ingredient Name -->
            <h2 class="text-lg font-semibold text-gray-800 mb-2">
                {{ ingredient.strIngredient }}
            </h2>
        </router-link>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';
const ingredients = ref([])
onMounted(() => {
    axiosClient.get('list.php?i=list')
        .then(({ data }) => {
            ingredients.value = data.meals
        })
})
</script>