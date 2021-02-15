import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'

const routes = [
  { path: '/', component: Main },
  { path: '/gratitude', component: () => import(/* webpackChunkName: "gratitude" */ '../views/Gratitude.vue') },
  { path: '/offer', component: () => import(/* webpackChunkName: "offer" */ '../views/Offer.vue') }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
