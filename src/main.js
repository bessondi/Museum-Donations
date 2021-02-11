import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store, {ru, en} from './store/store'
import locale from './store/locale'

createApp(App)
  .use(store)
  .use(router)
  .use(locale, { ru, en })
  .mount('#app')
