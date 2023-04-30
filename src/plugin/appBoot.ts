import type { App } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { type AuthUserResponse } from '@/api/authApi'

export default function appBoot(app: App, option: AuthUserResponse) {
  const authStore = useAuthStore()
  authStore.setAuthUser({
    id: option.id,
    name: option.name,
    email: option.email,
    age: option.age,
    type: option.type,
    token: option.token
  })
}
