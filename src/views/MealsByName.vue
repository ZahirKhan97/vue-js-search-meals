<template>
    <!-- Search Input -->
    <div class="w-full">
        <input type="text" placeholder="Search for meals..." v-model="keyword" @change="searchMeals"
            class="w-full px-4 py-3 rounded-lg border-2 bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm" />
    </div>

    <!-- Meals Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        <div v-for="meal in meals" :key="meal.idMeal"
            class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <!-- Meal Image -->
            <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
                <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full h-50 object-cover" />
            </router-link>
            <!-- Meal Info -->
            <div class="p-4">
                <h3 class="text-lg font-bold text-orange-500 truncate">
                    {{ meal.strMeal }}
                </h3>
                <p class="text-sm text-gray-600 mt-2">
                    {{ getShortInstructions(meal.strInstructions) || 'N/A' }}
                </p>
                <p class="text-sm text-gray-600 mt-2 truncate">
                    <strong>Category:</strong> {{ meal.strCategory || 'N/A' }}
                </p>
                <p class="text-sm text-gray-600 truncate">
                    <strong>Area:</strong> {{ meal.strArea || 'N/A' }}
                </p>
                <a :href="meal.strYoutube" target="_blank" rel="noopener noreferrer"
                    class="inline-block mt-4 px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg transition-all text-sm font-medium mr-2">
                    YouTube
                </a>
                <router-link :to="meal.strSource"
                    class="inline-block mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 hover:shadow-lg transition-all text-sm font-medium">
                    Source
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';

const keyword = ref('');
const meals = computed(() => store.state.searchedMeals)
const route = useRoute()
function searchMeals() {
    store.dispatch('searchMeals', keyword.value)
}
function getShortInstructions(instructions) {
    if (!instructions) return 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione veritatis nihil iure voluptas autem iusto.';
    return instructions.split(' ').slice(0, 18).join(' ') + '...';
}
onMounted(() => {
    keyword.value = route.params.name;
    if (keyword.value) {
        searchMeals()
    }
})
</script>
