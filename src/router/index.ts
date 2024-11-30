import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import CharactersView from "@/views/CharactersView.vue";
  
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "charactersList",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CharactersView
  },
  {
    path: "/characters/:id",
    name: "character",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/CharacterView.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
