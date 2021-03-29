import { createApp } from 'vue'
import router from './router/router'
import store, {ru, en} from './store/store'
import locale from './store/locale'
import App from './App.vue'

createApp(App)
  .use(store)
  .use(router)
  .use(locale, { ru, en })
  .mount('#app')
