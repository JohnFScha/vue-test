<template>
  <PaginationComponent :offset="store.offset" :sibling-count="siblingCount" @update:offset="updateOffset"
    class="pb-5" />

  <section v-if="!store.loading" class="flex flex-col items-center gap-5">
    <!-- Character Cards -->
    <ul v-if="store.characters.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
      <CharacterCard v-for="(character, index) in store.characters" :key="character.id" :index="index.toString()" :character="character" />
    </ul>

    <!-- Fallback Message -->
    <ul v-else class="min-h-screen flex items-center justify-center">
      <li class="card">
        <h3 class="text-5xl font-bold">No characters found...</h3>
      </li>
    </ul>

  </section>
  <section v-else class=" min-h-screen flex justify-center items-center">
    <LoaderSpinner />
  </section>
</template>


<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useCharacterStore } from '@/store';

import CharacterCard from './CharacterCard.vue';
import PaginationComponent from './PaginationComponent.vue';
import LoaderSpinner from './LoaderSpinner.vue';

// Access the character store
const store = useCharacterStore();

const siblingCount = ref(2); // Number of sibling pages to display

// Fetch initial data on component mount
onMounted(async () => {
  await store.fetchCharacters();
  await store.fetchTotalPages();
});


// Update offset
function updateOffset(newOffset: number) {
  store.offset = newOffset;
  store.fetchCharacters(); // Fetch new data when offset changes
}
</script>
