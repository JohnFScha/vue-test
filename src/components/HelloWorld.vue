<template>
  <div class="hello flex flex-col w-full items-center">
    <h1>{{ props.msg }}</h1>

  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
  msg: String
})

</script>
