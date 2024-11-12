<template>
  <div class="container">
    <h1>This is an about page</h1>
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
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>