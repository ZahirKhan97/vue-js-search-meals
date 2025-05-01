<template>
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
                <YouTubeButton :href="meal.strYoutube"></YouTubeButton>
                <SourceButton :href="meal.strSource"></SourceButton>
            </div>
        </div>
</template>

<script setup>
import YouTubeButton from '../components/YouTubeButton.vue';
import SourceButton from '../components/SourceButton.vue';
const {meals} = defineProps({
    meals: {
        type: Array,
        required: true,
    }
})
function getShortInstructions(instructions) {
    if (!instructions) return 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione veritatis nihil iure voluptas autem iusto.';
    return instructions.split(' ').slice(0, 18).join(' ') + '...';
}
</script>