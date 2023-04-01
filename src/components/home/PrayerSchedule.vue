<template>
  <div class="mt-12">
    <div class="flex justify-center items-center">
      <div class="font-semibold text-slate-600">
        Pilih Waktu Sholat Daerah Anda {{ allProperti.lokasi }}
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
      </div>
    </div>

    <div class="mt-1">
      <h3 class="text-center text-slate-400 font-light">
        {{ getCurrentDate() }}
      </h3>
    </div>

    <!-- Modal -->
    <div
      class="fixed flex justify-center items-center z-50 inset-0"
      v-if="showModal"
    >
      <div class="fixed mx-auto w-4/5 h-1/2 max-w-sm overflow-y-auto top-36">
        <div class="bg-white mx-auto p-3">
          <header class="flex justify-between">
            <span class="text-emerald-300 font-semibold">Daftar Kota</span>
            <button
              class="rounded bg-red-400 text-white py-1 px-2 text-xs"
              @click="showModal = false"
            >
              Close
            </button>
          </header>
          <hr class="mt-2 mb-4" />

          <form>
            <input
              placeholder="Cari Kota"
              v-model="search"
              type="text"
              class="text-slate-400 border border-emerald-400 rounded-sm w-full px-1 py-2 focus:outline-none focus:ring focus:ring-emerald-300 bg-white placeholder:text-xs mb-3"
            />
          </form>

          <div
            class="py-2 px-1 rounded hover:bg-emerald-500 mb-1 cursor-pointer"
            v-for="lokasi in allDatalokasi"
            :key="lokasi.id"
            @click.prevent="getDynamicLocation(lokasi.id)"
          >
            <p class="text-xs text-emerald-400 hover:text-white font-semibold">
              {{ lokasi.lokasi }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="showModal"
      class="fixed z-30 opacity-25 bg-black inset-0"
      @click="showModal = false"
    ></div>

    <div class="mt-4 grid grid-cols-4 gap-1">
      <div
        class="bg-gradient-to-r from-emerald-700 to-teal-500 p-2 text-center rounded-md"
      >
        <p class="text-white text-sm">Imsak</p>
        <p class="text-white font-semibold">
          {{ jadwal.imsak }}
        </p>
      </div>
      <div
        class="bg-gradient-to-r from-emerald-700 to-teal-500 p-2 text-center rounded-md"
      >
        <p class="text-white text-sm">Subuh</p>
        <p class="text-white font-semibold">
          {{ jadwal.subuh }}
        </p>
      </div>
      <div
        class="bg-gradient-to-r from-emerald-700 to-teal-500 p-2 text-center rounded-md"
      >
        <p class="text-white text-sm">Terbit</p>
        <p class="text-white font-semibold">
          {{ jadwal.terbit }}
        </p>
      </div>
      <div
        class="bg-gradient-to-r from-emerald-700 to-teal-500 p-2 text-center rounded-md"
      >
        <p class="text-white text-sm">Dhuha</p>
        <p class="text-white font-semibold">
          {{ jadwal.dhuha }}
        </p>
      </div>
      <div
        class="bg-gradient-to-r from-emerald-700 to-teal-500 p-2 text-center rounded-md"
      >
        <p class="text-white text-sm">Dhuhur</p>
        <p class="text-white font-semibold">
          {{ jadwal.dzuhur }}
        </p>
      </div>
      <div
        class="bg-gradient-to-r from-emerald-700 to-teal-500 p-2 text-center rounded-md"
      >
        <p class="text-white text-sm">Ashar</p>
        <p class="text-white font-semibold">
          {{ jadwal.ashar }}
        </p>
      </div>
      <div
        class="bg-gradient-to-r from-emerald-700 to-teal-500 p-2 text-center rounded-md"
      >
        <p class="text-white text-sm">Magrib</p>
        <p class="text-white font-semibold">
          {{ jadwal.maghrib }}
        </p>
      </div>
      <div
        class="bg-gradient-to-r from-emerald-700 to-teal-500 p-2 text-center rounded-md"
      >
        <p class="text-white text-sm">Isya</p>
        <p class="text-white font-semibold">
          {{ jadwal.isya }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      showModal: false,
      allProperti: [],
      search: "",
      allDatalokasi: null,
      jadwal: [],
    };
  },

  created() {
    this.getDefaultLocation();
    this.getAllLocation();
  },

  methods: {
    // get all lokasi
    async getAllLocation() {
      try {
        const response = await axios.get(
          "https://api.myquran.com/v1/sholat/kota/semua"
        );
        this.allDatalokasi = response.data;
      } catch (error) {
        console.log(error);
      }
    },

    // get current date
    getCurrentDate() {
      const day = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu",
      ];

      const indexMonth = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ];

      const current = new Date();
      const dayIndex = current.getDay();
      const date = `${day[dayIndex]}, ${current.getDate()} ${
        indexMonth[current.getMonth() + 1]
      } ${current.getFullYear()}`;
      return date;
    },

    getDate() {
      const current = new Date();
      const date = `${current.getFullYear()}/${
        current.getMonth() + 1
      }/${current.getDate()}`;
      return date;
    },

    // get default lokasi
    async getDefaultLocation() {
      // mengambil data dari local storage
      const dataString = localStorage.getItem("lokasi");
      const data = JSON.parse(dataString);
      if (dataString) {
        try {
          const response = await axios.get(
            "https://api.myquran.com/v1/sholat/jadwal/" +
              data.id +
              "/" +
              this.getDate()
          );
          this.allProperti = response.data.data;
          this.jadwal = this.allProperti.jadwal;
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const response = await axios.get(
            "https://api.myquran.com/v1/sholat/jadwal/" +
              "1602" +
              "/" +
              this.getDate()
          );
          this.allProperti = response.data.data;
          this.jadwal = this.allProperti.jadwal;
        } catch (error) {
          console.log(error);
        }
      }
    },

    async getDynamicLocation(id) {
      try {
        const response = await axios.get(
          "https://api.myquran.com/v1/sholat/jadwal/" +
            id +
            "/" +
            this.getDate()
        );
        this.allProperti = response.data.data;
        this.showModal = false;
        this.jadwal = this.allProperti.jadwal;
        localStorage.setItem(
          "lokasi",
          JSON.stringify({
            id: this.allProperti.id,
          })
        );
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>