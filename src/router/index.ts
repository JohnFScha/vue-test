import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import CharactersView from "@/views/CharactersView.vue";
import CharacterView from "@/views/CharacterView.vue";
import ComicView from "@/views/ComicView.vue";
  
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "CharactersList",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CharactersView
  },
  {
    path: "/comic/:id",
    name: "ComicView",
    component: ComicView,
  },
  {
    path: "/character/:id",
    name: "CharacterView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CharacterView
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
