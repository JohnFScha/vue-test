<template>
  <div v-if="store.comic" class="comic-detail">
    <div class="card shadow-lg bg-white text-black shadow-black/50 rounded-lg p-6">
      <div class="flex gap-6">
        <img
          :src="`${store.comic.thumbnail.path}.${store.comic.thumbnail.extension}`"
          :alt="store.comic.title"
          width="500"
          height="500"
          class="rounded-lg"
        />
        <div class="flex-1">
          <h1 class="text-3xl font-bold mb-4">{{ store.comic.title }}</h1>
          <p class="text-lg text-gray-700 mb-6">
            <span v-if="store.comic.description">{{ store.comic.description }}</span>
            <span v-else>No description available.</span>
          </p>
          <ul class="text-base mb-4">
            <li><strong>Format:</strong> {{ store.comic.format }}</li>
            <li><strong>Page Count:</strong> {{ store.comic.pageCount }}</li>
            <li v-if="store.comic.prices.length">
              <strong>Prices:</strong>
              <span v-for="price in store.comic.prices" :key="price.type" class="block">
                {{ price.type }}: {{ price.price > 0 ? `$${price.price}` : 'Free' }}
              </span>
            </li>
            <li v-if="store.comic.series">
              <strong>Series:</strong> {{ store.comic.series.name }}
            </li>
            <li>
              <strong>On-Sale Date:</strong>
              {{ getDate('onsaleDate') }}
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-6">
        <h2 class="text-2xl font-bold mb-4">Creators</h2>
        <ul>
          <li
            v-for="creator in store.comic.creators.items"
            :key="creator.resourceURI"
            class="text-lg"
          >
            {{ creator.name }} - {{ creator.role }}
          </li>
        </ul>
      </div>
      <div v-if="store.comic.characters.items.length" class="mt-6">
        <h2 class="text-2xl font-bold mb-4">Characters</h2>
        <ul class="flex flex-wrap gap-4">
          <li
            v-for="character in store.comic.characters.items"
            :key="character.resourceURI"
            class="text-lg p-2 border rounded-lg shadow-sm"
          >
            {{ character.name }}
          </li>
        </ul>
      </div>
      <div class="mt-6 flex gap-4">
        <a
          v-for="url in store.comic.urls"
          :key="url.type"
          :href="url.url"
          target="_blank"
          class="btn btn-primary"
        >
          {{ url.type }}
        </a>
      </div>
    </div>
  </div>
  <div v-else class="flex justify-center items-center h-screen">
    <LoaderSpinner />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCharacterStore } from '@/store'; 
import LoaderSpinner from './LoaderSpinner.vue';

const route = useRoute();
const store = useCharacterStore();
const id = route.params.id.toString()


const getDate = (type: string) => {
  const date = store.comic?.dates.find((d) => d.type === type)?.date;
  return date ? new Date(date).toLocaleDateString() : 'N/A';
};

onMounted(() => store.fetchComicById(id));

</script>

<style scoped>
.comic-detail {
  max-width: 800px;
  margin: 2rem auto;
}
</style>
