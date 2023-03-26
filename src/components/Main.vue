<template>
  <div class="bg-gradient-to-r rounded-md">
    <h1 class="text-center pt-3 font-semibold text-slate-600">
      Baca Al-Qur'an
    </h1>
    <div class="grid grid-cols-4 gap-4 mt-4">
      <router-link to="/quran">
        <card-menu>
          <img
            src="/image/quran.webp"
            alt=""
            class="w-10 h-10 text-center mx-auto"
          />
          <h6 class="text-center text-white text-xs mt-1">Al-Qur'an</h6>
        </card-menu>
      </router-link>

      <card-menu>
        <img
          src="/image/allah.webp"
          alt=""
          class="w-10 h-10 text-center mx-auto"
        />
        <h6 class="text-center text-white text-xs mt-1">Asmaul Husna</h6>
      </card-menu>
      <card-menu
        ><img
          src="/image/praying.webp"
          alt=""
          class="w-10 h-10 text-center mx-auto"
        />
        <h6 class="text-center text-white text-xs mt-1">Doa Harian</h6>
      </card-menu>
      <card-menu>
        <img
          src="/image/hadits.webp"
          alt=""
          class="w-10 h-10 text-center mx-auto"
        />
        <h6 class="text-center text-white text-xs mt-1">Hadist Rasul</h6>
      </card-menu>
      <card-menu
        ><img
          src="/image/lighter.webp"
          alt=""
          class="w-10 h-10 text-center mx-auto"
        />
        <h6 class="text-center text-white text-xs mt-1">Kisah Nabi</h6>
      </card-menu>
      <card-menu
        ><img
          src="/image/tasbih.webp"
          alt=""
          class="w-10 h-10 text-center mx-auto"
        />
        <h6 class="text-center text-white text-xs mt-1">Bacaan Tahlil</h6>
      </card-menu>
      <card-menu>
        <img
          src="/image/muhammad.webp"
          alt=""
          class="w-10 h-10 text-center mx-auto"
        />
        <h6 class="text-center text-white text-xs mt-1">
          Shalawat Nabi
        </h6></card-menu
      >
      <card-menu>
        <img
          src="/image/prayer.webp"
          alt=""
          class="w-10 h-10 text-center mx-auto"
        />
        <h6 class="text-center text-white text-xs mt-1">Bacaan Shalat</h6>
      </card-menu>
    </div>
  </div>
</template>

<script>
import CardMenu from "./CardMenu.vue";
export default {
  components: { CardMenu },
};
</script>

<style>
</style>