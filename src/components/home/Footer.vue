<template>
  <div class="mt-12 flex justify-center items-center">
    <p :class="selectedColor">© 2023. All rights reserved</p>
  </div>
</template>

<script>
export default {
  inject: ["mode"],
  data() {
    return {
      selectedColor: "",
    };
  },
  created() {
    this.selectedColor =
      this.mode != "dark"
        ? (this.selectedColor = "text-slate-600")
        : (this.selectedColor = "text-white");
  },
};
</script>