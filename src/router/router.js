import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Offer from "@/views/Offer"
import Gratitude from "@/views/Gratitude"
import Report from "@/views/Report"

const routes = [
  { path: '/', component: Main },
  { path: '/offer', component: Offer },
  { path: '/gratitude', component: Gratitude },
  { path: '/report', component: Report },
  // { path: '/offer', component: () => import(/* webpackChunkName: "offer" */ '../views/Offer.vue') }
  // { path: '/gratitude', component: () => import(/* webpackChunkName: "gratitude" */ '../views/Gratitude.vue') },
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
