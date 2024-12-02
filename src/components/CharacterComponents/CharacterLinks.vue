<template>
  <div class="flex flex-col gap-2">
    <h2 class="text-start text-2xl italic font-bold">Links</h2>
    <ul class="flex w-full justify-start gap-5">
      <li class="text-lg" v-for="link in urls" :key="link.url">
        <a class="btn btn-info w-full" v-if="link.type === 'detail'" :href="link.url" target="_blank">Details</a>
        <a class="btn btn-info w-full" v-else :href="link.url" target="_blank">Comics</a>
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
