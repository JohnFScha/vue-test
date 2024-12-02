<template>
  <HeaderComponent />
  <router-view class="bg-white" />
  <footer class="w-full flex justify-center bg-white border border-base-100/50 text-red-600 font-bold py-10">
    Data provided by Marvel. © 2024 MARVEL
  </footer>
</template>

<script setup>
import './assets/tailwind.css'
import HeaderComponent from './components/HeaderComponent.vue';
</script>

<style>
</style>
