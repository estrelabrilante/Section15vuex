<template>
  <button @click="addTwo">Add Two</button>
</template>
<script>
export default {
  methods: {
    addTwo() {
      //   this.$store.state.counter = this.$store.state.counter + 1;
      this.$store.commit('increment');
    }
  }
};
</script>
