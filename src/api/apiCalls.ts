import { Result } from "@/types/characters";
import { ResultComics } from "@/types/comics";

const API_BASE_URL = process.env.VUE_APP_BASE_URL;
const API_KEY = process.env.VUE_APP_API_KEY;

async function getCharactersAPI(): Promise<Result[] | []> {
  try {
    const response = await fetch(`http://gateway.marvel.com/v1/public/characters?apikey=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data.results.filter((elem: any) => !elem.thumbnail.path.includes("image_not_available"));
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
}

async function searchComicByIdAPI(id: string): Promise<Result[] | []> {
  try {
    const response = await fetch(`${API_BASE_URL}/comics/${id}?apikey=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data.results;
  } catch (error) {
    console.error("Error searching comic by ID:", error);
    return [];
  }
}

async function searchComicByCharacterIdAPI(id: string): Promise<ResultComics[] | []> {
  try {
    const response = await fetch(`${API_BASE_URL}/characters/${id}/comics?apikey=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data.results;
  } catch (error) {
    console.error("Error searching comic by character ID:", error);
    return [];
  }
}

async function searchByNameAPI(name: string): Promise<Result[] | []> {
  try {
    const response = await fetch(`${API_BASE_URL}/characters?nameStartsWith=${name}&apikey=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data.results.filter((elem: any) => !elem.thumbnail.path.includes("image_not_available"));

  } catch (error) {
    console.error("Error searching character by name:", error);
    return [];
  }
}

export {
  getCharactersAPI,
  searchByNameAPI,
  searchComicByCharacterIdAPI,
  searchComicByIdAPI
}