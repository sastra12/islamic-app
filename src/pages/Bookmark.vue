<template>
  <div>
    <default-container>
      <HeaderPage />

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
import HeaderPage from "../components/reusable/HeaderPage.vue";
import { useDark } from "@vueuse/core";

export default {
  components: { DefaultContainer, HeaderPage },
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
