import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/join',
      component: () => import('@/views/Join.vue')
    },
    {
      path: '/login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/cart',
      component: () => import('@/views/Cart.vue')
    },
    {
      path: '/order',
      component: () => import('@/views/OrderForm.vue')
    },
    
  ],
})

export default router
