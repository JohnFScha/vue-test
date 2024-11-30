<template>
  <div>
    <h1>Marvel Characters</h1>
    <input v-model="searchQuery" @input="searchCharacters" placeholder="Search characters by name" />
    <CharactersList :characters="characters" />
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";
import { getCharactersAPI, searchByNameAPI } from "../api/apiCalls";
import { Result } from "@/types";
import CharactersList from "../components/CharactersList.vue";

const characters: Ref<Result[] | []> = ref([]);
const searchQuery = ref("");

async function fetchCharacters() {
  characters.value = await getCharactersAPI();
}

async function searchCharacters() {
  if (searchQuery.value.trim() === "") {
    fetchCharacters();
  } else {
    characters.value = await searchByNameAPI(searchQuery.value);
  }
}

fetchCharacters();
</script>
