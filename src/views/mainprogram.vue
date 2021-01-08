<template>
  <div class="grid grid-cols-7 mainfade">
    <sidebar></sidebar>
    <div class="col-start-2 col-span-11">
      <!-- <program></program> -->
      <!-- <program-two></program-two> -->
      <!-- <program-details></program-details> -->
      <submit-program></submit-program>
      <!-- <hanger></hanger> -->
    </div>
  </div>
</template>

<script>
// import Program from "../components/program/program.vue";
// import ProgramTwo from "../components/program/program2.vue";
// import programDetails from "../components/program/programDetails.vue";
import submitProgram from "../components/program/submitProgram.vue";
// import hanger from "../components/program/hanger.vue";
// @ is an alias to /src
import sidebar from "../components/sidebar/sidebar.vue";

export default {
  name: "mainprogram",
  components: {
    sidebar,
    // Program,
    // ProgramTwo,
    // programDetails,
    submitProgram,
    // hanger
  },
};
</script>
