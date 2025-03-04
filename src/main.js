import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from "vue";
import axios from 'axios';

import App from './App.vue';
import { Amplify, Auth } from 'aws-amplify';
import router from './router';
import store from './store';

const API_URL = process.env.VUE_APP_API_URL || 'https://prod.api.decode.arthur-jaques.de';
export const apiClient = axios.create({
  baseURL: API_URL,
});

async function initializeApp() {
  try {
    let response = await apiClient.get('/access_info');
    let cognitoConfig = response.data.cognito;
    Amplify.configure({
      Auth: {
        userPoolId: cognitoConfig.user_pool_id,
        userPoolWebClientId: cognitoConfig.client_id,
        region: cognitoConfig.region,
        authenticationFlowType: 'USER_PASSWORD_AUTH'
      }
    });
    apiClient.interceptors.request.use(async (config) => {
      try {
        const session = await Auth.currentSession();
        const token = session.getIdToken().getJwtToken();
        config.headers.Authorization = `Bearer ${token}`;
      } catch (error) {
        await store.dispatch('logOut');
        router.push('/login');
        return Promise.reject(error);
      }
      return config;
    }, async (error) => {
      if (error.response && error.response.status === 401) {
        await store.dispatch('logOut');
        router.push('/login');
        return Promise.reject(error);
      }
      return Promise.reject(error);
    });

    const app = createApp(App);
    app.use(router);
    app.use(store);
    app.mount("#app");
  } catch (error) {
    console.error("Error during app initialization:", error);
  }
}

initializeApp();
