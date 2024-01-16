import axios from 'axios';
import router from '@/router';
import { Auth } from '@aws-amplify/auth';

const state = {
  user: null,
};

const getters = {
  isAuthenticated: state => !!state.user,
  stateUser: state => state.user,
};

const actions = {
  async logIn({dispatch}, user) {
    await Auth.signIn({
      username: user.username,
      password: user.password,
    })
    dispatch('viewMe');
  },
  async viewMe({commit}) {
    try {
      let {data} = await axios.get('user');
      await commit('setUser', data);
    } catch (error) {
      if (error.response && error.response.status == 403) {
        router.push('/user-not-confirmed');
      } else {
        Promise.reject(error);
      }
    }
  },
  async logOut({commit}) {
    await Auth.signOut();
    await commit('logout', null);
  },
  async forgotPassword(_, username) {
    await Auth.forgotPassword(username);
  },
  async resetPassword(_, user) {
    await Auth.forgotPasswordSubmit(user.username, user.code, user.password);
  },
  async register(_, user) {
    await Auth.signUp({
      username: user.username,
      password: user.password,
      attributes: {
        email: user.username,
        'custom:request_details': user.request_details,
      },
    });
  },
  async sendConfirmationCode(_, username) {
    await Auth.resendSignUp(username);
  },
  async verify(_, user) {
    await Auth.confirmSignUp(user.username, user.code);
  },
};

const mutations = {
  setUser(state, username) {
    state.user = username;
  },
  logout(state, user){
    state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};
