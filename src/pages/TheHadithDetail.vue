<template>
  <div>
    <default-container>
      <div
        class="bg-gradient-to-r from-emerald-700 to-teal-500 rounded-md mb-5 py-1 px-2"
      >
        <div class="flex items-center justify-between">
          <router-link to="/hadith">
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
          <h3 class="font-sans text-lg text-white mx-auto">
            Hadis Riwayat Abu Dawud
          </h3>
        </div>
      </div>

      <div
        class="bg-white py-4 px-3 mb-3 rounded-md dark:bg-slate-800"
        v-for="hadith in hadithsbyPerawi"
        :key="hadith.number"
      >
        <div class="">
          <div
            class="py-2 px-3 bg-teal-500 w-1/5 rounded mx-auto mb-3 text-white"
          >
            <p class="text-center">{{ hadith.number }}</p>
          </div>

          <div class="ml-auto my-auto">
            <p class="text-2xl text-teal-500 text-right">{{ hadith.arab }}</p>
          </div>
        </div>
        <p class="mt-5 text-slate-400">
          {{ hadith.id }}
        </p>
      </div>

      <div class="flex flex-row justify-between text-white">
        <p class="text-center bg-teal-500 p-2 rounded">Halaman ke {{ page }}</p>
        <div class="flex justify-between gap-2">
          <button
            :class="hiddenButtonPrevious"
            class="bg-teal-500 p-2 rounded"
            @click="previousPage"
          >
            Previous
          </button>
          <button
            :class="hiddenButtonNext"
            class="bg-teal-500 p-2 rounded"
            @click="nextPage"
          >
            Next
          </button>
        </div>
      </div>
    </default-container>
  </div>
</template>

<script setup>
import DefaultContainer from "../components/DefaultContainer.vue";

import { computed, onMounted, ref } from "vue";

import axios from "axios";
import { useRouter, useRoute } from "vue-router";

const hadithsbyPerawi = ref([]);
const totalPage = ref();
const router = useRouter();
const route = useRoute();
const page = ref(Number.parseInt(route.query.page) || 1);

onMounted(() => {
  haditsByPerawi();
});

const haditsByPerawi = async () => {
  try {
    const response = await axios.get(
      `https://hadis-api-id.vercel.app/hadith/abu-dawud?page=${page.value}`
    );
    hadithsbyPerawi.value = response.data.items;
    totalPage.value = response.data.pagination.totalPages;
  } catch (error) {
    console.log(error);
  }
};

const previousPage = () => {
  if (page.value > 1) {
    page.value--;
    const query = { page: page.value };
    router.push({ name: "HadithResult", query: query });
    haditsByPerawi(page.value);
  }
};

const nextPage = () => {
  if (page.value < totalPage.value) {
    page.value++;
    const query = { page: page.value };
    router.push({ name: "HadithResult", query: query });
    haditsByPerawi(page.value);
  }
};

const hiddenButtonPrevious = computed(() => {
  return page.value == 1 ? "hidden" : "";
});

const hiddenButtonNext = computed(() => {
  return page.value == totalPage.value ? "hidden" : "";
});
</script>