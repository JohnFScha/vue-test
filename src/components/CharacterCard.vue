<template>
  <article class="card shadow-md bg-white text-black shadow-black/50 rounded-lg relative">
    <button v-if="isFavorite" class="btn btn-ghost btn-circle absolute top-1 right-1"
      @click="store.removeFavorite(character!.id)">
      <HeartCrack :fill="'red'" :size="35" />
    </button>
    <button v-if="!isFavorite" class="btn btn-ghost btn-circle absolute top-1 right-1"
      @click="store.addFavorite(character!)">
      <Heart :size="35" />
    </button>
    <figure>
      <img :src="character?.thumbnail.path + '.' + character?.thumbnail.extension" :alt="character?.name"
        class="object-cover aspect-square w-full h-full rounded-tr-lg rounded-tl-lg" />
    </figure>
    <div class="card-body gap-4 rounded-br-lg rounded-bl-lg">
      <h2 class="card-title text-2xl">{{ character?.name }}</h2>
      <p class="text-lg" v-if="character?.description && character?.description.length > 1">{{
        character?.description.substring(0, 50) + "..." }}</p>
      <p class="text-lg" v-else> No description provided!</p>
      <div class="card-actions w-full p-0 flex flex-nowrap justify-evenly">
        <router-link v-if="windowStore.windowWidth > 400"
          :to="{ name: 'CharacterView', params: { id: character!.id.toString() } }"
          class="w-1/2 btn btn-error text-lg">Hero details</router-link>
        <router-link v-else :to="{ name: 'CharacterView', params: { id: character!.id.toString() } }"
          class="w-1/2 btn btn-error text-lg">Details</router-link>
        <button v-if="windowStore.windowWidth > 400" class="btn w-1/2 text-lg"
          @click="openModal(character?.id.toString())">Show
          comics</button>
        <button v-else class="btn w-1/2 text-lg" @click="openModal(character?.id.toString())">Comics</button>
      </div>
    </div>

    <!-- Modal -->
    <dialog :id="`my_modal_${index}`" class="modal" ref="modalRef">
      <div v-if="!store.loadingComics" class="modal-box bg-white">
        <h3 class="text-lg font-bold">Comics for {{ character?.name }}</h3>
        <p class="py-4">Press ESC key or click the button below to close</p>

        <!-- Render Comics List -->
        <div v-if="store.comics.length > 0">
          <ul class="flex flex-col gap-5">
            <li v-for="comic in store.comics" :key="comic.id" class="flex gap-2">
              <img :src="comic.thumbnail.path + '.' + comic.thumbnail.extension" :alt="comic.title"
                class="w-1/2 rounded-lg" />
              <div class="flex flex-col text-justify justify-between">
                <div>
                  <h4 class="text-lg font-semibold">{{ comic.title }}</h4>
                  <p v-if="comic.description && comic?.description.length > 0" class="text-base">{{
                    comic.description?.substring(0, 150) }}...</p>
                  <p v-else class="text-base">No decription provided!</p>
                </div>
                <router-link v-if="windowStore.windowWidth > 400" :to="{ name: 'ComicView', params: { id: comic.id } }"
                  class="btn btn-error text-white text-lg font-bold">Comic details!</router-link>
                <router-link v-else :to="{ name: 'ComicView', params: { id: comic.id } }"
                  class="btn btn-error text-white text-lg font-bold">Details</router-link>
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
      <div v-else class="modal-box bg-white">
        <LoaderSpinner />
      </div>
    </dialog>
  </article>
</template>

<script lang="ts" setup>
import { PropType, ref, defineProps, computed, onMounted, onUnmounted } from 'vue';
import { Result } from '@/types/characters';
import { useCharacterStore, useWindowWidth } from '@/store';
import { Heart, HeartCrack } from 'lucide-vue-next'
import LoaderSpinner from './LoaderSpinner.vue';
const store = useCharacterStore();
const windowStore = useWindowWidth();

// Props
const props = defineProps({
  character: {
    type: Object as PropType<Result>,
  },
  index: {
    type: String,
    required: true
  }
});

const modalRef = ref<HTMLDialogElement | null>(null); // Reference to modal

const isFavorite = computed(() =>
  store.favorites.some((fav) => fav.id === props.character?.id)
);

onMounted(() => {
  window.addEventListener('resize', windowStore.updateWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', windowStore.updateWidth);
});

const openModal = async (characterId: string | undefined) => {
  if (modalRef.value) {
    modalRef.value.showModal(); // Show the modal
    await store.fetchComics(characterId!); // Fetch comics for the character
  }
};

</script>
