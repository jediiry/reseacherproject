<template>
  <div class="grid grid-cols-7 mainfade">
    <sidebar></sidebar>
    <div class="col-start-2 col-span-11">
      <submission></submission>
    </div>
  </div>
</template>

<script>
import submission from "../components/submission/submission.vue";
// @ is an alias to /src
import Sidebar from "../components/sidebar/sidebar.vue";

export default {
  name: "Home",
  components: {
    Sidebar,
    submission,
  },
};
</script>
