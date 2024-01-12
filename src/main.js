import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from "vue";
import axios from 'axios';

import App from './App.vue';
import Amplify from 'aws-amplify';
import { Auth } from '@aws-amplify/auth';
import router from './router';
import store from './store';

// App
const app = createApp(App);

// API URL
const API_URL = process.env.API_URL || 'https://dev.decodeapi.arthur-jaques.de';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = API_URL;

// Auth
(async () => {
  let response = await axios.get('/access_info');
  let cognitoConfig = response.data.cognito;
  Amplify.configure({
    Auth: {
      region: cognitoConfig.region,
      userPoolId: cognitoConfig.user_pool_id,
      userPoolWebClientId: cognitoConfig.client_id,
      authenticationFlowType: 'USER_PASSWORD_AUTH'
    }
  });
})();

// Token handling
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

app.use(router);
app.use(store);
app.mount("#app");
