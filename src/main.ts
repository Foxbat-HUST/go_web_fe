import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import './assets/css/theme.scss'
import './assets/css/app.scss'

import App from './App.vue'
import router from './router'

import appBoot from './plugin/appBoot'
import { HttpFactory } from '@/api/httpFactory'
import { type AuthUserResponse } from './api/authApi'
import {emptyUser } from './model/user'
// TODO: move authentication init logic to some where...
HttpFactory.init()
const http = HttpFactory.getHttpInstance()
let authData: AuthUserResponse
try {
  authData = await http.get<AuthUserResponse>('auth/init').then((res) => res.data)
} catch (e) {
  authData = {
    ...emptyUser,
    token: ''
  }
}
createApp(App)
  .use(createPinia())
  .use(router)
  .use<AuthUserResponse>(appBoot, authData)
  .mount('#app')
