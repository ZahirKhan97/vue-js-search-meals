<template>
    <h1 class="text-3xl font-bold text-orange-500">
        Search Meals by Name
    </h1>
    <!-- Search Input -->
    <div class="w-full">
        <input type="text" placeholder="Search for Meals..." v-model="keyword" @change="searchMeals"
            class="w-full px-4 py-3 rounded-lg border-2 bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm" />
    </div>

    <!-- Meals Cards -->
    <MealsList :meals="meals" />
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';

import MealsList from '../components/MealsList.vue';

const keyword = ref('');
const meals = computed(() => store.state.searchedMeals)
const route = useRoute()
function searchMeals() {
    if (keyword.value) {
        store.dispatch('searchMeals', keyword.value)
    } else {
        store.commit('setSearchedMeals', [])
    }
}

onMounted(() => {
    keyword.value = route.params.name;
    if (keyword.value) {
        searchMeals()
    }
})
</script>
