import InteractScreen from '@/screens/InteractScreen.vue'
import MainScreen from '@/screens/MainScreen.vue'
import ResualtScreen from '@/screens/ResualtScreen.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainScreen
    },
    {
      path: '/interact/:level',
      name: 'interact',
      component: InteractScreen
    },
    {
      path: '/resualt/:time',
      name: 'resualt',
      component: ResualtScreen
    }
  ]
})

export default router
