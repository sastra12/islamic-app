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
        <h3 class="font-sans text-white mx-auto">Asmaul Husna</h3>
      </div>
    </div>

    <div class="card grid grid-cols-2 min-[435px]:grid-cols-4 gap-2">
      <div
        class="py-5 px-3 bg-white dark:bg-slate-800"
        v-for="data in allData"
        :key="data.index"
      >
        <p class="text-center text-xl font-semibold text-teal-500">
          {{ data.arabic }}
        </p>
        <p class="text-center text-[12px] text-teal-500">{{ data.latin }}</p>
      </div>
    </div>
  </default-container>
</template>

<script>
import axios from "axios";
import DefaultContainer from "../components/DefaultContainer.vue";
import { ref, onMounted } from "vue";
import { useDark } from "@vueuse/core";

export default {
  components: { DefaultContainer },
  setup() {
    const allData = ref([]);
    const isDark = useDark();

    const getAsmaulHusna = async () => {
      try {
        const response = await axios.get(
          "https://islamic-api-zhirrr.vercel.app/api/asmaulhusna"
        );
        let { data } = response.data;
        allData.value = data;
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(() => {
      getAsmaulHusna();
      isDark.value;
    });

    return {
      allData,
    };
  },
};
</script>

<style scoped>
.card {
  direction: rtl;
}
</style>