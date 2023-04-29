import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'bootstrap/dist/css/bootstrap.css'

import BootstrapVueNext from 'bootstrap-vue-next'




import AppVue from './App.vue'
import router from './router'

import appBoot from './plugin/appBoot'
import './assets/main.css'
createApp(AppVue).use(createPinia()).use(router).use(appBoot).use(BootstrapVueNext).mount('#app')
