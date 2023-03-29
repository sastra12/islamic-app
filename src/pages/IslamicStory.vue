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
        <h3 class="font-sans text-white mx-auto">Kisah Nabi</h3>
      </div>
    </div>

    <div
      class="bg-white py-4 px-3 mb-3"
      v-for="(story, index) in stories"
      :key="index"
    >
      <h3 class="text-emerald-500 text-xl">Kisah {{ story.name }}</h3>
      <p class="text-slate-500">{{ limitChar(story.description) }}</p>

      <span class="text-slate-400 text-[12px] hover:text-emerald-400"
        >Baca selengkapnya ...</span
      >
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
      stories: null,
      text: {
        chart:
          "12345678910111213141516171819202122232425262728293031323334353637383940",
      },
    };
  },

  created() {
    this.getDataStories();
  },

  methods: {
    limitChar(text) {
      return text.substr(0, 290) + "...";
    },
    async getDataStories() {
      try {
        const response = await axios.get(
          "https://islamic-api-zhirrr.vercel.app/api/kisahnabi"
        );
        this.stories = response.data;
        console.log(this.stories);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>