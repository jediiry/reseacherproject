<template>
  <div class="grid grid-cols-7 mainfade">
    <sidebar></sidebar>
    <div class="col-start-2 col-span-11 main_content">
      <settings></settings>
    </div>
  </div>
</template>

<script>
import settings from "../components/settings/settings.vue";
// @ is an alias to /src
import Sidebar from "../components/sidebar/sidebar.vue";

export default {
  name: "mainsettings",
  components: {
    Sidebar,
    settings,
  },
};
</script>
