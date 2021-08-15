export default {
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
};
