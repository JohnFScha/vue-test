<template>
  <header class="w-full flex items-center gap-5 p-2 bg-white shadow-lg z-10 relative shadow-black/30 h-full">
    <router-link to="/">
      <img src="../assets/Marvel_Logo.png" alt="marvel app" class="w-[100px] h-[40px]">
    </router-link>
    <hr class="h-[40px] w-[1px] bg-base-300/50">
    <nav class="w-full">
      <input v-model="store.searchQuery" @input="searchAndRedirect" placeholder="Search characters by name" class="input bg-white placeholder:text-black/50 w-full px-3"/>
    </nav>
    <router-link to="/favorites">
      <Star :size="40" :fill="'black'" :color="'black'" />
    </router-link>
  </header>
</template>

<script lang="ts" setup>
import { useCharacterStore } from '@/store';
import { useRouter } from 'vue-router';
import { Star } from 'lucide-vue-next';
const store = useCharacterStore();
const router = useRouter();

function searchAndRedirect() {
  router.push('/'); // Navigate to home view
  store.refreshCharacterList(store.searchQuery); // Update the character list
}
</script>
