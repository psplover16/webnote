import { defineStore } from "pinia";
import { ref, computed } from "vue";
export const useScreenSize = defineStore("screenSize", () => {
  const screenSize = ref(0.8);
  const screenStatus = computed(() => screenSize.value > 0.8);

  const setScreenSize = (e) => (screenSize.value = e);

  return {
    screenSize,
    screenStatus,
    setScreenSize,
  };
});
