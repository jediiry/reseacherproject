<template>
  <div class="grid grid-cols-7 mainfade">
    <sidebar></sidebar>
    <div class="col-start-2 col-span-11">
      <!-- <crowdstream></crowdstream> -->
      <crowdstream-two></crowdstream-two>

    </div>
  </div>
</template>

<script>

// import crowdstream from "../components/crowdstream/crowdstream.vue";
import crowdstreamTwo from "../components/crowdstream/crowdstream2.vue";

// @ is an alias to /src
import sidebar from "../components/sidebar/sidebar.vue";

export default {
  name: "maincrowdstream",
  components: {
    sidebar,
    // crowdstream,
    crowdstreamTwo,

  },
};
</script>
