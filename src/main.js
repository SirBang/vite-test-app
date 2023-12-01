import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { vfmPlugin } from 'vue-final-modal'
import store from './store';
import './style.css'
// import 'vue-final-modal/style.css'
import '@fortawesome/fontawesome-free/css/all.css';
import App from './App.vue'

const routes = [
    {
        path: '/',
        redirect: '/products'
    },
    {
      path: '/products/search',
      name: 'search',
      component: App
    },
    {
      path: '/products/:id',
      name: 'Product',
      component: App
    },
]
  
const router = createRouter({
    history: createWebHistory(),
    routes
})
// const vfm = createVfm();
const app = createApp(App);
      app.use(vfmPlugin);
      app.use(router);
      app.use(store);
      // app.use(vfm);
      app.mount('#app');

