import { createApp } from 'vue'
import App from '../src/App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'

createApp(App)
    .use(router).mount('#app');
