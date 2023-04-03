<template>
  <div
    class="px-8 pt-6 pb-4 max-w-xl max-h-full mx-auto bg-[#f7f7f7]"
    :class="mode"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  inject: ["mode"],
  // created() {
  //   console.log(this.mode); // injected value
  // },
};
</script>

<style scoped>
.dark {
  background: rgb(17 24 39);
}
</style>