import { defineStore } from 'pinia'
import { ref, computed, readonly } from 'vue'
import { UserType, type User } from '@/model/user'
export interface UserAuth extends User {
  token: string
}
const AUTHENTICATE_KEY = 'isAuthenticated'
export const useAuthStore = defineStore('auth', () => {
  const state = ref<UserAuth>()
  function setAuthUser(user: UserAuth) {
    state.value = user
  }

  function setIsAuthenticated(val: boolean) {
    localStorage.setItem(AUTHENTICATE_KEY, val.toString())
  }

  const isAuthenticated = (() => localStorage.getItem(AUTHENTICATE_KEY) === 'true')()

  return {
    setAuthUser,
    isAuthenticated,
    setIsAuthenticated,
    token: readonly<String>(state.value?.token || '')
  }
})
