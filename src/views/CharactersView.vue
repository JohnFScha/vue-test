<template>
  <HeaderComponent @updateCharacters="refreshCharacterList" />
  <main class="bg-base-300 min-h-screen">
    <CharactersList :characters="characters" />
  </main>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { getCharactersAPI, searchByNameAPI } from "../api/apiCalls";
import { Result } from "@/types/characters";
import CharactersList from "../components/CharactersList.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

const characters = ref<Result[]>([]);

async function fetchCharacters() {
  characters.value = await getCharactersAPI();
}

fetchCharacters();

async function refreshCharacterList(searchQuery: string) {
  if (searchQuery.trim() === "") {
    await fetchCharacters();
  } else {
    characters.value = await searchByNameAPI(searchQuery);
  }
}
</script>
