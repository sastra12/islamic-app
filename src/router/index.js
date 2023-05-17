import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";

const routes = [
  {
    path: "/",
    component: Home,
    props: true,
  },
  // Card Menu
  { path: "/quran", component: () => import("../pages/Quran.vue") },
  { path: "/surat/:id", component: () => import("../pages/DetailSurah.vue") },
  { path: "/doa-harian", component: () => import("../pages/DailyPrayer.vue") },
  {
    path: "/bacaan-tahlil",
    component: () => import("../pages/TahlilReading.vue"),
  },
  {
    path: "/hadith",
    component: () => import("../pages/TheHadith.vue"),
  },
  {
    path: "/hadith/:slug",
    name: "HadithResult",
    component: () => import("../pages/TheHadithDetail.vue"),
  },
  {
    path: "/bookmark",
    component: () => import("../pages/Bookmark.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
