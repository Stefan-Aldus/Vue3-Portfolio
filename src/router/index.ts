import { createRouter, createWebHistory } from 'vue-router'
import PersonalInfo from '@/views/PersonalInfo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'PersonalInfo',
      component: PersonalInfo
    }
  ]
})

export default router
