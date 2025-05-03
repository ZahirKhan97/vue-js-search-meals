<template>
    <div class="flex flex-wrap justify-center gap-4 mt-1 w-full">
        <router-link v-for="letter in letters" :to="{ name: 'byLetter', params: { letter } }" :key="letter"
            class="text-gray-700 text-lg font-medium hover:text-blue-500 transition">
            {{ letter }}
        </router-link>
    </div>
    <!-- Meals Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        <MealItem :meals="meals"/>
    </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import MealItem from '../components/MealItem.vue';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const route = useRoute();
const meals = computed(() => store.state.mealsByLetter)

watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})
// onMounted(() => {
//     store.dispatch('searchMealsByLetter', route.params.letter)
// })
</script>