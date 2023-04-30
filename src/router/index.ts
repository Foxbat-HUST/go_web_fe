import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/pages/Login.vue'
import Home from '@/pages/Home.vue'
import Users from '@/pages/Users.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
  ]
})

export default router
