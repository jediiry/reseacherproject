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
            <hall></hall>
            
            <div class="pl-5 pt-5 mt-10">
                <div class="hallOfFame_tab flex flex-row mb-2">
                    <a href="" class="text-xl text-gray-900 mr-10 px-2">Program details</a>
                    <a href="" class="text-xl text-gray-900 mx-10 px-2 active_tab">Hanger</a>
                    <a href="" class="text-xl text-gray-900 mx-10 px-2">Hall of fame</a>
                </div>

                <div class="bg-white shadow-md rounded-md">
                    <div class="grid grid-cols-3 bg-gray-100 justify-center mb-8">
                        <div class="text-center cursor-pointer p-5 font-bold" :class="{'bg-white': reward, 'pink' : reward}"
                            @click="reward = true">
                            All Submission
                        </div>
                        <div class="text-center cursor-pointer p-5 font-bold"
                            :class="{'bg-white': !reward, 'pink' : !reward}" @click="reward = false">
                            Disclose Report
                        </div>
                    </div>
                    <div v-if="reward">
                        <transition name="fade">
                            <div class="fade">
                                
                                <noitem message="There are no accepted or disclosed submissions on this program. Recently accepted or disclosed submissions will be displayed here." title=""></noitem>
                            </div>
                        </transition>
                    </div>
                    <div class="px-10 fade" v-else></div>
                </div>
            </div>            
        </div>

    </div> 
</template>

<script>
import Hall from "@/components/hall/hall.vue";
import noitem from "../noitem/noitem";

export default {
    name: 'programDetails',
    data(){
        return {
            submission: true,
            report: false,

            currentTask: "all",
            currentActivity: "all",
            currentsession: true,
            notify: false,
            reward: true,
        }
    },
    components: {
        Hall,
        noitem
    },

}
</script>

<style>

</style>