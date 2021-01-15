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

<style>
  .taskitem > :nth-child(1),
  .taskitem > :nth-child(3)
  {
    flex: 1;
  }

  .taskitem > :nth-child(2){
    flex: 7;
  }

@media only screen and (max-width: 63.94em) { /** 1023px / 16 */
  .taskitem > :nth-child(1),
  .taskitem > :nth-child(3)
  {
    flex: 1;
  }

  .taskitem > :nth-child(2){
    flex: 11;
  }
}
</style>
