<template>
  <div>
    <default-container>
      <div
        class="bg-gradient-to-r from-emerald-700 to-teal-500 rounded-md mb-2"
      >
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
          <h3 class="font-sans text-white mx-auto">Quran Web</h3>
        </div>
      </div>

      <ListCardSurah />
    </default-container>

    <!-- Scoll on top -->
    <ScrollOnTop @scrollOnTop="handleEvent" />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import DefaultContainer from "../components/DefaultContainer.vue";
import ListCardSurah from "../components/quran/ListCardSurah.vue";
import ScrollOnTop from "../components/ScrollOnTop.vue";
import { useDark } from "@vueuse/core";

export default {
  components: { DefaultContainer, ListCardSurah, ScrollOnTop },
  setup() {
    const isDark = useDark();
    const handleEvent = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
    onMounted(() => {
      isDark.value;
    });

    return { handleEvent };
  },
};
</script>

<style scoped></style>
