<template>
    <div class="bg-white rounded-lg shadow-lg overflow-hidden w-full">
        <!-- Meal Image -->
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full h-100 object-cover" />

        <!-- Meal Info -->
        <div class="p-6">
            <h1 class="text-3xl font-bold text-orange-500 mb-4">
                {{ meal.strMeal }}
            </h1>
            <div class="grid grid-cols-3 gap-4 mt-4">
                <div>
                    <p class="text-sm text-gray-600 mb-2">
                        <strong>Category:</strong> {{ meal.strCategory || 'N/A' }}
                    </p>
                </div>
                <div>
                    <p class="text-sm text-gray-600 mb-2">
                        <strong>Area:</strong> {{ meal.strArea || 'N/A' }}
                    </p>
                </div>
                <div>
                    <p class="text-sm text-gray-600 mb-4">
                        <strong>Tags:</strong> {{ meal.strTags ? meal.strTags.split(',').join(', ') : 'N/A' }}
                    </p>
                </div>
            </div>

            <!-- Instructions -->
            <h2 class="text-lg font-semibold text-gray-800 mb-2">Instructions</h2>
            <p class="text-sm text-gray-700 leading-relaxed">
                {{ meal.strInstructions || 'No instructions available.' }}
            </p>

            <!-- Ingredients and Measures -->
            <div class="grid grid-cols-2 gap-6 mt-6">
                <!-- Ingredients -->
                <div>
                    <h2 class="text-lg font-semibold text-gray-800 mb-2">Ingredients</h2>
                    <ul class="list-disc list-inside text-sm text-gray-700">
                        <template v-for="(el, index) of new Array(20)">
                            <li v-if="meal[`strIngredient${index + 1}`]" :key="`ingredient-${index}`"
                                class="items-center px-2">
                                {{ meal[`strIngredient${index + 1}`] }}
                            </li>
                        </template>
                    </ul>
                </div>

                <!-- Measures -->
                <div>
                    <h2 class="text-lg font-semibold text-gray-800 mb-2">Measures</h2>
                    <ul class="list-disc list-inside text-sm text-gray-700">
                        <template v-for="(el, index) of new Array(20)">
                            <li v-if="meal[`strMeasure${index + 1}`]" :key="`measure-${index}`"
                                class="items-center px-2">
                                {{ meal[`strMeasure${index + 1}`] }}
                            </li>
                        </template>
                    </ul>
                </div>
            </div>

            <!-- Links -->
            <div class="mt-6 flex gap-2">
                <YouTubeButton :href="meal.strYoutube">Watch on YouTube</YouTubeButton>
                <SourceButton :href="meal.strSource">View Original Source</SourceButton>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';
import { useRoute } from 'vue-router';
import YouTubeButton from '../components/YouTubeButton.vue';
import SourceButton from '../components/SourceButton.vue';

const meal = ref({})
const route = useRoute()
onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
        .then(({ data }) => {
            meal.value = data.meals[0]
        })
})
</script>