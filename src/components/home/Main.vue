<template>
  <h1 class="text-center pt-3 font-semibold text-slate-600">Baca Al-Qur'an</h1>
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

    <router-link to="/asmaul-husna">
      <card-menu>
        <img
          src="/image/allah.webp"
          alt=""
          class="w-10 h-10 text-center mx-auto"
        />
        <h6 class="text-center text-white text-[9px] min-[435px]:text-xs mt-1">
          Asmaul Husna
        </h6>
      </card-menu>
    </router-link>

    <router-link to="/doa-harian">
      <card-menu
        ><img
          src="/image/praying.webp"
          alt=""
          class="w-10 h-10 text-center mx-auto"
        />
        <h6 class="text-center text-white text-[9px] min-[435px]:text-xs mt-1">
          Doa Harian
        </h6>
      </card-menu>
    </router-link>

    <router-link to="/bacaan-tahlil">
      <card-menu
        ><img
          src="/image/tasbih.webp"
          alt=""
          class="w-10 h-10 text-center mx-auto"
        />
        <h6 class="text-center text-white text-[9px] min-[435px]:text-xs mt-1">
          Bacaan Tahlil
        </h6>
      </card-menu>
    </router-link>
  </div>

  <!-- Waktu Sholat -->
  <PrayerSchedule />
</template>

<script>
import PrayerSchedule from "./PrayerSchedule.vue";
import CardMenu from "./CardMenu.vue";
import Modal from "../home/Modal.vue";

export default {
  components: { CardMenu, Modal, PrayerSchedule },
};
</script>

<style>
</style>