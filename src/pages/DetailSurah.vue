<template>
  <default-container>
    <div
      class="bg-gradient-to-r from-emerald-700 to-teal-500 rounded-md mb-2 py-1 px-2"
    >
      <div class="flex items-center justify-between">
        <router-link to="/quran">
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
        <h3 class="font-sans text-2xl text-white mx-auto">
          {{ detailsurah.nama }}
        </h3>
      </div>
      <div class="m-1">
        <p class="text-white mb-2">
          {{ detailsurah.namaLatin }} - {{ detailsurah.jumlahAyat }} Ayat
        </p>
        <hr />
        <h4 class="text-[28px] text-white text-center mt-2">
          بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
        </h4>
        <audio class="w-4/5 h-8 mt-4 mx-auto" :src="audio" controls></audio>
      </div>
    </div>
    <div class="inline-flex rounded-md shadow-sm w-full" role="group">
      <button
        @click="showSurah()"
        type="button"
        class="w-1/2 px-4 py-2 text-sm font-medium text-emerald-400 bg-white border-r hover:bg-gradient-to-r from-emerald-700 to-teal-500 hover:text-white"
      >
        Surah
      </button>
      <button
        @click="showTafsir()"
        type="button"
        class="w-1/2 px-4 py-2 text-sm font-medium text-emerald-400 bg-white hover:bg-gradient-to-r from-emerald-700 to-teal-500 hover:text-white"
      >
        Tafsir
      </button>
    </div>
    <!-- card ayat -->
    <div class="mt-4">
      <keep-alive>
        <component :is="activeComponent" :ayats="detailsurah.ayat" />
      </keep-alive>
    </div>
  </default-container>
</template>

<script>
import axios from "axios";
import DefaultContainer from "../components/DefaultContainer.vue";
import ListCardAyat from "../components/quran/ListCardAyat.vue";
import TafsirSurah from "../components/quran/TafsirSurah.vue";

export default {
  components: { DefaultContainer, ListCardAyat, TafsirSurah },

  data() {
    return {
      detailsurah: [],
      audio: "",
      activeComponent: "ListCardAyat",
    };
  },

  created() {
    this.getDetailSurah();
  },

  methods: {
    async getDetailSurah() {
      try {
        const response = await axios.get(
          "https://equran.id/api/v2/surat/" + this.$route.params.id
        );
        this.detailsurah = response.data.data;
        this.ayat = this.detailsurah.ayat;
        this.audio = this.detailsurah.audioFull["05"];
      } catch (error) {
        console.log(error);
      }
    },

    showSurah() {
      this.activeComponent = "ListCardAyat";
    },

    showTafsir() {
      this.activeComponent = "TafsirSurah";
    },
  },
};
</script>

<style scoped>
</style>