import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Offer from "@/views/Offer"
import Reports from "@/views/Reports"
import Gratitude from "@/views/Gratitude"
import store from "@/store/store"

const routes = [
  { path: '/', component: Main },
  { path: '/offer', component: Offer },
  { path: '/reports', component: Reports },
  { path: '/gratitude', component: Gratitude }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(function (to, from, next) {
  if (to.fullPath === '/gratitude') {
    if (!store.state.isGratitudeAvailable) {
      next('/')
    }
  }

  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0)
  next()
})

export default router
