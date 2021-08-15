import { createStore } from 'vuex';

// one store for entire application
const counterModule = {
  // name spacing modules
  namespaced: true,
  state() {
    return {
      counter: 0
    };
  },
  mutations: {
    increment(state) {
      console.log(state);
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    }
  },
  actions: {
    //work for increase mutation
    increase(context, payload) {
      console.log(context);
      context.commit('increase', payload);
    },
    //work for increment mutation
    increment(context) {
      console.log(context);
      setTimeout(function() {
        context.commit('increment');
      }, 2000);
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    }
  }
};
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
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    }
  },
  actions: {
    //work for setAuth mutation
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },

    logout(context) {
      context.commit('setAuth', { isAuth: false });
    }
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    }
  }
});

export default store;
