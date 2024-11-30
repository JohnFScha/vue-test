<template>
  <div class="flex flex-col gap-2">
    <h1 class="text-center text-2xl">This is an about page</h1>
    <CounterComposition />
  </div>
</template>

<script lang="ts">
import CounterComposition from './CounterComposition.vue';
// import CounterOption from './CounterOption.vue';
export default {
  name: "AboutPage",
  components: {  CounterComposition }
}
</script>

<style lang="css" scoped>
</style>