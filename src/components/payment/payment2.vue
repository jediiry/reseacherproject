<template>
    <div>
        <mainheader></mainheader>
        <div class="w-full">
            <div class="w-4/5 p-5">   
                <div class="mb-32 mt-10">                
                    <h1 class="text-xl mb-6">Upcoming payment</h1>
                    <div class="flex items-center flex-col">
                        <img class="block" src="../../assets/icon/Frame.svg" alt="image">
                        <p class="text-xs text-gray-500 mt-10">You upcoming payment will appear here</p>
                    </div>
                </div>

                <div class="my-10">                
                    <h1 class="text-xl mb-6">Remitted payment</h1>
                    <div class="flex items-center flex-col">
                        <img class="block" src="../../assets/icon/Frame.svg" alt="image">
                        <p class="text-xs text-gray-500 mt-10">You upcoming payment will appear here</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import mainheader from "../header/header";

export default {
    name: 'payment2',
    components: {
        mainheader
    }
}
</script>

<style>

</style>