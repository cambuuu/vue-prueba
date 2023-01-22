import {createRouter, createWebHistory} from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Galeria from '../views/Galeria.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: () => import('@/views/About.vue'),
    },
    {
      path: '/galeria',
      component: () => import('@/views/Galeria.vue'),
    },
]
})
export default router
