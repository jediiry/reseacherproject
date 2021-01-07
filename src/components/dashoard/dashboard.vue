<template src="./dashboard.html"> </template>

<script>
import linechart from "./chart.js";
import mainheader from "../header/header";
import noitem from "../noitem/noitem";
export default {
  name: "dashboard",
  components: {
    mainheader,
    linechart,
    noitem,
  },
  data() {
    return {
      currentTask: "all",
      currentActivity: "all",
      currentsession: true,
      notify: false,
      reward: true,
    };
  },
};
</script>

<style></style>
