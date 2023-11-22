import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/homePage/HomePage.vue'
import Nosotros from '../views/nosotros/Nosotros.vue'
import Servicios from '../views/servicios/Servicios.vue'
import Productos from '../views/productos/Productos.vue'
import Contactanos from '../views/contactanos/Contactanos.vue'
import NosotrosClsSas from '../views/nosotrosFlorisingClgSas/NosotrosClgSas.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/servicios-Centro-Consolidacion',
    name: 'Servicios-Consolidacion',
    component: Servicios
  },
  {
    path: '/nosotros-FLORISING-COMMERCIAL-&-LOGISTICS-GROUP',
    name: 'Nosotros-Consolidacion',
    component: Nosotros
  },
  {
    path: '/servicios-Floristeria',
    name: 'servicios-Floristeria',
    component: Productos
  },
  {
    path: '/nosotros-FLORISING-CLG-SAS',
    name: 'Nosotros-Cls-Sas',
    component: NosotrosClsSas
  },
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
