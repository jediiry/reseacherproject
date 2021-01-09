<template>
    <div class="min-h-screen bg-light-gray">
        <mainheader></mainheader>
        <div class="px-10">
            <div class="grid grid-cols-1 py-10">
                <div>
                    <p class="greeting-title">Hi Lawal!</p>
                </div>
            </div>
            <div class="bg-white p-6 pb-0 shadow-md divide-gray-100 divide-y">
                <div>
                    <div class="grid grid-cols-2">
                        <div>
                            <div class="settingtab">
                                <div class="item">
                                    Profile
                                </div>
                                <div class="item">                                    
                                    Security
                                </div>
                                <div class="item">
                                    Payment
                                </div>
                                <div class="item active">
                                    Notification
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-end">
                                <button type="button" @click="$m.hidemodal('hours')"
                                    class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                    Close
                                </button>
                                <button type="button"
                                    class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                                    Update Setting
                                </button>

                            </div>
                        </div>
                    </div>
                <h1 class="py-5 px-6">Notifications</h1>
                </div>

                <div class="border-b px-6 pt-6 pb-5">
                    <h2 class="mb-2">Security treat</h2>
                    <div class="flex justify-between">
                        <p class="text-sm text-gray-500">
                            Receive a notification for every successful payment
                        </p>
                        <div>
                            <label for="toogleA" class="flex items-center cursor-pointer">
                                <!-- toggle -->
                                <div class="relative">
                                <!-- input -->
                                <input id="toogleA" type="checkbox" class="hidden" />
                                <!-- line -->
                                <div
                                    class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
                                ></div>
                                <!-- dot -->
                                <div
                                    class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
                                ></div>
                                </div>
                                
                            </label>                            
                        </div>
                    </div>
                </div>

                <div class="border-b px-6 pt-6 pb-5">
                    <h2 class="mb-2">Security treat</h2>
                    <div class="flex justify-between">
                        <p class="text-sm text-gray-500">
                            Receive a notification for every successful payment
                        </p>
                        <div>
                            <label for="toogleA" class="flex items-center cursor-pointer">
                                <!-- toggle -->
                                <div class="relative">
                                <!-- input -->
                                <input id="toogleA" type="checkbox" class="hidden" />
                                <!-- line -->
                                <div
                                    class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
                                ></div>
                                <!-- dot -->
                                <div
                                    class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
                                ></div>
                                </div>
                                
                            </label>                            
                        </div>
                    </div>
                </div>

                <div class="border-b px-6 pt-6 pb-5">
                    <h2 class="mb-2">Security treat</h2>
                    <div class="flex justify-between">
                        <p class="text-sm text-gray-500">
                            Receive a notification for every successful payment
                        </p>
                        <div>
                            <label for="toogleAB" class="flex items-center cursor-pointer">
                                <!-- toggle -->
                                <div class="relative">
                                <!-- input -->
                                <input id="toogleAB" type="checkbox" class="hidden" />
                                <!-- line -->
                                <div
                                    class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
                                ></div>
                                <!-- dot -->
                                <div
                                    class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
                                ></div>
                                </div>
                                
                            </label>                            
                        </div>
                    </div>
                </div>

                <div class="border-b px-6 pt-6 pb-5">
                    <h2 class="mb-2">Security treat</h2>
                    <div class="flex justify-between">
                        <p class="text-sm text-gray-500">
                            Receive a notification for every successful payment
                        </p>
                        <div>
                            <label for="toogleAC" class="flex items-center cursor-pointer">
                                <!-- toggle -->
                                <div class="relative">
                                <!-- input -->
                                <input id="toogleAC" type="checkbox" class="hidden" />
                                <!-- line -->
                                <div
                                    class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
                                ></div>
                                <!-- dot -->
                                <div
                                    class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
                                ></div>
                                </div>
                                
                            </label>                            
                        </div>
                    </div>
                </div>

                <div class="border-b px-6 pt-6 pb-5">
                    <h2 class="mb-2">Security treat</h2>
                    <div class="flex justify-between">
                        <p class="text-sm text-gray-500">
                            Receive a notification for every successful payment
                        </p>
                        <div>
                            <label for="toogleC" class="flex items-center cursor-pointer">
                                <!-- toggle -->
                                <div class="relative">
                                <!-- input -->
                                <input id="toogleC" type="checkbox" class="hidden" />
                                <!-- line -->
                                <div
                                    class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
                                ></div>
                                <!-- dot -->
                                <div
                                    class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
                                ></div>
                                </div>
                                
                            </label>                            
                        </div>
                    </div>
                </div>

                <div class="border-b px-6 pt-6 pb-5">
                    <h2 class="mb-2">Security treat</h2>
                    <div class="flex justify-between">
                        <p class="text-sm text-gray-500">
                            Receive a notification for every successful payment
                        </p>
                        <div>
                            <label for="toogleC" class="flex items-center cursor-pointer">
                                <!-- toggle -->
                                <div class="relative">
                                <!-- input -->
                                <input id="toogleC" type="checkbox" class="hidden" />
                                <!-- line -->
                                <div
                                    class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
                                ></div>
                                <!-- dot -->
                                <div
                                    class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
                                ></div>
                                </div>
                                
                            </label>                            
                        </div>
                    </div>
                </div>


                
                
            </div>
        </div>
    </div>
</template>

<script>
import mainheader from "../header/header";
export default {
  name: "settings2",
  components: {
    mainheader,
  },
};
</script>

<style>
.bg-pink {
    background: #DA04F2;
}

/* #DA04F2 #de3cf0*/
.toggle__dot {
    top: -.25rem;
    left: -.25rem;
    transition: all 0.3s ease-in-out;
}
  
input:checked ~ .toggle__dot {
    transform: translateX(100%);
    background: linear-gradient(45deg, #de3cf0, #DA04F2);
}

input:checked ~ .toggle__line {
    background: #DA04F2;
}
 
</style>
