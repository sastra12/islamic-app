<template>
  <default-container>
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
        <h3 class="font-sans text-white mx-auto">Bacaan Tahlil</h3>
      </div>
    </div>

    <!-- Accordion -->
    <Accordion v-for="tahlil in allTahlil" :key="tahlil.id" :tahlil="tahlil">
      {{ tahlil.translation }}
    </Accordion>
  </default-container>
</template>
<script>
import axios from "axios";
import DefaultContainer from "../components/DefaultContainer.vue";
import Accordion from "../components/Accordion.vue";
import { useDark } from "@vueuse/core";
import { onMounted, ref } from "vue";

export default {
  components: { DefaultContainer, Accordion },
  setup() {
    const allTahlil = ref([]);
    const isDark = useDark();

    const getTahlil = async () => {
      try {
        const response = await axios.get(
          "https://islamic-api-zhirrr.vercel.app/api/tahlil"
        );
        let { data } = response.data;
        allTahlil.value = data;
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(() => {
      getTahlil();
      isDark.value;
    });

    return {
      allTahlil,
    };
  },
};
</script>