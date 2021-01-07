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

<style></style>
