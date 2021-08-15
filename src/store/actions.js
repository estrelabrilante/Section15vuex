export default {
  //work for setAuth mutation
  login(context) {
    context.commit('setAuth', { isAuth: true });
  },

  logout(context) {
    context.commit('setAuth', { isAuth: false });
  }
};
