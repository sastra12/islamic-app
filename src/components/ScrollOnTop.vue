<template>
  <div
    @click="scrollTop"
    class="w-10 h-10 bottom-4 right-10 fixed z-50 rounded-full bg-teal-500 flex justify-center items-center"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      class="w-5 h-5 svg-color"
    >
      <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        fill="white"
        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  emits: ["scrollOnTop"],
  setup(props, ctx) {
    const scrollTop = () => {
      ctx.emit("scrollOnTop");
    };

    return { scrollTop };
  },
};
</script>
