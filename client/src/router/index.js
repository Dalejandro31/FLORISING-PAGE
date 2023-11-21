import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/homePage/HomePage.vue'
import Nosotros from '../views/nosotros/Nosotros.vue'
import Servicios from '../views/servicios/Servicios.vue'
import Contactanos from '../views/contactanos/Contactanos.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/servicios',
    name: 'Servicios',
    component: Servicios
  },
  {
    path: '/nosotros-FLORISING-COMMERCIAL-&-LOGISTICS-GROUP',
    name: 'Nosotros-Consolidacion',
    component: Nosotros
  },
  // {
  //   path: '/nosotros-FLORISING-CLG-SAS',
  //   name: 'Nosotros-Consolidacion',
  //   component: Nosotros
  // },
  {
    path: '/contactanos',
    name: 'Contactanos',
    component: Contactanos
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
