<template>
  <div class="grid grid-cols-7 mainfade">
    <sidebar></sidebar>
    <div class="col-start-2 col-span-11">
      <!-- <discovery></discovery> -->
      <!-- <discovery-two></discovery-two> -->
      <!-- <discovery-three></discovery-three> -->
      <discovery-four></discovery-four>
      
    </div>
  </div>
</template>

<script>
// import discovery from "../components/discovery/discovery.vue";
// import DiscoveryTwo from "../components/discovery/discovery2.vue";
// import DiscoveryThree from "../components/discovery/discovery3.vue";
import DiscoveryFour from "../components/discovery/discovery4.vue";

// @ is an alias to /src
import sidebar from "../components/sidebar/sidebar.vue";

export default {
  name: "maindiscovery",
  components: {
    sidebar,
    // discovery,
    // DiscoveryTwo,
    // DiscoveryThree,
    DiscoveryFour
    
  },
};
</script>
