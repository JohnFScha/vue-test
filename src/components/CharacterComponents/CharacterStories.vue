<template>
  <div>
    <h2 class="text-start text-2xl italic font-bold">Stories</h2>
    <ul class="flex flex-col items-start">
      <li class="list-disc text-lg" v-for="story in stories.items" :key="story.resourceURI">
        {{ story.name }} ({{ story.type }})
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
defineProps({
  stories: {
    type: Object,
    required: true,
  },
});
</script>
