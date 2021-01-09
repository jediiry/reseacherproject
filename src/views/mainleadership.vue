<template>
  <div class="grid grid-cols-7 mainfade">
    <sidebar></sidebar>
    <div class="col-start-2 col-span-11">
      <leadership></leadership>
      <!-- <leadership-two></leadership-two> -->
    </div>
  </div>
</template>

<script>
import leadership from "../components/leadership/leadership.vue";
// import leadershipTwo from "../components/leadership/leadership2.vue";

// @ is an alias to /src
import sidebar from "../components/sidebar/sidebar.vue";

export default {
  name: "maindiscovery",
  components: {
    sidebar,
    leadership,
    // leadershipTwo,
  },
};
</script>
