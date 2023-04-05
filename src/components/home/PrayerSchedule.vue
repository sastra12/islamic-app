<template>
  <div class="mt-12">
    <div class="flex justify-center items-center">
      <h3 class="font-semibold dark:text-white">
        Pilih Waktu Sholat Daerah Anda {{ jadwalSholat.lokasi }}
        <button class="cursor-pointer" @click.prevent="showModal = !showModal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-down-fill"
            viewBox="0 0 15 15"
          >
            <path
              d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
            />
          </svg>
        </button>
      </h3>
    </div>

    <div class="mt-1">
      <h3 class="text-center text-slate-400 font-light">
        {{ jadwalSholat.jadwal.tanggal }}
      </h3>
    </div>

    <!-- Modal -->
    <div
      class="fixed flex justify-center items-center z-40 inset-0"
      v-if="showModal"
      @click.self="showModal = false"
    >
      <div class="fixed mx-auto w-4/5 h-1/2 max-w-sm overflow-y-auto top-36">
        <div class="bg-white mx-auto p-3 z-50 dark:bg-slate-800">
          <header class="flex justify-between">
            <span class="text-teal-500 font-semibold">Daftar Kota</span>
            <button
              class="rounded bg-red-400 text-white py-1 px-2 text-xs"
              @click="showModal = false"
            >
              Close
            </button>
          </header>
          <hr class="mt-2 mb-4 dark:border-teal-500" />

          <form>
            <input
              placeholder="Cari Kota"
              v-model="search"
              type="text"
              class="text-slate-400 border border-teal-500 rounded-sm w-full px-1 py-2 focus:outline-none focus:ring focus:ring-teal-500 bg-white placeholder:text-xs mb-3 dark:bg-slate-800"
            />
          </form>

          <div
            class="py-2 px-1 rounded hover:bg-teal-500 mb-1 cursor-pointer"
            v-for="lokasi in filteredCity"
            :key="lokasi.id"
            @click.prevent="getDynamicLocation(lokasi.id)"
          >
            <p class="text-xs text-teal-500 hover:text-white font-semibold">
              {{ lokasi.lokasi }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="fixed z-30 opacity-25 bg-black inset-0"></div>

    <div class="mt-4 grid grid-cols-4 gap-1">
      <div
        class="bg-gradient-to-r from-emerald-700 to-teal-500 p-2 text-center rounded-md"
      >
        <p class="text-white text-sm">Imsak</p>
        <p class="text-white font-semibold">{{ jadwalSholat.jadwal.imsak }}</p>
      </div>
      <div
        class="bg-gradient-to-r from-emerald-700 to-teal-500 p-2 text-center rounded-md"
      >
        <p class="text-white text-sm">Subuh</p>
        <p class="text-white font-semibold">{{ jadwalSholat.jadwal.subuh }}</p>
      </div>
      <div
        class="bg-gradient-to-r from-emerald-700 to-teal-500 p-2 text-center rounded-md"
      >
        <p class="text-white text-sm">Terbit</p>
        <p class="text-white font-semibold">{{ jadwalSholat.jadwal.terbit }}</p>
      </div>
      <div
        class="bg-gradient-to-r from-emerald-700 to-teal-500 p-2 text-center rounded-md"
      >
        <p class="text-white text-sm">Dhuha</p>
        <p class="text-white font-semibold">{{ jadwalSholat.jadwal.dhuha }}</p>
      </div>
      <div
        class="bg-gradient-to-r from-emerald-700 to-teal-500 p-2 text-center rounded-md"
      >
        <p class="text-white text-sm">Dhuhur</p>
        <p class="text-white font-semibold">{{ jadwalSholat.jadwal.dzuhur }}</p>
      </div>
      <div
        class="bg-gradient-to-r from-emerald-700 to-teal-500 p-2 text-center rounded-md"
      >
        <p class="text-white text-sm">Ashar</p>
        <p class="text-white font-semibold">{{ jadwalSholat.jadwal.ashar }}</p>
      </div>
      <div
        class="bg-gradient-to-r from-emerald-700 to-teal-500 p-2 text-center rounded-md"
      >
        <p class="text-white text-sm">Magrib</p>
        <p class="text-white font-semibold">
          {{ jadwalSholat.jadwal.maghrib }}
        </p>
      </div>
      <div
        class="bg-gradient-to-r from-emerald-700 to-teal-500 p-2 text-center rounded-md"
      >
        <p class="text-white text-sm">Isya</p>
        <p class="text-white font-semibold">{{ jadwalSholat.jadwal.isya }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref, computed, reactive } from "vue";
import { useDark } from "@vueuse/core";

export default {
  setup() {
    const isDark = useDark();
    const showModal = ref(false);
    const search = ref("");
    const jadwalSholat = reactive({
      id: null,
      lokasi: "",
      jadwal: [],
    });
    const allDatalokasi = ref([]);

    // method buat get data lokasi
    const getAllLocation = async () => {
      try {
        const response = await axios.get(
          "https://api.myquran.com/v1/sholat/kota/semua"
        );
        allDatalokasi.value = response.data;
      } catch (error) {}
    };

    // method mengambil tanggal saat ini dengan format 2023/04/1
    const getDate = () => {
      const current = new Date();
      const date = `${current.getFullYear()}/${
        current.getMonth() + 1
      }/${current.getDate()}`;
      return date;
    };

    // method untuk mendapatkan jadwal berdasarkan lokasi dan tgl saat ini
    const getDefaultLocation = async () => {
      const idLocation = JSON.parse(localStorage.getItem("lokasi"));
      if (idLocation) {
        try {
          const response = await axios.get(
            "https://api.myquran.com/v1/sholat/jadwal/" +
              idLocation.id +
              "/" +
              getDate()
          );
          let { data } = response.data;
          jadwalSholat.lokasi = data.lokasi;
          jadwalSholat.jadwal = data.jadwal;
        } catch (error) {
          console.log(error);
        }
      } else {
        // jika tidak ada lokasi id di local storage maka jalankan ini
        try {
          const response = await axios.get(
            "https://api.myquran.com/v1/sholat/jadwal/" +
              "1602" +
              "/" +
              getDate()
          );
          let { data } = response.data;
          jadwalSholat.lokasi = data.lokasi;
          jadwalSholat.jadwal = data.jadwal;
        } catch (error) {
          console.log(error);
        }
      }
    };

    // method untuk mendapatkan lokasi dinamis
    const getDynamicLocation = async (id) => {
      try {
        const response = await axios.get(
          "https://api.myquran.com/v1/sholat/jadwal/" + id + "/" + getDate()
        );
        let { data } = response.data;
        jadwalSholat.lokasi = data.lokasi;
        jadwalSholat.jadwal = data.jadwal;
        jadwalSholat.id = data.id;
        showModal.value = false;
        search.value = "";
        localStorage.setItem(
          "lokasi",
          JSON.stringify({
            id: jadwalSholat.id,
          })
        );
      } catch (error) {
        console.log(error);
      }
    };

    // untuk filter kota dengan computed
    const filteredCity = computed(() => {
      return allDatalokasi.value.filter((city) =>
        city.lokasi.toLowerCase().includes(search.value.toLowerCase())
      );
    });

    onMounted(() => {
      getAllLocation();
      getDefaultLocation();
      isDark.value;
    });

    return {
      showModal,
      filteredCity,
      search,
      jadwalSholat,
      getDynamicLocation,
    };
  },
};
</script>

<style scoped>
</style>