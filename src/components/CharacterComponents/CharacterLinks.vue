<template>
  <div>
    <h2>Links</h2>
    <ul>
      <li v-for="link in urls" :key="link.url">
        <a :href="link.url" target="_blank">{{ link.type }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { URL } from '@/types/character';
import { PropType, defineProps } from 'vue';

defineProps({
  urls: {
    type: Array as PropType<URL[]>,
    required: true,
  },
});
</script>
