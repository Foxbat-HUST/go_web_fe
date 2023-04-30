import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/pages/Login.vue'
import Home from '@/pages/Home.vue'
import Users from '@/pages/Users.vue'
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

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
      alias: '/',
      component: Home
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    }
  ]
})
router.beforeEach(
  (to: RouteLocationNormalized, _: RouteLocationNormalized, next: NavigationGuardNext) => {
    console.log('route...')
    const authStore = useAuthStore()
    if (to.path === '/login') {
      next()
      return
    }
    if (to.path === '/about') {
      next()
      return
    }

    if (!authStore.isAuthenticated) {
      next('/login')
    }
    next()
  }
)
export default router
