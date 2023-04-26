import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/components/pages/Login.vue'
import { useAuthStore } from '@/stores/auth'
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

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
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach(
  (to: RouteLocationNormalized, _: RouteLocationNormalized, next: NavigationGuardNext) => {
    console.log('router...')
    const authStore = useAuthStore()
    if (to.path === '/login') {
      next()
      return
    }
    if (to.path === '') {
      next()
      return
    }

    if (!authStore.isAuthenticated) {
      next('/login')
    }
  }
)

export default router
