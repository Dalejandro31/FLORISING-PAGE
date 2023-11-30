import { createRouter, createWebHistory } from 'vue-router'
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
    component: HomePage,
    meta:{title: 'Inicio'},
  },
  {
    path: '/servicios-Centro-Consolidacion',
    name: 'Servicios-Consolidacion',
    component: Servicios,
    meta:{title: 'Servicios de Consolidación'},
  },
  {
    path: '/nosotros-FLORISING-COMMERCIAL-&-LOGISTICS-GROUP',
    name: 'Nosotros-Consolidacion',
    component: Nosotros,
    meta:{title: 'Nosotros - Servicios de Consolidación  '},
  },
  {
    path: '/servicios-Floristeria',
    name: 'servicios-Floristeria',
    component: Productos,
    meta:{title: 'Servicios de Floristeria'},
  },
  {
    path: '/nosotros-FLORISING-CLG-SAS',
    name: 'Nosotros-Cls-Sas',
    component: NosotrosClsSas,
    meta:{title: 'Nosotros - Servicios de Floristeria'},
  },
  {
    path: '/contactanos',
    name: 'Contactanos',
    component: Contactanos,
    meta:{title: 'Contactanos'},
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Florising';
  next();
})

export default router
