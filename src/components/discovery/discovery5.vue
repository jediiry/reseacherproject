<template>
  <div>
    <mainheader></mainheader>
    <div class="bg-light-gray pb-10">
      <div class="grid grid-cols-1 p-10">
        <div>
          <p class="greeting-title">Good Afternoon Lawal!</p>
        </div>
      </div>
    </div>

    <div class="pl-2 md:pr-5 lg:pr-16">
      <hall :submitButton="true" :imageButton="true"></hall>

      <div class="px-5 md:w-full lg:w-3/4">
        <div class="pt-5 mt-10">
          <!-- <div class="hallOfFame_tab flex flex-row mb-2">
                        <a href="" class="text-xl text-gray-900 mr-10">Program details</a>
                        <a href="" class="text-xl text-gray-900 mx-10 active_tab">Announcement <span class="pink">12</span></a>
                        <a href="" class="text-xl text-gray-900 mx-10">Hall of fame</a>
                    </div> -->
          <tab></tab>
        </div>

        <div class="p-4 rounded-lg border my-5">
          <h2 class="font-two mb-5">
            This program will not pay out monetary rewards only. Only points
            based rewards will be given.
          </h2>
          <span class="text-xs text-gray-500 font-light"
            >Published by Chris_Shah_Teklabspace 7 days ago</span
          >
        </div>

        <div class="p-4 rounded-lg border my-5">
          <h2 class="font-two mb-5">
            This program will not pay out monetary rewards only. Only points
            based rewards will be given.
          </h2>
          <span class="text-xs text-gray-500 font-light"
            >Published by Chris_Shah_Teklabspace 7 days ago</span
          >
        </div>

        <div class="p-4 rounded-lg border my-5">
          <h2 class="font-two mb-5">
            This program will not pay out monetary rewards only. Only points
            based rewards will be given.
          </h2>
          <span class="text-xs text-gray-500 font-light"
            >Published by Chris_Shah_Teklabspace 7 days ago</span
          >
        </div>

        <div class="p-4 rounded-lg border my-5">
          <h2 class="font-two mb-5">
            This program will not pay out monetary rewards only. Only points
            based rewards will be given.
          </h2>
          <span class="text-xs text-gray-500 font-light"
            >Published by Chris_Shah_Teklabspace 7 days ago</span
          >
        </div>

        <div class="p-4 rounded-lg border my-5">
          <h2 class="font-two mb-5">
            This program will not pay out monetary rewards only. Only points
            based rewards will be given.
          </h2>
          <span class="text-xs text-gray-500 font-light"
            >Published by Chris_Shah_Teklabspace 7 days ago</span
          >
        </div>

        <div class="p-4 rounded-lg border my-5">
          <h2 class="font-two mb-5">
            This program will not pay out monetary rewards only. Only points
            based rewards will be given.
          </h2>
          <span class="text-xs text-gray-500 font-light"
            >Published by Chris_Shah_Teklabspace 7 days ago</span
          >
        </div>

        <div class="p-4 rounded-lg border my-5">
          <h2 class="font-two mb-5">
            This program will not pay out monetary rewards only. Only points
            based rewards will be given.
          </h2>
          <span class="text-xs text-gray-500 font-light"
            >Published by Chris_Shah_Teklabspace 7 days ago</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mainheader from "../header/header";
import Hall from "@/components/hall/hall.vue";
import tab from "./tabcomponent";

export default {
  name: "discovery5",
  components: {
    mainheader,
    Hall,
    tab,
  },
};
</script>

<style>
.active_tab {
  border-bottom: 3px solid #df74fa;
}

@media only screen and (max-width: 44.69em) {
  /** 715px / 16 */
  .hallOfFame_tab a {
    font-size: 16px;
  }
}
</style>
