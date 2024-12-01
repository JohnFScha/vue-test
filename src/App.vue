<template>
  <HeaderComponent />
  <router-view />
  <footer class="container flex justify-center bg-base-300 py-10">
    Data provided by Marvel ™
  </footer>
</template>

<script setup>
import './assets/tailwind.css'
import HeaderComponent from './components/HeaderComponent.vue';
</script>

<style>
</style>
