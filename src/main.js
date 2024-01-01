import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from "vue";
import axios from 'axios';

import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.API_URL || 'https://dev.decodeapi.arthur-jaques.de';

axios.interceptors.response.use(undefined, function (error) {
    if (error) {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        store.dispatch('logOut');
        return router.push('/login')
      }
      else {
        return Promise.reject(error);
      }
    }
  });

app.use(router);
app.use(store);
app.mount("#app");