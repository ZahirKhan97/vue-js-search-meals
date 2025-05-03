<template>
    <header class="bg-white shadow h-18">
        <nav class="container mx-auto flex items-center justify-between h-full">
            <!-- Logo -->
            <router-link :to="{ name: 'home' }" class="text-xl flex items-center font-bold px-4 h-full text-orange-600">
                MealFinder
            </router-link>

            <!-- Navigation Links -->
            <ul class="flex items-center gap-6">
                <li>
                    <router-link :to="{ name: 'byName' }"
                        class="px-2 h-full transition-colors hover:bg-orange-500 text-gray-700">
                        Search Meals
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'byLetter' }"
                        class="px-2 h-full transition-colors hover:bg-orange-500 text-gray-700">
                        Meals By Letter
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'ingredients' }"
                        class="px-2 h-full transition-colors hover:bg-orange-500 text-gray-700">
                        Meals by ingredients
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script setup></script>
