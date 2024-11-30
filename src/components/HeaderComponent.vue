<template>
  <header class="container flex items-center gap-5 p-2 bg-white">
    <router-link to="/">
      <img src="../assets/Marvel_Logo.png" alt="marvel app" class="w-[100px] h-[40px]">
    </router-link>
    <hr class="h-[40px] w-[1px] bg-base-300/50">
    <nav class="w-full">
      <input v-model="searchQuery" @input="handleInput" placeholder="Search characters by name" class="input bg-white placeholder:text-black/50 w-full px-3"/>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from "vue";

const searchQuery = ref("");
const emit = defineEmits(["updateCharacters"]);

function handleInput() {
  emit("updateCharacters", searchQuery.value);
}
</script>

<style scoped>
header {
  box-shadow: 2px 2px 2px black !important;
}
</style>