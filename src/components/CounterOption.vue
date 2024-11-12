<template>
  <div class="container">
    <h3 class="count">{{ counter }}</h3>
    <div class="sub-container">
      <button @click="addCounter" class="btn add">Add count!</button>
      <button @click="removeCounter" class="btn remove">Remove count!</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: "CounterOption",
  data() {
    return { counter: 0 }
  },
  methods: {
    addCounter() {
      if (this.counter >= 0) {
        this.counter++
      }
    }, 
    removeCounter() {
      if (this.counter > 0) {
        this.counter--
      }
    }
  },
})
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
</style>