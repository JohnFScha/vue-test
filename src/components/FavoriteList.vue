<template>
  <section class="flex flex-col items-center gap-5">
    <!-- Character Cards -->
    <ul v-if="store.favorites.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
      <CharacterCard v-for="(favorite, index) in store.favorites" :key="favorite.id" :index="index.toString()" :character="favorite" />
    </ul>

    <!-- Fallback Message -->
    <ul v-else class="min-h-screen flex items-center justify-center">
      <li class="card">
        <h3 class="text-5xl font-bold">No favorites yet...</h3>
      </li>
    </ul>

  </section>
</template>


<script lang="ts" setup>
import { useCharacterStore } from '@/store';

import CharacterCard from './CharacterCard.vue';

// Access the character store
const store = useCharacterStore();

</script>
