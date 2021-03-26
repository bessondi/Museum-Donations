import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Offer from "@/views/Offer"
import Gratitude from "@/views/Gratitude"

const routes = [
  { path: '/', component: Main },
  { path: '/offer', component: Offer },
  { path: '/gratitude', component: Gratitude },
  // { path: '/offer', component: () => import(/* webpackChunkName: "offer" */ '../views/Offer.vue') }
  // { path: '/gratitude', component: () => import(/* webpackChunkName: "gratitude" */ '../views/Gratitude.vue') },
]

export default createRouter({
  history: createWebHistory(),
  routes
})
