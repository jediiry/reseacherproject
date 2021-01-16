<template>
  <div class="hallOfFame_tab flex flex-row mb-10">
    <a href="" class="font-title text-gray-400 mr-10 lg:ml-10">{{
      item1 || "Program details"
    }}</a>
    <a href="" class="font-title text-gray-400 mr-10">{{
      item2 || "Announcement"
    }}</a>
    <a href="" class="font-title text-gray-400 active_tab">{{
      item3 || "Hall of fame"
    }}</a>
  </div>
</template>

<script>
export default {
  name: "tabcomponent",
  props: ["item1", "item2", "item3"],
};
</script>

<style>
@media only screen and (max-width: 44.69em) {
  /** 715px / 16 */
  .hallOfFame_tab a {
    font-size: 14px;
  }
}
</style>
