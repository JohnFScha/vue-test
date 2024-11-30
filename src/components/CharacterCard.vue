<template>
  <div class="card bg-slate-600 shadow-xl">
    <figure>
      <img :src="character?.thumbnail.path + '.' + character?.thumbnail.extension" :alt="character?.name" class="object-cover aspect-square"/>
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ character?.name }}</h2>
      <p>{{ character?.description }}</p>
      <div class="card-actions justify-end">
        <router-link :to="`/character/${character?.id}`" class="btn btn-primary">See more!</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Result } from '@/types';
import { defineProps, PropType } from 'vue';

defineProps({
  character: {
    type: Object as PropType<Result>,
  }
})
</script>