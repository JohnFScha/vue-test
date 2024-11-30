<template>
  <nav class="flex justify-center gap-5 items-center w-full p-5">
    <router-link to="/">Home</router-link> |
    <router-link to="/characters-list">Characters</router-link> 
  </nav>
  <router-view />
</template>

<script setup>
import './assets/tailwind.css'
</script>

<style>
</style>
