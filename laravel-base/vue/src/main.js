import { createApp } from 'vue'
import store from './store/store'
import router from './router/appRouter'
import App from './App.vue'
import './input.css'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
