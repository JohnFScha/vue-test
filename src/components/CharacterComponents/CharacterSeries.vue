<template>
  <div>
    <h2 class="text-start text-2xl italic font-bold">Series</h2>
    <ul class="flex flex-col items-start">
      <li class="list-disc text-lg" v-for="series in series.items" :key="series.resourceURI">
        {{ series.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
defineProps({
  series: {
    type: Object,
    required: true,
  },
});
</script>
