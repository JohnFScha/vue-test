<template>
  <div>
    <h2 class="text-start text-2xl italic font-bold">Comics</h2>
    <ul class="flex flex-col items-start">
      <li class="list-disc text-lg" v-for="comic in comics.items" :key="comic.resourceURI">
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
