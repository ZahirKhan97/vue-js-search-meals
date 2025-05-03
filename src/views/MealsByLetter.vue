<template>
    <div class="flex flex-wrap justify-center gap-4 mt-1 w-full">
        <router-link v-for="letter in letters" :to="{ name: 'byLetter', params: { letter } }" :key="letter"
            class="text-gray-700 text-lg font-medium hover:text-orange-500 transition"
            :class="{ 'text-orange-500 underline underline-offset-4': route.params.letter === letter }"
            >
            {{ letter }}
        </router-link>
    </div>
    <h1 class="text-3xl font-bold text-orange-500 mb-1">
        Search By Letter
    </h1>
    <!-- Meals Cards -->
    <MealsList :meals="meals" />
</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import MealsList from '../components/MealsList.vue';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const route = useRoute();
const meals = computed(() => store.state.mealsByLetter)

watch(route, () => {
    if (route.params.letter) {
        store.dispatch('searchMealsByLetter', route.params.letter);
    }
})
onMounted(() => {
    if (route.params.letter) {
        store.dispatch('searchMealsByLetter', route.params.letter);
    }
})
</script>