<template>
  <nav class="flex justify-center gap-5 items-center w-full p-5">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/testing">Testing</router-link>
  </nav>
  <router-view />
</template>

<script setup>
import './assets/tailwind.css'
</script>

<style>
</style>
