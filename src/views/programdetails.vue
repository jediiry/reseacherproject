<template>
  <div class="grid grid-cols-7 mainfade">
    <sidebar></sidebar>
    <div class="col-start-2 h-screen overflow-hidden col-span-11 main_content">
      <mainheader></mainheader>
      <!-- <program></program> -->
      <!-- <program-two></program-two> -->
      <program-details></program-details>
      <!-- <submit-program></submit-program> -->
      <!-- <hanger></hanger> -->
      <!-- <no-submission></no-submission> -->
    </div>
  </div>
</template>

<script>
// import Program from "../components/program/program.vue";
// import ProgramTwo from "../components/program/program2.vue";
import programDetails from "../components/program/programDetails.vue";
// import submitProgram from "../components/program/submitProgram.vue";
// import hanger from "../components/program/hanger.vue";
// import noSubmission from "../components/program/noSubmission.vue";

// @ is an alias to /src
import sidebar from "../components/sidebar/sidebar.vue";
import mainheader from "../components/header/header";

export default {
  name: "programdetails",
  components: {
    sidebar,
    // Program,
    // ProgramTwo,
    programDetails,
    mainheader,
    // submitProgram,
    // hanger,
    // noSubmissiosn
  },
};
</script>
