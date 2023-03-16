import { createApp } from 'vue'
import { createPinia } from "pinia";

const store = createPinia()

import App from './App.vue'
import router from './router'

import './assets/main.scss'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
