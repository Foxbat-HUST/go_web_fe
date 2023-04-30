import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import './assets/css/theme.scss'
import './assets/css/app.scss'

import AppVue from './App.vue'
import router from './router'

import appBoot from './plugin/appBoot'
createApp(AppVue).use(createPinia()).use(router).use(appBoot).mount('#app')
