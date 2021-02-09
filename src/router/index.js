import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '../views/Main.vue'

const routes = [
  {
    path: '/',
    // name: 'Main',
    component: Main
  },
  {
    path: '/gratitude',
    // name: 'Gratitude',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "gratitude" */ '../views/Gratitude.vue')
  },
  {
    path: '/offer',
    // name: 'Offer',
    component: () => import(/* webpackChunkName: "offer" */ '../views/Offer.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
