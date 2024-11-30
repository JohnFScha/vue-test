<template>
  <div class="card border w-fit m-auto p-2 justify-center items-center">
    <h3 class="text-center btn text-lg w-fit btn-accent">{{ counter }}</h3>
    <div class="card-body">
      <button @click="addCounter" class="btn btn-success">Add count!</button>
      <button @click="removeCounter" class="btn btn-warning">Remove count!</button>
      <button @click="resetCounter" class="btn btn-secondary">Reset count!</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue';

let counter: Ref<number> = ref(0);

function addCounter(): void {
  if (counter.value >= 0) {
    counter.value++
  }
}

function removeCounter(): void {
  if (counter.value > 0) {
    counter.value--
  }
}

function resetCounter(): void {
  if (counter.value !== 0) {
    counter.value = 0
  }
}

</script>

<style lang="css" scoped>
</style>