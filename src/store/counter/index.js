import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getters.js';

// one store for entire application
export default {
  // name spacing modules
  namespaced: true,
  state() {
    return {
      counter: 0
    };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters
};
