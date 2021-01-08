<template>
    <div>
         <div class="hallOfFame flex border border-gray-300 border-solid ml-2">
                <div class="hallOfFame_left flex flex-col border-r border-gray-300 border-solid">
                    <div class="p-5 pb-20">
                        <h1 class="text-lg mb-2">LogicBoxes / OrderBox</h1>
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
            </div>
    </div>
</template>

<script>
export default {

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