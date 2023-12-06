import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import store from './store'
import route from "./router";

const app = createApp(App)
app.use(route).use(store)
app.mount('#app')
