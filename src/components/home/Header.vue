<template>
  <div class="bg-gradient-to-r from-emerald-700 to-teal-500 rounded-md h-48">
    <!-- Logo Atas -->
    <div class="flex p-3 justify-between">
      <div class="flex items-center">
        <p class="font-sans text-white">Islamic App</p>
        <img class="w-4 h-4 ml-2" src="/image/muslim.webp" alt="" />
      </div>

      <button @click="toggleDark()">
        <svg
          v-if="isDark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          class="text-yellow-400 h-7 w-7 cursor-pointer"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
            fill="currentColor"
          />
        </svg>
        <!-- bulan -->
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          class="text-emerald-800 h-7 w-7 cursor-pointer"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
    <div class="p-3">
      <p class="font-sans text-white text-xl">
        Lebih Seru dan Mudah Dengan
        <span class="font-semibold text-yellow-400">Islamic App</span>
      </p>
      <span class="font-sans text-white text-sm"
        >Akses Dengan Mudah Kapanpun Dan Dimanapun</span
      >
    </div>
  </div>

  <div
    class="px-3 py-2 left-0 right-0 mx-auto top-[-12px] min-[435px]:top-[-28px] relative bg-white rounded-md w-11/12 shadow-lg"
  >
    <p class="font-sans text-xs text-slate-600">
      Barang siapa membaca satu huruf dari kitab Allah, maka dibalas satu
      kebaikan dan satu kebaikan dilipat gandakan menjadi sepuluh.
      <span class="font-sans text-sm font-semibold text-slate-600"
        >(H.R.At-Tirmidzi)</span
      >
    </p>
  </div>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style></style>
