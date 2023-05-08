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
          <svg
            class="text-teal-500 transition duration-[500ms] mx-auto mb-2"
            width="37"
            height="36"
            viewBox="0 0 37 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.4531 12.6219V5.97656C31.4531 5.39409 30.9809 4.92188 30.3984 4.92188H23.7531L19.1192 0.307336C18.7076 -0.102445 18.0423 -0.102445 17.6307 0.307336L12.9969 4.92188H6.35156C5.76909 4.92188 5.29688 5.39409 5.29688 5.97656V12.6219L0.682336 17.2558C0.272555 17.6674 0.272555 18.3327 0.682336 18.7443L5.29688 23.3781V30.0234C5.29688 30.6059 5.76909 31.0781 6.35156 31.0781H12.9969L17.6307 35.6927C17.8365 35.8976 18.1058 36 18.375 36C18.6442 36 18.9135 35.8976 19.1192 35.6927L23.7531 31.0781H30.3984C30.9809 31.0781 31.4531 30.6059 31.4531 30.0234V23.3781L36.0677 18.7443C36.4774 18.3327 36.4774 17.6674 36.0677 17.2558L31.4531 12.6219ZM29.6511 22.1983C29.4543 22.396 29.3438 22.6635 29.3438 22.9425V28.9688H23.3175C23.0386 28.9688 22.771 29.0793 22.5734 29.2761L18.375 33.4569L14.1767 29.2761C13.979 29.0793 13.7115 28.9688 13.4325 28.9688H7.40625V22.9425C7.40625 22.6636 7.29572 22.396 7.09891 22.1984L2.91813 18L7.09891 13.8017C7.29572 13.604 7.40625 13.3365 7.40625 13.0575V7.03125H13.4325C13.7114 7.03125 13.979 6.92072 14.1766 6.72391L18.375 2.54313L22.5734 6.72391C22.7711 6.92072 23.0386 7.03125 23.3175 7.03125H29.3438V13.0575C29.3438 13.3364 29.4543 13.604 29.6511 13.8016L33.8319 18L29.6511 22.1983Z"
              fill="currentColor"
            />
            <text
              class="text-[10px]"
              x="50%"
              y="60%"
              text-anchor="middle"
              fill="currentColor"
            >
              {{ hadith.number }}
            </text>
          </svg>

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
        <div class="flex">
          <button class="bg-teal-500 p-2 mr-5 rounded" @click="previousPage">
            Previous
          </button>
          <button class="bg-teal-500 p-2 rounded" @click="nextPage">
            Next
          </button>
        </div>
      </div>
    </default-container>
  </div>
</template>

<script setup>
import DefaultContainer from "../components/DefaultContainer.vue";

import { computed, onMounted, ref, watchEffect } from "vue";

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
    totalPage.value = response.data.pagination.endPage;
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
</script>
