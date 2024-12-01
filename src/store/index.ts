import { getCharacterByIdAPI, getCharactersAPI, searchByNameAPI, searchComicByCharacterIdAPI } from '@/api';
import { CharacterResult } from '@/types/character';
import { Result } from '@/types/characters';
import { ResultComics } from '@/types/comics';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCharacterStore = defineStore('characters', () => {
  const characters = ref<Result[]>([]); // Holds the list of characters
  const character = ref<CharacterResult>(); // Holds the list of characters
  const comics = ref<ResultComics[]>([]); // Holds the list of characters
  const searchQuery = ref(''); // Current search query
  const offset = ref(0); // Current pagination offset

  // Fetch characters based on the current offset
  async function fetchCharacters() {
    try {
      characters.value = await getCharactersAPI(offset.value); // Fetch with updated offset
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  }

  async function fetchComics(characterId: string) {
    try {
      comics.value = await searchComicByCharacterIdAPI(characterId); // Fetch with updated offset
    } catch (error) {
      console.error("Error fetching comics:", error);
    }
  }

  async function fetchCharacter(characterId: string) {
    try {
      character.value = await getCharacterByIdAPI(characterId); // Fetch with updated offset
    } catch (error) {
      console.error("Error fetching character:", error);
    }
  }

  // Change the offset and trigger fetching characters
  async function changeOffset(newOffset: number) {
    offset.value = newOffset; // Update offset
    await fetchCharacters(); // Fetch characters with the updated offset
  }

  // Refresh character list based on the search query
  async function refreshCharacterList(query: string) {
    try {
      searchQuery.value = query; // Update the search query state
      if (query.trim() === "") {
        await fetchCharacters(); // Fetch all characters if query is empty
      } else {
        characters.value = await searchByNameAPI(query); // Fetch characters matching the search query
      }
    } catch (error) {
      console.error("Error refreshing character list:", error);
    }
  }

  return { characters, comics, character, searchQuery, offset, changeOffset, fetchCharacters, fetchCharacter, fetchComics, refreshCharacterList };
});
