<template>
  <div>
    <h4>Description</h4>
    <p>{{ description }}</p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps({
  description: {
    type: String,
    required: true,
  },
});
</script>
