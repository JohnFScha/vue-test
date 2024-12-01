<template>
  <div>
    <img :src="`${thumbnail.path}.${thumbnail.extension}`" :alt="`Thumbnail of ${name}`" class="rounded-md"/>
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
