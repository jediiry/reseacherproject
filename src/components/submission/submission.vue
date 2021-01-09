<template src="./submission.html"> </template>

<script>
import mainheader from "../header/header";
import noitem from "../noitem/noitem";
export default {
  name: "submission",
  components: {
    mainheader,
    noitem,
  },
  data() {
    return {
      tab: "all",
    };
  },
  methods: {
    setTab(param) {
      this.tab = param;
    },
  },
};
</script>

<style></style>
