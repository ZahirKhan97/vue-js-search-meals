<template>
     <h1 class="text-3xl font-bold text-orange-500">
        Meals For {{ route.params.ingredient }}
    </h1>
    <!-- Meals Cards -->
    <MealsList :meals="meals" />
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import MealsList from '../components/MealsList.vue';
const meals = computed(() => store.state.mealsByIngredient)
const route = useRoute();
onMounted(() => {
    store.dispatch('searchMealsByIngredient', route.params.ingredient)
})
</script>