<template>
  <div>
    <h2 class="text-start text-2xl italic font-bold">Links</h2>
    <ul class="flex flex-col items-start">
      <li class="list-disc text-lg" v-for="link in urls" :key="link.url">
        <a class="link" v-if="link.type === 'detail'" :href="link.url" target="_blank">Details</a>
        <a class="link" v-else :href="link.url" target="_blank">Comics</a>
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
