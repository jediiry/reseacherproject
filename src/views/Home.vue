<template>
  <div class="grid grid-cols-7 mainfade">
    <sidebar></sidebar>
    <div class="col-start-2 col-span-11 main_content">
      <dashboard></dashboard>
    </div>
  </div>
</template>

<script>
import dashboard from "../components/dashoard/dashboard.vue";
// @ is an alias to /src
import Sidebar from "../components/sidebar/sidebar.vue";

export default {
  name: "Home",
  components: {
    Sidebar,
    dashboard,
  },
};
</script>

<style>
@media only screen and (max-width: 75em) { /** 1200px / 16 */
  .main_content {
    grid-column-start: 1;
  }
}
</style>