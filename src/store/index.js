import { createStore } from 'vuex';

import rootMutations from './mutations';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import counterModule from './counter/index.js';
//root state and root module
const store = createStore({
  modules: {
    //merging extra modules to global
    a: counterModule
  },
  state() {
    //  object hold application data
    return {
      isLoggedIn: false
    };
  },
  //   mutation : synchronous
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters
});

export default store;
