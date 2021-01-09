<template>
    <div>
        <mainheader></mainheader>
        <div class="p-10">
            <h1 class="text-lg mb-2">CrowdStream</h1>
            <p class="text-sm text-gray-500 mb-10">CrowdStream is a showcase of accepted and disclosed submissions on participating programs.</p>

            <div class="bg-white rounded-md">
                <div class="grid grid-cols-12 bg-gray-100 justify-center mb-8">
                    <div class="text-center cursor-pointer p-5 font-bold col-span-4" :class="{'bg-white': submission, 'pink' : submission}"
                        @click="submission = true">
                        All Submission
                    </div>
                    <div class="text-center cursor-pointer p-5 font-bold col-span-8"
                        :class="{'bg-white': !submission, 'pink' : !submission}" @click="submission = false">
                        Disclose Report
                    </div>
                </div>
                <div v-if="submission">
                    <transition name="fade">
                        <div class="my-10 fade">
                            <div class="grid grid-cols-7 my-8 border-2 border-gray-200 p-8 rounded-md">
                                <div>
                                    <img src="../../assets/icon/pininterest.svg" class="h-32 " alt="">
                                </div>
                                <div class="col-span-6">
                                    <div class="flex flex-wrap justify-between">
                                        <div class="w-100">
                                            <p class="text-xl mb-3">Disclosed report: [ExpressVPN Router] Integer Buffer Overflow: Server
                                                Info
                                                Disclosure When
                                                Router's Nginx Server used as Reverse Proxy Server</p>
                                            <p class="text-sm text-gray-500">By jaisharmaProgram <span class="pink">ExpressVPN</span> Priority P3</p>

                                        </div>
                                        <div class="w-full mt-10">
                                            <div>
                                                <span class="text-lg">Disclosed on 24 Nov 2020</span>                                                
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>   

                            <div class="grid grid-cols-7 my-8 border-2 border-gray-200 p-8 rounded-md">
                                <div>
                                    <img src="../../assets/icon/pininterest.svg" class="h-32 " alt="">
                                </div>
                                <div class="col-span-6">
                                    <div class="flex flex-wrap justify-between">
                                        <div class="w-100">
                                            <p class="text-xl mb-3">Disclosed report: [ExpressVPN Router] Integer Buffer Overflow: Server
                                                Info
                                                Disclosure When
                                                Router's Nginx Server used as Reverse Proxy Server</p>
                                            <p class="text-sm text-gray-500">By jaisharmaProgram <span class="pink">ExpressVPN</span> Priority P3</p>

                                        </div>
                                        <div class="w-full mt-10">
                                            <div>
                                                <span class="text-lg">Disclosed on 24 Nov 2020</span>                                                
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>   

                            <div class="grid grid-cols-7 my-8 border-2 border-gray-200 p-8 rounded-md">
                                <div>
                                    <img src="../../assets/icon/pininterest.svg" class="h-32 " alt="">
                                </div>
                                <div class="col-span-6">
                                    <div class="flex flex-wrap justify-between">
                                        <div class="w-100">
                                            <p class="text-xl mb-3">Disclosed report: [ExpressVPN Router] Integer Buffer Overflow: Server
                                                Info
                                                Disclosure When
                                                Router's Nginx Server used as Reverse Proxy Server</p>
                                            <p class="text-sm text-gray-500">By jaisharmaProgram <span class="pink">ExpressVPN</span> Priority P3</p>

                                        </div>
                                        <div class="w-full mt-10">
                                            <div>
                                                <span class="text-lg">Disclosed on 24 Nov 2020</span>                                                
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>   

                            <div class="grid grid-cols-7 my-8 border-2 border-gray-200 p-8 rounded-md">
                                <div>
                                    <img src="../../assets/icon/pininterest.svg" class="h-32 " alt="">
                                </div>
                                <div class="col-span-6">
                                    <div class="flex flex-wrap justify-between">
                                        <div class="w-100">
                                            <p class="text-xl mb-3">Disclosed report: [ExpressVPN Router] Integer Buffer Overflow: Server
                                                Info
                                                Disclosure When
                                                Router's Nginx Server used as Reverse Proxy Server</p>
                                            <p class="text-sm text-gray-500">By jaisharmaProgram <span class="pink">ExpressVPN</span> Priority P3</p>

                                        </div>
                                        <div class="w-full mt-10">
                                            <div>
                                                <span class="text-lg">Disclosed on 24 Nov 2020</span>                                                
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>   

                            <div class="grid grid-cols-7 my-8 border-2 border-gray-200 p-8 rounded-md">
                                <div>
                                    <img src="../../assets/icon/pininterest.svg" class="h-32 " alt="">
                                </div>
                                <div class="col-span-6">
                                    <div class="flex flex-wrap justify-between">
                                        <div class="w-100">
                                            <p class="text-xl mb-3">Disclosed report: [ExpressVPN Router] Integer Buffer Overflow: Server
                                                Info
                                                Disclosure When
                                                Router's Nginx Server used as Reverse Proxy Server</p>
                                            <p class="text-sm text-gray-500">By jaisharmaProgram <span class="pink">ExpressVPN</span> Priority P3</p>

                                        </div>
                                        <div class="w-full mt-10">
                                            <div>
                                                <span class="text-lg">Disclosed on 24 Nov 2020</span>                                                
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>                                
                        </div>
                    </transition>
                </div>
                <div class="px-10 fade" v-else>
                    <transition name="fade">
                        <div class="grid grid-cols-7 my-8 border-2 border-gray-200 p-8 rounded-md">
                                <div>
                                    <img src="../../assets/icon/pininterest.svg" class="h-32 " alt="">
                                </div>
                                <div class="col-span-6">
                                    <div class="flex flex-wrap justify-between">
                                        <div class="w-100">
                                            <p class="text-xl mb-3">Disclosed report: [ExpressVPN Router] Integer Buffer Overflow: Server
                                                Info
                                                Disclosure When
                                                Router's Nginx Server used as Reverse Proxy Server</p>
                                            <p class="text-sm text-gray-500">By jaisharmaProgram <span class="pink">ExpressVPN</span> Priority P3</p>

                                        </div>
                                        <div class="w-full mt-10">
                                            <div>
                                                <span class="text-lg">Disclosed on 24 Nov 2020</span>                                                
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div> 
                    </transition>
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
import mainheader from "../header/header";

export default {
    name: 'crowdstream',
    data(){
        return {
            submission: true,
            report: false,
        }
    },
    components:{
        mainheader
    }
}
</script>

<style>

</style>