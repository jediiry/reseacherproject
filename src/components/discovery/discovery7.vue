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

        <hall :submitButton="true" :imageButton="true"></hall>

        <div class="p-4">
            <div class="hallOfFame_tab flex flex-row mb-10">
                <a href="" class="text-lg text-gray-400 mr-10 px-3">Program details</a>
                <a href="" class="text-lg text-gray-400 mx-10 px-3 active_tab">Announcement <span class="pink"> 12</span></a>
                <a href="" class="text-lg text-gray-400 mx-10 px-3">Hall of fame</a>
            </div>

            <div class="border rounded-md">
                <h2 class="p-4 border-b text-lg">This program will pay out momentary rewards. Only points-based rewards will be given.</h2>
                <div class="px-4 pb-8 border-b">
                    <p class="text-xs pt-10 text-gray-500">Unfortunately, as of December 21, 2020 this program will not pay out monetary rewards. Only points-based rewards will be given.</p>
                    <p class="text-xs pt-4 text-gray-500">Note: any valid findings against the in-scope targets prior to this adjustment will still be rewarded as per the program brief/gidelines at the time of the submission.</p>
                    <p class="text-xs pt-4 text-gray-500">If you have any question, please reach out to <span class="pink">support@teklabspace.com</span></p>
                </div>
                <div class="flex px-4 pb-10 pt-6 items-center">
                    <img class="avatar rounded-full" src="./../../assets/user.svg" alt="">
                    <div class="flex flex-col ml-4">
                        <h2 class="text-gray-500">Ayoleyi Lurogho</h2>    
                        <span class="text-gray-500 text-sm">7 days ago</span>    
                    </div>                    
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
import Hall from "@/components/hall/hall.vue";
import mainheader from "../header/header";

export default {
    name: 'discovery6',
    components: {
        mainheader,
        Hall
    },
}
</script>

<style>
.hallOfFame_left{
    flex: 2;
}

.hallOfFame_right{
    flex: 1;
}

.hallOfFame_right img {
    transform: translate(-50%, -50%);
}

.hallOfFame_footer_box {
    flex: 1;
}



.active_tab{
    border-bottom: 3px solid #df74fa;
    color: #000;
}
</style>