import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';
// one store for entire application
const store = createStore({
  state() {
    //  object hold application data
    return {
      counter: 0
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 20;
    }
  }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
