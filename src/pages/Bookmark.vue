<template>
  <div>
    <default-container>
      <div
        class="bg-gradient-to-r from-emerald-700 to-teal-500 rounded-md mb-6"
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
          <h3 class="font-sans text-white mx-auto">Bookmark</h3>
        </div>
      </div>

      <div class="h-screen">
        <div
          class="bg-white py-8 rounded-md px-3 dark:bg-slate-800"
          v-if="bookmarkdata.idSurah != null"
        >
          <router-link :to="`/surat/${bookmarkdata.idSurah}`">
            <div class="flex">
              <div class="ml-3">
                <h3 class="text-teal-500">{{ bookmarkdata.namasuratindo }}</h3>
                <p class="text-[12px] text-slate-400">
                  Ayat ke {{ bookmarkdata.ayat }}
                </p>
              </div>
              <div class="ml-auto my-auto">
                <p class="text-2xl text-teal-500">
                  {{ bookmarkdata.namasuratarab }}
                </p>
              </div>
            </div>
          </router-link>
        </div>
        <!-- jika bookmark kosong -->
        <div
          class="bg-white py-8 rounded-md px-3 dark:bg-slate-800"
          v-if="bookmarkdata.idSurah == null"
        >
          <div class="flex justify-center">
            <div class="ml-3">
              <h3 class="text-teal-500">Bookmark is still empty</h3>
            </div>
          </div>
        </div>
      </div>
    </default-container>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import DefaultContainer from "../components/reusable/DefaultContainer.vue";
import { useDark } from "@vueuse/core";

export default {
  components: { DefaultContainer },
  setup() {
    const isDark = useDark();
    const bookmarkdata = reactive({
      idSurah: null,
      namasuratindo: "",
      namasuratarab: "",
      ayat: null,
    });

    onMounted(() => {
      const bookmark = JSON.parse(localStorage.getItem("bookmark"));
      if (bookmark) {
        (bookmarkdata.namasuratindo = bookmark.namasurahindo),
          (bookmarkdata.namasuratarab = bookmark.namasuraharab),
          (bookmarkdata.ayat = bookmark.no);
        bookmarkdata.idSurah = bookmark.idSurat;
      }
      isDark.value;
    });

    return {
      bookmarkdata,
    };
  },
};
</script>
