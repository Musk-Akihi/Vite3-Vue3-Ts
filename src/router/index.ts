import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// https://router.vuejs.org/zh/guide
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'App',
    component: () => import('@/App.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
