<template>
  <default-container>
    <Header />
    <div class="flex flex-col items-center max-h-screen not-found">
      <img
        src="@/assets/search-not-found.svg"
        alt=""
        class="w-[350px] mx-auto"
      />
      <h4 class="mx-auto font-poppins font-bold text-xl mt-4">
        Search not found
      </h4>
    </div>
  </default-container>
</template>

<style scoped>
.not-found {
  transform: translateY(-20px);
}
</style>

<script>
import Header from "../components/home/Header.vue";
import DefaultContainer from "../components/reusable/DefaultContainer.vue";
export default {
  components: { Header, DefaultContainer },
};
</script>

<style></style>
