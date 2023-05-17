<template>
  <div
    class="bg-white py-4 px-3 mb-3 rounded-md cursor-pointer dark:bg-slate-800"
  >
    <p class="text-teal-500 font-light">{{ selectedProp.data.title }}</p>
    <p class="text-right text-xl text-slate-500 mt-2 font-bold">
      {{ selectedProp.data.arabic }}
    </p>
    <svg
      @click="isOpen = !isOpen"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-4 h-4 text-slate-400"
      :class="isOpen ? 'rotate-180 duration-500' : 'rotate-(-180) duration-500'"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>

    <p
      class="mt-2 text-slate-400 text-sm"
      :class="isOpen ? 'd-block' : 'hidden'"
    >
      <slot></slot>
    </p>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  props: {
    doa: {
      type: Object,
    },
    tahlil: {
      type: Object,
    },
  },
  setup(props) {
    const isOpen = ref(false);
    const selectedProp = reactive({
      data: null,
    });

    // update data
    selectedProp.data = props.doa ? props.doa : props.tahlil;

    return {
      selectedProp,
      isOpen,
    };
  },
};
</script>

<style scoped>
</style>