import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from "vue";
import axios from 'axios';

import App from './App.vue';
import { Amplify, Auth } from 'aws-amplify';
import router from './router';
import store from './store';

const API_URL = process.env.API_URL || 'https://dev.decodeapi.arthur-jaques.de';
axios.defaults.baseURL = API_URL;

async function initializeApp() {
  try {
    let response = await axios.get('/access_info');
    let cognitoConfig = response.data.cognito;
    Amplify.configure({
      Auth: {
        userPoolId: cognitoConfig.user_pool_id,
        userPoolWebClientId: cognitoConfig.client_id,
        region: cognitoConfig.region,
        authenticationFlowType: 'USER_PASSWORD_AUTH'
      }
    });
    axios.interceptors.request.use(async (config) => {
      try {
        const session = await Auth.currentSession();
        const token = session.getIdToken().getJwtToken();
        config.headers.Authorization = `Bearer ${token}`;
      } catch (error) {
        store.dispatch('logOut').then(() => {
          router.push('/login')
        });
      }
      return config;
    }, (error) => {
      if (error.response.status === 401) {
        store.dispatch('logOut').then(() => {
          router.push('/login')
        });
      }
      else {
        return Promise.reject(error);
      }
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
