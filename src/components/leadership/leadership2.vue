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
        <div class="px-6">
            <div class="mb-8">
                <h1 class="text-lg mb-1">Leader board</h1>
                <div class="flex justify-between">
                    <div>
                        <p class="text-xs mb-2">Total points from programs.</p>
                        <span class="pink">PIP2P3P4</span>
                    </div>
                    <div class="flex">
                        <button class="bg-green-900 px-6 text-sm text-white border-none rounded-md mr-3">Alltimes</button>
                    </div>
                </div>
            </div>
            
            <tableone/>
        </div>
    </div>
</template>

<script>
import tableone from "@/components/tableone/tableone.vue";
import mainheader from "../header/header";

export default {
    name: 'leadership2',
    components: {
        tableone,
        mainheader
    }
}
</script>

<style>

</style>