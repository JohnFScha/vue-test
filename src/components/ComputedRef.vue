  <template>
    <section class="container">
      <article class="item">
        <form @submit.prevent="handleSubmit" class="item">
          <label for="reverse">Encrypt a password!</label>
          <input v-model="word" type="text" name="reverse" id="reverse">
          <button type="submit" class="btn">Hash</button>
        </form>
      </article>
      <article class="item">
        <h1>Your text will appear here: <span>{{ word }}</span></h1>
        <h2>Your reversed word will appear here: <span>{{ hashed }}</span></h2>
      </article>
    </section>
  </template>

<script lang="ts" setup>
import { ref } from 'vue';

// Set up refs for word input and hashed output
const word = ref('');
const hashed = ref('');

// Function to handle form submission and hash the word
const handleSubmit = () => {
  hashed.value = word.value.replace(/\w+/g, "*".repeat(word.value.length)); // Simple hashing logic
};

</script>

<style scoped>
</style>