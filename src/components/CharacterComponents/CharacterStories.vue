<template>
  <div>
    <h2>Stories</h2>
    <ul>
      <li v-for="story in stories.items" :key="story.resourceURI">
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
