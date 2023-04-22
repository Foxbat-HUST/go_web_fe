import { defineStore } from 'pinia'
import { ref, computed, reactive } from 'vue'
import { UserType } from '@/model/user'
export interface UserAuth {
  name: string
  type: UserType
  token: string | undefined
}
export const useAuthStore = defineStore('auth', () => {
  const state = reactive<UserAuth>({
    name: '',
    type: UserType.None,
    token: undefined
  })
  function setAuthUser(user: UserAuth) {
    state.name = user.name
    state.type = user.type
    state.token = user.token
  }

  const authToken = computed<string | undefined>(() => state.token)

  return { setAuthUser, authToken }
})
