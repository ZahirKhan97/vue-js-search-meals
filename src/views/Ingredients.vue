<template>
    <h1 class="text-3xl font-bold text-orange-500 mb-1">
        Ingredients
    </h1>
    <div class="w-full">
        <input type="text" placeholder="Search for Ingredient..." v-model="keyword"
            class="w-full px-4 py-3 rounded-lg border-2 bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm" />
    </div>

    <!-- Ingredients Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3">
        <router-link v-for="ingredient in computedIngredients" :key="ingredient.idIngredient"
            :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient } }"
            class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow block">
            <!-- Ingredient Name -->
            <h2 class="text-lg font-bold text-orange-500 mb-2">
                {{ ingredient.strIngredient }}
            </h2>
        </router-link>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';
const keyword = ref('')
const ingredients = ref([])
const computedIngredients = computed(() => {
    return ingredients.value.filter((i) => i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()))
})
onMounted(() => {
    axiosClient.get('list.php?i=list')
        .then(({ data }) => {
            ingredients.value = data.meals
        })
})
</script>