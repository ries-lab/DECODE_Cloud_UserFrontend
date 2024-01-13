import axios from 'axios';
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
    let {data} = await axios.get('user');
    await commit('setUser', data);
  },
  async logOut({commit}) {
    await Auth.signOut();
    await commit('logout', null);
  }
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
