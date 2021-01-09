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

        <div class="pl-2 pr-16">

            <div class="customBox flex border border-gray-300 border-solid ml-2 rounded">
                <div class="customBox_left flex flex-col border-r border-gray-300 border-solid">
                    <div class="p-5 pb-20">
                        <h1 class="text-lg mb-2">Bigbank</h1>
                        <span class="text-xs text-gray-400 block">Help Secure Bigbank!</span>
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
                    <div class="customBox_footer border-gray-300 border-solid border-t flex justify-between p-3">
                        <div class="customBox_footer_box">
                            <button class="bg-green-900 text-white p-1 text-sm rounded">Submit Report</button>
                        </div>
                        <div class="customBox_footer_box flex justify-end">
                            <img src="../../assets/icon/shop.svg" alt=""> 
                            <img class="inline mx-10" src="../../assets/icon/shop.svg" alt=""> 
                        </div>
                    </div>
                </div>
                <div class="customBox_right relative">
                    <img class="absolute block top-1/2 left-1/2" src="./../../assets//teklabspcelogo.png" alt="">
                    <button class="bg-indigo-900 text-white p-1 text-sm rounded absolute right-10 top-10">Submit Report</button>
                </div>
            </div>

            <div class="px-5 w-3/4">
                <div class="pt-5 mt-10">
                    <div class="hallOfFame_tab flex flex-row mb-2">
                        <a href="" class="text-xl text-gray-900 mr-10">Program details</a>
                        <a href="" class="text-xl text-gray-900 mx-10 active_tab">Announcement <span class="pink">12</span></a>
                        <a href="" class="text-xl text-gray-900 mx-10">Hall of fame</a>
                    </div>
                </div>

                <div class="p-4 rounded-lg border my-5">
                    <h2 class="text-base mb-5">This program will not pay out monetary rewards only. Only points based rewards will be given.</h2>
                    <span class="text-xs text-gray-500 font-light">Published by Chris_Shah_Teklabspace 7 days ago</span>
                </div>

                <div class="p-4 rounded-lg border my-5">
                    <h2 class="text-base mb-5">This program will not pay out monetary rewards only. Only points based rewards will be given.</h2>
                    <span class="text-xs text-gray-500 font-light">Published by Chris_Shah_Teklabspace 7 days ago</span>
                </div>

                <div class="p-4 rounded-lg border my-5">
                    <h2 class="text-base mb-5">This program will not pay out monetary rewards only. Only points based rewards will be given.</h2>
                    <span class="text-xs text-gray-500 font-light">Published by Chris_Shah_Teklabspace 7 days ago</span>
                </div>

                <div class="p-4 rounded-lg border my-5">
                    <h2 class="text-base mb-5">This program will not pay out monetary rewards only. Only points based rewards will be given.</h2>
                    <span class="text-xs text-gray-500 font-light">Published by Chris_Shah_Teklabspace 7 days ago</span>
                </div>

                <div class="p-4 rounded-lg border my-5">
                    <h2 class="text-base mb-5">This program will not pay out monetary rewards only. Only points based rewards will be given.</h2>
                    <span class="text-xs text-gray-500 font-light">Published by Chris_Shah_Teklabspace 7 days ago</span>
                </div>

                <div class="p-4 rounded-lg border my-5">
                    <h2 class="text-base mb-5">This program will not pay out monetary rewards only. Only points based rewards will be given.</h2>
                    <span class="text-xs text-gray-500 font-light">Published by Chris_Shah_Teklabspace 7 days ago</span>
                </div>

                <div class="p-4 rounded-lg border my-5">
                    <h2 class="text-base mb-5">This program will not pay out monetary rewards only. Only points based rewards will be given.</h2>
                    <span class="text-xs text-gray-500 font-light">Published by Chris_Shah_Teklabspace 7 days ago</span>
                </div>
            </div>

        </div>
  </div>
</template>

<script>
import mainheader from "../header/header";

export default {
    name: 'discovery5',
    components: {
        mainheader
    }
}
</script>

<style>
.customBox_left{
    flex: 2;
}

.customBox_right{
    flex: 1;
}

.customBox_right img {
    transform: translate(-50%, -50%);
}

.active_tab{
    border-bottom: 3px solid #df74fa;
}
</style>