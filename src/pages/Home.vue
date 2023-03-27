<template>
  <default-container>
    <Header />
    <Main />
  </default-container>
</template>

<script>
import Header from "../components/home/Header.vue";
import Main from "../components/home/Main.vue";
import DefaultContainer from "../components/DefaultContainer.vue";
export default {
  components: { Header, Main, DefaultContainer },
};
</script>

<style>
</style>