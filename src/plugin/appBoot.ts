import type { App } from 'vue'
import { HttpFactory } from '@/api/httpFactory'
import { AuthApi } from '@/api/authApi'
import { useAuthStore } from '@/stores/auth'

export default async function appBoot(app: App) {
  HttpFactory.init()
  const authData = await AuthApi.getInstance().authInit()
  const authStore = useAuthStore()
  authStore.setAuthUser({
    id: authData.id,
    name: authData.name,
    email: authData.email,
    age: authData.age,
    type: authData.type,
    token: authData.token
  })
}
