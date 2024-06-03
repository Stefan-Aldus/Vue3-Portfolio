import { createRouter, createWebHistory } from 'vue-router'
import PersonalInfo from '@/views/PersonalInfo.vue'
import MoreInfo from '@/views/MoreInfo.vue'

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
    },
    {
      path: '/more-info',
      name: 'MoreInfo',
      component: MoreInfo
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/ContactForm.vue')
    }
  ]
})

export default router
