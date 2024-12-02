import { CharacterResult } from "@/types/character";
import { Response, Result } from "@/types/characters";
import { ResultComics } from "@/types/comics";

const API_BASE_URL = process.env.VUE_APP_BASE_URL;
const API_KEY = process.env.VUE_APP_API_KEY;

async function getTotalPages(): Promise<number | undefined> {
  try {
    const response = await fetch(`${API_BASE_URL}/characters?&apikey=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: Response = await response.json();
    return data.data.total
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
}

async function getCharactersAPI(offset: number): Promise<Result[] | []> {
  try {
    const response = await fetch(`${API_BASE_URL}/characters?limit=9&offset=${offset}&apikey=${API_KEY}`);
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

async function getCharacterByIdAPI(id: string): Promise<CharacterResult | undefined> {
  try {
    const response = await fetch(`${API_BASE_URL}/characters/${id}?apikey=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.data.results[0];
  } catch (error) {
    console.error("Error fetching characters:", error);
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
  getTotalPages,
  getCharactersAPI,
  getCharacterByIdAPI,
  searchByNameAPI,
  searchComicByCharacterIdAPI,
  searchComicByIdAPI
}