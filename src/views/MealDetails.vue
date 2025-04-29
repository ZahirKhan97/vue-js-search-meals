<template>
    <div class="bg-white rounded-lg shadow-lg overflow-hidden w-full">
            <!-- Meal Image -->
            <img 
                :src="meal.strMealThumb" 
                :alt="meal.strMeal" 
                class="w-full h-100 object-cover"
            />

            <!-- Meal Info -->
            <div class="p-6">
                <h1 class="text-3xl font-bold text-gray-800 mb-4">
                    {{ meal.strMeal }}
                </h1>
                <p class="text-sm text-gray-600 mb-2">
                    <strong>Category:</strong> {{ meal.strCategory || 'N/A' }}
                </p>
                <p class="text-sm text-gray-600 mb-2">
                    <strong>Area:</strong> {{ meal.strArea || 'N/A' }}
                </p>
                <p class="text-sm text-gray-600 mb-4">
                    <strong>Tags:</strong> {{ meal.strTags ? meal.strTags.split(',').join(', ') : 'N/A' }}
                </p>

                <!-- Instructions -->
                <h2 class="text-lg font-semibold text-gray-800 mb-2">Instructions</h2>
                <p class="text-sm text-gray-700 leading-relaxed">
                    {{ meal.strInstructions || 'No instructions available.' }}
                </p>

                <!-- Ingredients -->
                <h2 class="text-lg font-semibold text-gray-800 mt-6 mb-2">Ingredients</h2>
                <ul class="list-disc list-inside text-sm text-gray-700">
                    <li v-for="(ingredient, index) in ingredients" :key="index">
                        {{ ingredient }}
                    </li>
                </ul>

                <!-- Links -->
                <div class="mt-6 flex gap-4">
                    <a 
                        :href="meal.strYoutube" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg transition-all text-sm font-medium"
                    >
                        Watch on YouTube
                    </a>
                    <a 
                        :href="meal.strSource" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition-all text-sm font-medium"
                    >
                        View Source
                    </a>
                </div>
            </div>
        </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';
import { useRoute } from 'vue-router';

const meal = ref({})
const route = useRoute()
onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({data}) => {
        debugger;
        meal.value = data.meals[0]
    })
})
</script>