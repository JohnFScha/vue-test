<template>
  <div class="spinner-container">
    <div class="spinner"></div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px; /* Adjust to fit your layout */
}

.spinner {
  width: 60px;
  height: 60px;
  border: 4px solid white;
  border-top: 4px solid  rgb(147, 29, 29);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
