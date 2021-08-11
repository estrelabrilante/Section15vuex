<template>
  <button @click="addTwo">Add Four</button>
  <!-- <button @click="increment">Add Two</button>
  <button @click="increase({ value: 30 })">Add thirty</button> -->
  <!-- <button @click="inc">Add Two</button> -->
  <!-- <button @click="incrse({ value: 30 })">Add thirty</button> -->
</template>
<script>
// import mapActions from 'vuex';
export default {
  methods: {
    addTwo() {
      //   this.$store.state.counter = this.$store.state.counter + 1;
      this.$store.dispatch('a/increment');
    }
    // mapActions argument as an array
    // ...mapActions(['increment', 'increase'])
    // mapActions argument as an object
    // ...mapActions({
    //   inc: 'increment',
    //   incrse: 'increase'
    // })
  }
};
</script>
