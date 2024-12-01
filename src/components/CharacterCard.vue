<template>
  <div class="card bg-slate-600 shadow-xl gap-2">
    <figure>
      <img :src="character?.thumbnail.path + '.' + character?.thumbnail.extension" :alt="character?.name"
        class="object-cover aspect-square w-full h-full" />
    </figure>
    <div class="card-body gap-4">
      <h2 class="card-title">{{ character?.name }}</h2>
      <p>{{ character?.description.substring(0, 50) + "..." || "No description provided" }}</p>
      <div class="card-actions p-0 flex flex-nowrap w-full justify-center">
        <router-link :to="{ name: 'CharacterView', params: {id: character!.id.toString()}}" class="btn btn-info">Hero details</router-link>
        <button class="btn" @click="openModal(character?.id.toString())">Show comics</button>
      </div>
    </div>

    <!-- Modal -->
    <dialog :id="`my_modal_${index}`" class="modal" ref="modalRef">
      <div class="modal-box">
        <h3 class="text-lg font-bold">Comics for {{ character?.name }}</h3>
        <p class="py-4">Press ESC key or click the button below to close</p>

        <!-- Render Comics List -->
        <div v-if="comics.length > 0">
          <ul class="flex flex-col gap-5">
            <li v-for="comic in comics" :key="comic.id" class="flex gap-2">
              <img :src="comic.thumbnail.path + '.' + comic.thumbnail.extension" :alt="comic.title"
                class="w-1/2 rounded-lg" />
              <div class="flex flex-col text-justify justify-between">
                <div>
                  <h4 class="text-lg font-semibold">{{ comic.title }}</h4>
                  <p v-if="comic.description && comic?.description.length > 0" class="text-base">{{
                    comic.description?.substring(0, 150) }}...</p>
                  <p v-else class="text-base">No decription provided!</p>
                </div>
                <router-link :to="{ name: 'ComicView', params: { id: comic.id } }" class="btn btn-info">Comic details!</router-link>
              </div>
            </li>
          </ul>
        </div>
        <div v-else>
          <p>No comics available.</p>
        </div>

        <div class="modal-action">
          <form method="dialog">
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script lang="ts" setup>
import { PropType, ref, defineProps } from 'vue';
import { ResultComics } from '@/types/comics';
import { Result } from '@/types/characters';
import { searchComicByCharacterIdAPI } from '@/api'; // Adjust with correct import path

// Props
defineProps({
  character: {
    type: Object as PropType<Result>,
  },
  index: {
    type: String,
    required: true
  }
});

// Refs
const modalRef = ref<HTMLDialogElement | null>(null); // Reference to modal
const comics = ref<ResultComics[]>([]); // Comics data

// Open Modal and Fetch Comics
const openModal = async (characterId: string | undefined) => {
  if (modalRef.value) {
    modalRef.value.showModal(); // Show the modal
    await fetchComics(characterId!); // Fetch comics for the character
  }
};

// Fetch Comics for the Character
const fetchComics = async (characterId: string) => {
  try {
    comics.value = await searchComicByCharacterIdAPI(characterId); // Fetch comics from API
  } catch (error) {
    console.error('Error fetching comics:', error);
  }
};
</script>
