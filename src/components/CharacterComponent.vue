<template>
  <section v-if="store.character?.name" class="flex flex-col items-start gap-5 p-5 border border-white/50 rounded-md">
    <h3 class="text-3xl italic">{{ store.character?.name }}</h3>
    <article class="flex justify-around gap-5">
      <CharacterThumbnail :thumbnail="store.character.thumbnail" :name="store.character.name" class="w-1/3"/>
      <div class="grid grid-cols-2 items-start gap-5 w-2/3">
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

<style scoped></style>