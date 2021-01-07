<template>
  <div class="grid grid-cols-7 mainfade">
    <sidebar></sidebar>
    <div class="col-start-2 col-span-11">
      <program></program>
    </div>
  </div>
</template>

<script>
import Program from "../components/program/program.vue";
// @ is an alias to /src
import sidebar from "../components/sidebar/sidebar.vue";

export default {
  name: "mainprogram",
  components: {
    sidebar,
    Program,
  },
};
</script>
