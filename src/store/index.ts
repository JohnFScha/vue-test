import { getCharacterByIdAPI, getCharactersAPI, getTotalPages, searchByNameAPI, searchComicByCharacterIdAPI, searchComicByIdAPI } from '@/api';
import { CharacterResult } from '@/types/character';
import { Result } from '@/types/characters';
import { ResultComics } from '@/types/comics';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCharacterStore = defineStore('characters', () => {
  const characters = ref<Result[]>([]); // Holds the list of characters
  const character = ref<CharacterResult>(); // Holds the list of characters
  const comics = ref<ResultComics[]>([]); // Holds the list of characters
  const comic = ref<ResultComics>(); // Holds the list of characters
  const searchQuery = ref(''); // Current search query
  const offset = ref(0); // Current pagination offset
  const totalPages = ref<number | undefined>(0)
  const loading = ref<boolean>(false)
  const loadingComics = ref<boolean>(false)
  const favorites = ref<Result[]>(JSON.parse(localStorage.getItem('favorites') || '[]')); // Load from localStorage


  async function fetchTotalPages() {
    loading.value = true
    try {
      totalPages.value = await getTotalPages();
    } catch (error) {
      console.error("Error fetching total pages:", error);
    } finally {
      loading.value = false
    }
  }

  // Fetch characters based on the current offset
  async function fetchCharacters() {
    loading.value = true
    try {
      characters.value = await getCharactersAPI(offset.value); // Fetch with updated offset
    } catch (error) {
      console.error("Error fetching characters:", error);
    } finally {
      loading.value = false
    }
  }

  async function fetchComics(characterId: string) {
    loadingComics.value = true
    try {
      comics.value = await searchComicByCharacterIdAPI(characterId); // Fetch with updated offset
    } catch (error) {
      console.error("Error fetching comics:", error);
    } finally {
      loadingComics.value = false
    }
  }

  async function fetchComicById(comicId: string) {
    loading.value = true
    try {
      comic.value = await searchComicByIdAPI(comicId); // Fetch with updated offset
    } catch (error) {
      console.error("Error fetching comics:", error);
    } finally {
      loading.value = false
    }
  }

  async function fetchCharacter(characterId: string) {
    loading.value = true
    try {
      character.value = await getCharacterByIdAPI(characterId); // Fetch with updated offset
    } catch (error) {
      console.error("Error fetching character:", error);
    } finally {
      loading.value = false
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

  function addFavorite(character: Result) {
    if (!favorites.value.some((fav) => fav.id === character.id)) {
      favorites.value.push(character);
      localStorage.setItem('favorites', JSON.stringify(favorites.value));
    }
  }

  function removeFavorite(characterId: number) {
    favorites.value = favorites.value.filter((fav) => fav.id !== characterId);
    localStorage.setItem('favorites', JSON.stringify(favorites.value));
  }

  return { favorites, addFavorite, removeFavorite, loading, loadingComics, characters, comics, comic, character, totalPages, searchQuery, offset, changeOffset, fetchCharacters, fetchCharacter, fetchComics, fetchTotalPages, refreshCharacterList, fetchComicById };
});

export const useWindowWidth = defineStore('window', () => {
  const windowWidth = ref(window.innerWidth);

  function updateWidth()  {
    windowWidth.value = window.innerWidth;
  }

  return {windowWidth, updateWidth}
})