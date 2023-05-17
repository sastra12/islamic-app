<template>
  <div class="bg-gradient-to-r from-emerald-700 to-teal-500 rounded-md mb-2">
    <div class="p-3 flex items-center justify-between">
      <router-link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-14 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </router-link>
      <h3 class="font-sans text-white mx-auto">{{ dynamicHeaderPage }}</h3>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();

    const dynamicHeaderPage = computed(() => {
      if (route.path == "/quran") {
        return "Quran Web";
      } else if (route.path == "/doa-harian") {
        return "Doa Harian";
      } else if (route.path == "/hadith") {
        return "Hadith";
      } else if (route.path == "/bacaan-tahlil") {
        return "Bacaan Tahlil";
      } else if (route.path == "/bookmark") {
        return "Bookmark";
      }
    });

    return { dynamicHeaderPage };
  },
};
</script>
