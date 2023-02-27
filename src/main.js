import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import 'material-icons/iconfont/material-icons.css'

import Router from './router/index'
import Store from './store'

const app = createApp(App)
app.use(Router).use(Store)
app.mount('#app')
