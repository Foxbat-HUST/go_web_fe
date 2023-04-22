import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives
})

import AppVue from './App.vue'
import router from './router'

import appBoot from './plugin/appBoot'
import './assets/main.css'
createApp(AppVue).use(createPinia()).use(router).use(appBoot).use(vuetify).mount('#app')
