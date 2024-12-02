<template>
  <div>
    <img :src="`${thumbnail.path}.${thumbnail.extension}`" width="550" height="550" :alt="`Thumbnail of ${name}`" class=" rounded-md shadow-md shadow-base-300"/>
  </div>
</template>

<script lang="ts" setup>
import { Thumbnail } from '@/types/character';
import { PropType, defineProps } from 'vue';

defineProps({
  thumbnail: {
    type: Object as PropType<Thumbnail>,
    required: true,
  },
  name: {
    type: String,
    required: true
  }
});
</script>
