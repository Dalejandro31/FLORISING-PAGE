import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/homePage/HomePage.vue'
import Nosotros from '../views/nosotros/Nosotros.vue'
 
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: Nosotros
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
