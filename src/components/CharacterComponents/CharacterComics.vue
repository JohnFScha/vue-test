<template>
  <div>
    <h2>Comics</h2>
    <ul>
      <li v-for="comic in comics.items" :key="comic.resourceURI">
        {{ comic.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
defineProps({
  comics: {
    type: Object,
    required: true,
  },
});
</script>
