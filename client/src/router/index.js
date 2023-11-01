import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LandingPage from '../views/homePage/HomePage.vue'
import Nosotros from '../views/nosotros/Nosotros.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingPage
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: Nosotros
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
