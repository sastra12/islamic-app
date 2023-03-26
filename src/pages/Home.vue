<template>
  <default-container>
    <Header />
    <Main />
  </default-container>
</template>

<script>
import DefaultContainerVue from "../components/DefaultContainer.vue";
import Header from "../components/Header.vue";
import Main from "../components/Main.vue";
import DefaultContainer from "../components/DefaultContainer.vue";
export default {
  components: { Header, Main, DefaultContainer },
};
</script>

<style>
</style>