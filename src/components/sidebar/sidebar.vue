<template src="./sidebar.html"> </template>

<script>
import { mapState } from "vuex";
export default {
  name: "sidebar",
  methods: {
    route(param) {
      this.$store.state.active = param;
      this.$router.push(`/${param}`);
    },
  },
  computed: {
    ...mapState({
      currentRoute: (state) => state.active,
    }),
  },
};
</script>

<style>
/*
$bp-largest: 75em; // 1200px / 16 = 75em or 1200px / 10 = 120rem
$bp-large: 68.75em; // 1100px
$bp-medium: 56.25em; // 900px
$bp-small: 37.5em; // 600px
$bp-smallest: 31.25em; // 500px
$bp-smallest-2: 22.5em; // 360px 
*/
@media only screen and (max-width: 75em) { /** 1200px / 16 */
  .sidebar_div {
    display: none;
  }
  
}
</style>
