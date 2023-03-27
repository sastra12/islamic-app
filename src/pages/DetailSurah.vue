<template>
  <default-container>
    <div
      class="bg-gradient-to-r from-green-800 to-emerald-600 rounded-md mb-2 p-3"
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
      <div class="mt-2">
        <h3 class="text-white text-2xl">
          {{ detailsurah.namaLatin }} - {{ detailsurah.jumlahAyat }}
        </h3>
        <p class="text-white text-sm font-thin mt-2 mb-3">
          {{ detailsurah.arti }}
        </p>
        <hr />
        <h4 class="text-[28px] text-white text-center mt-4">
          بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
        </h4>
        <audio class="w-4/5 h-8 mt-4 mx-auto" :src="audio" controls></audio>
      </div>
    </div>

    <!-- card ayat -->
    <div class="mt-4">
      <ListCardAyat
        v-for="ayats in detailsurah.ayat"
        :key="ayats"
        :ayats="ayats"
      />
    </div>
  </default-container>
</template>

<script>
import axios from "axios";
import DefaultContainer from "../components/DefaultContainer.vue";
import ListCardAyat from "../components/quran/ListCardAyat.vue";

export default {
  components: { DefaultContainer, ListCardAyat },

  data() {
    return {
      detailsurah: [],
      audio: "",
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
        this.audio = this.detailsurah.audioFull["05"];
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
</style>