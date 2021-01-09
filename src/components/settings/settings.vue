<template src="./settings.html"> </template>

<script>
import mainheader from "../header/header";
export default {
  name: "settings",
  data() {
    return {
      data: "profile",
    };
  },
  components: {
    mainheader,
  },
  methods: {
    settab(param) {
      this.data = param;
    },
  },
};
</script>

<style></style>
