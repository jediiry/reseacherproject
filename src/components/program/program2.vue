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
                <a href="" class="text-lg text-gray-400 mx-10 px-3">Hangar</a>
                <a href="" class="text-lg text-gray-400 mx-10 px-3 active_tab">Hall of fame</a>
            </div>

            <div>
                <h1 class="mb-8 text-2xl">Hall of Fame</h1>

                <tableone/>
            </div>
        </div>
    </div> 
</template>

<script>
import mainheader from "../header/header";
import Hall from "@/components/hall/hall.vue";
import tableone from "@/components/tableone/tableone.vue";

export default {
    name: 'program2',
    components: {
        mainheader,
        Hall,
        tableone
    }
}
</script>

<style>

.active_tab{
    border-bottom: 3px solid #df74fa;
}
</style>