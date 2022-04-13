import { createApp } from 'vue'
import Home from './views/Home.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import router from "./router/index";

createApp(Home)
    .use(router)
    .mount('#app')
