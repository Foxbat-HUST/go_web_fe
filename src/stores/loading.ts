import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', () => {
  const state = ref<boolean>(false)
  const showLoading = () => {
    state.value = true
  }
  const hideLoading = () => {
    state.value = false
  }

  return { showLoading, hideLoading, loading: computed(() => state.value) }
})
