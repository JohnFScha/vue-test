<template>
  <section v-if="store.character?.name"
    class="flex flex-col items-start gap-5 p-6 shadow-lg shadow-black/50 rounded-lg text-base-300">
    <h3 class="text-4xl font-bold italic">{{ store.character?.name }}</h3>
    <article class="grid grid-cols-1 md:grid-cols-2 gap-10 ">
      <CharacterThumbnail :thumbnail="store.character.thumbnail" :name="store.character.name" />
      <div class="flex flex-col gap-2">
        <CharacterComics :comics="store.character.comics" />
        <CharacterSeries :series="store.character.series" />
        <CharacterStories :stories="store.character.stories" />
        <CharacterLinks :urls="store.character.urls" />
      </div>
    </article>
  </section>
  <div v-else>Loading...</div>
</template>

<script lang="ts" setup>
import CharacterThumbnail from './CharacterComponents/CharacterThumbnail.vue';
import CharacterComics from './CharacterComponents/CharacterComics.vue';
import CharacterSeries from './CharacterComponents/CharacterSeries.vue';
import CharacterStories from './CharacterComponents/CharacterStories.vue';
import CharacterLinks from './CharacterComponents/CharacterLinks.vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCharacterStore } from '@/store';

const store = useCharacterStore();

onMounted(async () => {
  const params = useRoute()
  const id = params.params.id.toString()
  store.fetchCharacter(id)
})
</script>