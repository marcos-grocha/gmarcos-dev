import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CertificatesView from '@/views/CertificatesView.vue'
import CurriculoView from '@/views/CurriculoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/certificates',
    name: 'certificates',
    component: CertificatesView
  },
  {
    path: '/cv',
    name: 'Curriculo',
    component: CurriculoView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
