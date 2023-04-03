<template>
  <div class="bg-gradient-to-r from-emerald-700 to-teal-500 rounded-md h-48">
    <!-- Logo Atas -->
    <Logo />

    <div class="p-3">
      <p class="font-sans text-white text-xl">
        Lebih Seru dan Mudah Dengan
        <span class="font-semibold">Islamic App</span>
      </p>
      <span class="font-sans text-white text-sm"
        >Akses Kapan Saja dan Dimana Saja</span
      >
    </div>
  </div>

  <div
    class="px-3 py-2 left-0 right-0 mx-auto top-[-28px] relative bg-white rounded-md w-11/12 shadow-lg"
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

<script>
import Logo from "../Logo.vue";
export default {
  components: { Logo },
  inject: ["mode"],
  created() {
    console.log(this.mode); // injected value
  },
};
</script>

<style>
</style>