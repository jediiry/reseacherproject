<template src="./settings.html"> </template>

<script>
export default {
  methods: {
    route(param) {
      this.$store.state.active = param;
      this.$router.push(`/${param}`);
    },
  },
};
</script>

<style></style>
