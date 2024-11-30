<template>
  <div>
    <h2>Character List</h2>
    <ul v-if="characters.length > 1" class="grid grid-cols-4 gap-10 p-5">
      <CharacterCard v-for="character in characters" :key="character.id" :character="character" />
    </ul>
    <ul v-else class="container">
      <li class="card">
        <h3>No info...</h3>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue';
import { Result } from '@/types';
import CharacterCard from './CharacterCard.vue';

defineProps({
  characters: {
    type: Array as PropType<Result[]>,
    default: () => [],
  },
});
</script>
