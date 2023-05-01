import { createApp } from 'vue'
import store  from './store/store'
import router from './router/appRouter'
import App from './App.vue'
import './input.css'

createApp(App)
.use(router)
.use(store)
.mount('#app')
 