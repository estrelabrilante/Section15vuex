<template>
  <!-- <h3>{{ finalCounter }}</h3> -->
  <h3>{{ counter }}</h3>
  <p>We do more here...</p>
</template>
<script>
// import { mapGetters } from 'vuex';
export default {
  computed: {
    // counter() {
    //   return this.$store.state.counter;
    // }
    // counter() {
    //   return this.$store.getters.finalCounter;
    // }
    // after using namespace
    counter() {
      return this.$store.getters['a/finalCounter'];
    }
    // ...mapGetters(['finalCounter'])
  }
};
</script>
