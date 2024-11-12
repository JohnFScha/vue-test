<template>
  <div class="container">
    <h3 class="count">{{ counter }}</h3>
    <div class="sub-container">
      <button @click="addCounter" class="btn add">Add count!</button>
      <button @click="removeCounter" class="btn remove">Remove count!</button>
      <button @click="resetCounter" class="btn reset">Reset count!</button>
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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 5px;
}

.sub-container {
  display: flex;
  gap: 10px;
}

.count {
  padding: 10px;
  font-size: 16px;
  background: #000;
  color: white;
  border: 1px solid white;
  border-radius: 10px;
}

.btn {
  padding: 5px;
  border-radius: 5px;
  border: 1px solid rgb(36, 35, 35);
}

.add {
  background: #52b302;
  color: white;
}

.add:hover {
  background: #52b302c5;
  color: white;
}

.remove {
  background: #de0505;
  color: black;
}

.remove:hover {
  background: #de0505b9;
  color: black;
}

.reset {
  background: #d2bd00;
  color: black;
}

.reset:hover {
  background: #d2bd00ac;
  color: black;
}
</style>