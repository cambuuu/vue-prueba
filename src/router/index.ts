import {createRouter, createWebHistory} from 'vue-router'
import Formulario from '../components/Formulario.vue'
import Home from '../components/Home.vue'
import Galeria from '../components/Galeria.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/formulario',
      component: Formulario,
    },
    {
      path: '/galeria',
      component: Galeria,
    },
]
})
export default router
