<template>
  <default-container>
    <div class="bg-gradient-to-r from-green-800 to-emerald-600 rounded-md mb-2">
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
      <div class="py-5 px-3 bg-white" v-for="data in allData" :key="data.index">
        <p class="text-center text-xl font-semibold text-emerald-500">
          {{ data.arabic }}
        </p>
        <p class="text-center text-[14px] text-emerald-500">{{ data.latin }}</p>
      </div>
    </div>
  </default-container>
</template>

<script>
import axios from "axios";
import DefaultContainer from "../components/DefaultContainer.vue";

export default {
  components: { DefaultContainer },

  data() {
    return {
      allData: null,
      test: "Test",
    };
  },

  created() {
    console.log(this.test);
  },

  mounted() {
    this.getAsmaulHusna();
  },

  methods: {
    async getAsmaulHusna() {
      try {
        const response = await axios.get(
          "https://islamic-api-zhirrr.vercel.app/api/asmaulhusna"
        );
        this.allData = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.card {
  direction: rtl;
}
</style>