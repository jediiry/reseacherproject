<template>
    <div class="hallOfFame flex border border-gray-300 border-solid ml-2 mr-16">
        <div class="hallOfFame_left flex flex-col border-r border-gray-300 border-solid">
            <div class="p-5 pb-20">
                <h1 class="text-lg mb-2">LogicBoxes / OrderBox</h1>
                <span class="text-xs text-gray-400 block">OrderBox VDP</span>
                <div class="mt-7 mb-3">
                    <img  class="inline mr-2" src="../../assets/icon/points_icon.svg" alt=""> 
                    <!-- <span class="mr-3">Points</span>  -->
                    <span class="text-xs text-gray-400">Per vulnerability</span>
                </div>
                <div class="mb-1">
                    <img class="inline mr-2" src="../../assets/icon/habour_icon.svg" alt="">
                    <!-- <span>Partial safe harbour</span>  -->
                </div>
                <div>
                    <img class="inline mr-2" src="../../assets/icon/crow_icon.svg" alt="">
                    <!-- <span>Managed by Teklabspace</span>  -->
                </div>
            </div>
            <div v-if="submitButton" class="hallOfFame_footer border-gray-300 border-solid border-t flex justify-between p-4">
                <div class="hallOfFame_footer_box">
                    <button class="bg-green-900 text-white p-1 text-xs rounded">Submit Report</button>
                </div>
                <div class="hallOfFame_footer_box flex justify-end">
                    <img src="../../assets/icon/star_icon.svg" alt=""> 
                    <img class="inline mx-10" src="../../assets/icon/eye_icon.svg" alt=""> 
                </div>
            </div>
        </div>
        <div class="hallOfFame_right relative">
            <img class="absolute block top-1/2 left-1/2" src="../../assets/logo2.svg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'hall',
    props: ['submitButton', 'imageButton']
    
    
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

</style>