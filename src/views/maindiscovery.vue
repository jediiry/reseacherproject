<template>
  <div class="grid grid-cols-7 mainfade">
    <sidebar></sidebar>
    <div class="col-start-2 col-span-11 main_content">
      <discovery></discovery>
      <!-- <discovery></discovery> -->
      <discovery-two></discovery-two>
      <!-- <discovery-three></discovery-three> -->
      <!-- <discovery-four></discovery-four> -->
      <!-- <discovery-five></discovery-five> -->
      <!-- <discovery-six></discovery-six> -->
      <!-- <discovery-seven></discovery-seven> -->
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import discovery from "../components/discovery/discovery.vue";
// import DiscoveryTwo from "../components/discovery/discovery2.vue";
=======
// import discovery from "../components/discovery/discovery.vue";
import DiscoveryTwo from "../components/discovery/discovery2.vue";
>>>>>>> d839d95df90d265404796baf946c8b31cca267a6
// import DiscoveryThree from "../components/discovery/discovery3.vue";
// import DiscoveryFour from "../components/discovery/discovery4.vue";
// import DiscoveryFive from "../components/discovery/discovery5.vue";
// import DiscoverySix from "../components/discovery/discovery6.vue";
// import DiscoverySeven from "../components/discovery/discovery7.vue";

// @ is an alias to /src
import sidebar from "../components/sidebar/sidebar.vue";

export default {
  name: "maindiscovery",
  components: {
    sidebar,
<<<<<<< HEAD
    discovery,
    // DiscoveryTwo,
=======
    // discovery,
    DiscoveryTwo,
>>>>>>> d839d95df90d265404796baf946c8b31cca267a6
    // DiscoveryThree,
    // DiscoveryFour,
    // DiscoveryFive,
    // DiscoverySix,
    // DiscoverySeven
  },
};
</script>
