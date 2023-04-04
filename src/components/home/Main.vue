<template>
  <h1 class="text-center pt-3 font-semibold dark:text-white">Baca Al-Qur'an</h1>
  <div class="grid grid-cols-2 min-[435px]:grid-cols-4 gap-4 mt-4">
    <router-link to="/quran">
      <card-menu>
        <img
          src="/image/quran.webp"
          alt=""
          class="w-7 h-7 text-center mx-auto"
        />
        <p class="text-[12px] mt-2 text-white text-center">Al Quran</p>
      </card-menu>
    </router-link>

    <router-link to="/asmaul-husna">
      <card-menu>
        <img
          src="/image/allah.webp"
          alt=""
          class="w-7 h-7 text-center mx-auto"
        />
        <p class="text-[12px] mt-2 text-white text-center">Asmaul Husna</p>
      </card-menu>
    </router-link>

    <router-link to="/doa-harian">
      <card-menu
        ><img
          src="/image/praying.webp"
          alt=""
          class="w-7 h-7 text-center mx-auto"
        />
        <p class="text-[12px] mt-2 text-white text-center">Doa Harian</p>
      </card-menu>
    </router-link>

    <router-link to="/bacaan-tahlil">
      <card-menu
        ><img
          src="/image/tasbih.webp"
          alt=""
          class="w-7 h-7 text-center mx-auto"
        />
        <p class="text-[12px] mt-2 text-white text-center">Bacaan Tahlil</p>
      </card-menu>
    </router-link>
  </div>

  <!-- Waktu Sholat -->
  <PrayerSchedule />

  <!-- Footer -->
  <Footer />
</template>

<script>
import PrayerSchedule from "./PrayerSchedule.vue";
import Footer from "./Footer.vue";
import CardMenu from "./CardMenu.vue";

export default {
  components: { CardMenu, PrayerSchedule, Footer },
};
</script>

<style>
</style>