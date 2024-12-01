<template>
  <div>
    <h2>Series</h2>
    <ul>
      <li v-for="series in series.items" :key="series.resourceURI">
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
