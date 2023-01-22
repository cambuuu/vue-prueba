import {createRouter, createWebHistory} from 'vue-router'
import Formulario from '../components/Formulario.vue'
import Home from '../components/Home.vue'
import Guide from '../components/Guide.vue'


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
      path: '/guide',
      component: Guide,
    },
]
})
export default router
