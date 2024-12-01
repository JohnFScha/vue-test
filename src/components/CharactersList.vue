<template>
  <section class="flex items-center gap-x-3">
    <!-- Previous Page Button -->
    <button class="btn btn-circle" @click="goToPreviousPage" :disabled="store.offset === 0">
      <CircleArrowLeft :size="50" />
    </button>

    <!-- Character Cards -->
    <ul v-if="characters.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      <CharacterCard v-for="(character, index) in characters" :key="character.id" :index="index.toString()"
        :character="character" />
    </ul>

    <!-- Fallback Message -->
    <ul v-else class="container">
      <li class="card">
        <h3>No characters found...</h3>
      </li>
    </ul>

    <!-- Next Page Button -->
    <button class="btn btn-circle" @click="goToNextPage">
      <CircleArrowRight :size="50" />
    </button>
  </section>
</template>


<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import { CircleArrowLeft, CircleArrowRight } from 'lucide-vue-next';
import CharacterCard from './CharacterCard.vue';
import { useCharacterStore } from '@/store';

// Access the character store
const store = useCharacterStore();

// Computed Characters (reactive from the store)
const characters = computed(() => store.characters);

// Fetch initial data on component mount
onMounted(() => {
  store.fetchCharacters();
});

// Pagination Handlers
function goToPreviousPage() {
  if (store.offset > 0) {
    store.changeOffset(store.offset - 9); // Adjust per API's page size
  }
}

function goToNextPage() {
  store.changeOffset(store.offset + 9); // Adjust per API's page size
}
</script>

