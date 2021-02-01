<template>
  <div>
    <mainheader></mainheader>
    <div class="bg-light-gray pb-10">
      <div class="grid grid-cols-1 p-10">
        <!-- <div>
          <p class="greeting-title">Good Afternoon Lawal!</p>
        </div> -->
      </div>
    </div>

    <hall :submitButton="true" :imageButton="true"></hall>

    <!-- <div class="hallOfFame flex border border-gray-300 border-solid ml-2 mr-16">
            <div class="hallOfFame_left flex flex-col border-r border-gray-300 border-solid">
                <div class="p-5 pb-20">
                    <h1 class="font-title mb-2">LogicBoxes / OrderBox</h1>
                    <span class="text-xs text-gray-400 block">OrderBox VDP</span>
                    <div class="mt-7 mb-3">
                        <img  class="inline mr-2" src="../../assets/icon/shop.svg" alt=""> 
                        <span class="mr-3">Points</span> 
                        <span class="text-xs text-gray-400">Per vulnerability</span>
                    </div>
                    <div class="mb-1">
                        <img class="inline mr-2" src="../../assets/icon/circle.svg" alt="">
                        <span>Partial safe harbour</span> 
                    </div>
                    <div>
                        <img class="inline mr-2" src="../../assets/icon/circle.svg" alt="">
                        <span>Managed by Teklabspace</span> 
                    </div>
                </div>
                <div class="hallOfFame_footer border-gray-300 border-solid border-t flex justify-between p-3">
                    <div class="hallOfFame_footer_box">
                        <button class="bg-green-900 text-white p-1 text-sm rounded">Submit Report</button>
                    </div>
                    <div class="hallOfFame_footer_box flex justify-end">
                        <img src="../../assets/icon/shop.svg" alt=""> 
                        <img class="inline mx-10" src="../../assets/icon/shop.svg" alt=""> 
                    </div>
                </div>
            </div>
            <div class="hallOfFame_right relative">
                <img class="absolute block top-1/2 left-1/2" src="./../../assets//teklabspcelogo.png" alt="">
            </div>
        </div> -->

    <div class="p-4">
      <div class="hallOfFame_tab flex flex-row mb-10">
        <a href="" class="font-title text-gray-400 mr-10 px-5 active_tab"
          >Program details</a
        >
        <a href="" class="font-title text-gray-400 mx-10 px-5">Hangar</a>
        <a href="" class="font-title text-gray-400 mx-10 px-5">Hall of fame</a>
      </div>

      <div>
        <h1 class="mb-10 pb-6 text-2xl">Hall of Fame</h1>
      </div>
    </div>
  </div>
</template>

<script>
import mainheader from "../header/header";
import Hall from "@/components/hall/hall.vue";

export default {
  name: "noSubmission",
  components: {
    mainheader,
    Hall,
  },
};
</script>

<style></style>
