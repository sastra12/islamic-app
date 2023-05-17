<template>
  <div>
    <default-container>
      <HeaderPage />

      <ListCardSurah />
    </default-container>

    <!-- Scoll on top -->
    <ScrollOnTop @scrollOnTop="handleEvent" />
  </div>
</template>

<script>
import { onMounted } from "vue";
import DefaultContainer from "../components/reusable/DefaultContainer.vue";
import ListCardSurah from "../components/quran/ListCardSurah.vue";
import ScrollOnTop from "../components/reusable/ScrollOnTop.vue";
import HeaderPage from "../components/reusable/HeaderPage.vue";
import { useDark } from "@vueuse/core";

export default {
  components: { DefaultContainer, ListCardSurah, ScrollOnTop, HeaderPage },
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
