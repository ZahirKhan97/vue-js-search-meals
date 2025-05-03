<template>
    <!-- Meals Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        <MealsList :meals="meals" />
    </div>
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