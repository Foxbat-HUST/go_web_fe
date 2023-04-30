import { defineStore } from 'pinia'
import { ref, computed, readonly } from 'vue'
import { UserType, type User } from '@/model/user'
export interface UserAuth extends User {
  token: string
}
export const useAuthStore = defineStore('auth', () => {
  const state = ref<UserAuth>()
  function setAuthUser(user: UserAuth) {
    state.value = user
  }

  return {
    setAuthUser,
    isAuthenticated: computed<boolean>(() => !!state.value?.token),
    token: computed<string>(() => state.value?.token || '')
  }
})
