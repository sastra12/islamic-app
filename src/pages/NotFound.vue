<template>
  <default-container>
    <div class="h-screen">
      <Header />
      <div class="flex flex-col not-found">
        <img
          src="@/assets/search-not-found.svg"
          alt=""
          class="w-[350px] mx-auto"
        />
        <h4 class="mx-auto font-sans font-bold text-xl mt-4 text-red-500">
          Uppss... Search Not Found
        </h4>
      </div>
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
