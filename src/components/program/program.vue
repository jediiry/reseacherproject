<template src="./program.html"> </template>

<script>
import mainheader from "../header/header";
export default {
  name: "program",
  components: {
    mainheader,
  },
  methods: {
    details() {
      this.$router.push("program/details");
    },
  },
};
</script>

<style scoped>
.programList {
  cursor: pointer;
}
.programList:hover {
  background: rgb(235, 235, 235);
}
img.programList_avatar {
  flex: 1 !important;
}

.programList_container {
  flex: 3 !important;
}
</style>
