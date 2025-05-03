<template>
    <!-- Search Input -->
    <div class="w-full">
        <input type="text" placeholder="Search for meals..." v-model="keyword" @change="searchMeals"
            class="w-full px-4 py-3 rounded-lg border-2 bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm" />
    </div>

    <!-- Meals Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        <MealItem :meals="meals"/>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';

import MealItem from '../components/MealItem.vue';

const keyword = ref('');
const meals = computed(() => store.state.searchedMeals)
const route = useRoute()
function searchMeals() {
    store.dispatch('searchMeals', keyword.value)
}

onMounted(() => {
    keyword.value = route.params.name;
    if (keyword.value) {
        searchMeals()
    }
})
</script>
