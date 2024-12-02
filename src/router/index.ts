import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import CharactersView from "@/views/CharactersView.vue";
import CharacterView from "@/views/CharacterView.vue";
import ComicView from "@/views/ComicView.vue";
import FavoriteView from "@/views/FavoriteView.vue";
  
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "CharactersList",
    component: CharactersView
  },
  {
    path: "/favorites",
    name: "FavoriteView",
    component: FavoriteView
  },
  {
    path: "/comic/:id",
    name: "ComicView",
    component: ComicView,
  },
  {
    path: "/character/:id",
    name: "CharacterView",
    component: CharacterView
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
