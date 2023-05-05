import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type User, emptyUser } from '@/model/user'

export const useUserStore = defineStore('user', () => {
  const state = ref<User>(emptyUser)
  const setUser = (user: User) => {
    state.value = user
  }

  return {
    setUser,
    name: computed({
      get: () => state.value.name,
      set: (val) => (state.value.name = val)
    }),
    email: computed({
      get: () => state.value.email,
      set: (val) => (state.value.email = val)
    }),
    age: computed(() => state.value.age),
    type: computed(() => state.value.type)
  }
})
