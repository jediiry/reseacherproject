<template>
  <div class="fade bg-light-gray">
    <mainheader></mainheader>
    <div class=" pb-5">
      <div class="grid grid-cols-1 p-10">
        <div>
          <p class="greeting-title">Good Afternoon Lawal!</p>
        </div>
      </div>
    </div>

    <div class="px-10 pb-5">
      <span class="text-2xl pink mr-6">Features</span>
      <span class="text-2xl">Just for you</span>
    </div>

    <div class="px-10 mb-9">
      <div class="flex justify-between mb-6">
        <h1 class="text-xl">Staff Picks</h1>
        <p class="pink">See More</p>
      </div>

      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
        <div class="col-span-1 flex flex-col">
          <div class="custom_card h-full relative">
            <img src="../../assets/odin.jpg" alt="Avatar" />
            <div class="px-3 pt-4 pb-2">
              <h4 class="text-sm mb-2"><b>Bigbank</b></h4>
              <p class="text-xs text-gray-500 mb-10">Help Secure Bigbank!</p>
              <div class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3">
                <p class="text-xs"><span class="pink"></span></p>
                <div>
                  <img class="inline" src="../../assets/icon/discovery_icon2.svg" alt="" />
                  <div class="px-10 pb-10">
                    <span
                      class="text-2xl mr-6 cursor-pointer"
                      :class="{ pink: showtab == 'features' }"
                      @click.prevent="showtab = 'features'"
                      >Features</span>
                    <span
                      class="text-2xl cursor-pointer"
                      :class="{ pink: showtab != 'features' }"
                      @click.prevent="showtab = 'featuress'"
                      >Just for you</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




    <div class="fade" v-if="showtab == 'features'">
      <div class="px-10 mb-9">
        <div class="flex justify-between mb-6">
          <h1 class="text-xl">Staff Picks</h1>
          <p class="text-indigo-600">See More</p>
        </div>

        <div class="grid grid-cols-6 gap-8">
          <div class="col-span-1 flex flex-col">
            <div class="custom_card h-full relative">
              <img src="../../assets/BG.png" class="shadow-md" alt="Avatar" />
              <div class="px-3 pt-4 pb-2">
                <h4 class="text-sm mb-2"><b>Bigbank</b></h4>
                <p class="text-xs text-gray-500 mb-10">Help Secure Bigbank!</p>
                <div class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3">
                  <p class="text-xs"><span class="text-indigo-500"></span></p>
                  <div>
                    <img
                      class="inline mx-1"
                      src="../../assets/icon/circlemain.svg"
                      alt=""
                    />
                    <img
                      class="inline"
                      src="../../assets/icon/circlemain.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="col-span-1 flex flex-col">
          <div class="custom_card h-full relative">
            <img src="../../assets/odin.jpg" alt="Avatar" />
            <div class="px-3 pt-4 pb-2">
              <h4 class="text-sm mb-2"><b>Kenna Security</b></h4>
              <p class="text-xs text-gray-500 mb-10">A Hosted Vulnerability Intelligence Platform</p>
              <div class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3">
                <p class="text-xs">$100 - <span class="pink">$25,000</span></p>
                <div>
                  <img class="inline" src="../../assets/icon/discovery_icon2.svg" alt="" />
                  <div class="col-span-1 flex flex-col">
                    <div class="custom_card h-full relative">
                      <img src="../../assets/BG2.png" class="shadow-md" alt="Avatar" />
                      <div class="px-3 pt-4 pb-2">
                        <h4 class="text-sm mb-2"><b>Kenna Security</b></h4>
                        <p class="text-xs text-gray-500 mb-10">A Hosted Vulnerability Intelligence Platform</p>
                        <div class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3">
                          <p class="text-xs">$100 - <span class="text-indigo-500">$25,000</span></p>
                          <div>
                            <img
                              class="inline mx-1"
                              src="../../assets/icon/circlemain.svg"
                              alt=""
                            />
                            <img
                              class="inline"
                              src="../../assets/icon/circlemain.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="fade" v-else>
      <div class="px-10 mb-9">
        <div class="flex justify-between mb-6">
          <h1 class="text-xl">Expert Needed</h1>
          <p class="text-indigo-600">See More</p>
        </div>

        <div class="col-span-1 flex flex-col">
          <div class="custom_card h-full relative">
            <img src="../../assets/odin.jpg" alt="Avatar" />
            <div class="px-3 pt-4 pb-2">
              <h4 class="text-sm mb-2"><b>Kenna Security</b></h4>
              <p class="text-xs text-gray-500 mb-10">
                A Hosted Vulnerability Intelligence Platform
              </p>
              <div
                class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3"
              >
                <p class="text-xs">$100 - $4,500</p>
                <div>
                  <img class="inline" src="../../assets/icon/discovery_icon2.svg" alt="" />
        <div class="grid grid-cols-6 gap-8">
          <div class="col-span-1 flex flex-col">
            <div class="custom_card h-full relative">
              <img
                src="../../assets/BG.png"
                class="w-full shadow-md"
                alt="Avatar"
              />
              <div class="px-3 pt-4 pb-2">
                <h4 class="text-sm mb-2"><b>Bigbank</b></h4>
                <p class="text-xs text-gray-500 mb-10">Help Secure Bigbank!</p>
                <div
                  class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3"
                >
                  <p class="text-xs"><span class="text-indigo-500"></span></p>
                  <div>
                    <img
                      class="inline mx-1"
                      src="../../assets/icon/circlemain.svg"
                      alt=""
                    />
                    <img
                      class="inline"
                      src="../../assets/icon/circlemain.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        <div class="col-span-1 flex flex-col">
          <div class="custom_card h-full relative">
            <img src="../../assets/odin.jpg" alt="Avatar" />
            <div class="px-3 pt-4 pb-2">
              <h4 class="text-sm mb-2"><b>Kenna Security</b></h4>
              <p class="text-xs text-gray-500 mb-10">
                A Hosted Vulnerability Intelligence Platform
              </p>
              <div
                class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3"
              >
                <p class="text-xs">$100 - $4,500</p>
                <div>
                  <img class="inline" src="../../assets/icon/discovery_icon2.svg" alt="" />
          <div class="col-span-1 flex flex-col">
            <div class="custom_card h-full relative">
              <img src="../../assets/BG2.png" class="shadow-md" alt="Avatar" />
              <div class="px-3 pt-4 pb-2">
                <h4 class="text-sm mb-2"><b>Kenna Security</b></h4>
                <p class="text-xs text-gray-500 mb-10">
                  A Hosted Vulnerability Intelligence Platform
                </p>
                <div
                  class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3"
                >
                  <p class="text-xs">
                    $100 - <span class="text-indigo-500">$25,000</span>
                  </p>
                  <div>
                    <img
                      class="inline mx-1"
                      src="../../assets/icon/circlemain.svg"
                      alt=""
                    />
                    <img
                      class="inline"
                      src="../../assets/icon/circlemain.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div class="col-span-1 flex flex-col">
          <div class="custom_card h-full relative">
            <img src="../../assets/odin.jpg" alt="Avatar" />
            <div class="px-3 pt-4 pb-2">
              <h4 class="text-sm mb-2"><b>Kenna Security</b></h4>
              <p class="text-xs text-gray-500 mb-10">
                A Hosted Vulnerability Intelligence Platform
              </p>
              <div
                class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3"
              >
                <p class="text-xs">$100 - $4,500</p>
                <div>
                  <img class="inline" src="../../assets/icon/discovery_icon2.svg" alt="" />
      <div class="px-10 mb-9">
        <div class="flex justify-between mb-6">
          <h1 class="text-xl">Try something new</h1>
          <p class="text-indigo-600">See More</p>
        </div>

        <div class="grid grid-cols-6 gap-8">
          <div class="col-span-1 flex flex-col">
            <div class="custom_card h-full relative">
              <img src="../../assets/BG.png" class="shadow-md" alt="Avatar" />
              <div class="px-3 pt-4 pb-2">
                <h4 class="text-sm mb-2"><b>Bigbank</b></h4>
                <p class="text-xs text-gray-500 mb-10">Help Secure Bigbank!</p>
                <div
                  class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3"
                >
                  <p class="text-xs"><span class="text-indigo-500"></span></p>
                  <div>
                    <img
                      class="inline mx-1"
                      src="../../assets/icon/circlemain.svg"
                      alt=""
                    />
                    <img
                      class="inline"
                      src="../../assets/icon/circlemain.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-1 flex flex-col">
            <div class="custom_card h-full relative">
              <img src="../../assets/BG2.png" class="shadow-md" alt="Avatar" />
              <div class="px-3 pt-4 pb-2">
                <h4 class="text-sm mb-2"><b>Kenna Security</b></h4>
                <p class="text-xs text-gray-500 mb-10">
                  A Hosted Vulnerability Intelligence Platform
                </p>
                <div
                  class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3"
                >
                  <p class="text-xs"><span class="text-indigo-500"></span></p>
                  <div>
                    <img
                      class="inline mx-1"
                      src="../../assets/icon/circlemain.svg"
                      alt=""
                    />
                    <img
                      class="inline"
                      src="../../assets/icon/circlemain.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-1 flex flex-col">
            <div class="custom_card h-full relative">
              <img src="../../assets/BG3.jpg" class="shadow-md" alt="Avatar" />
              <div class="px-3 pt-4 pb-2">
                <h4 class="text-sm mb-2"><b>Upwork</b></h4>
                <p class="text-xs text-gray-500 mb-10">
                  Hire Freelancers & Get Freelance Jobs Online
                </p>
                <div
                  class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3"
                >
                  <p class="text-xs"><span class="text-indigo-500"></span></p>
                  <div>
                    <img
                      class="inline mx-1"
                      src="../../assets/icon/circlemain.svg"
                      alt=""
                    />
                    <img
                      class="inline"
                      src="../../assets/icon/circlemain.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-1 flex flex-col">
            <div class="custom_card h-full relative">
              <img src="../../assets/BG4.jpg" class="shadow-md" alt="Avatar" />
              <div class="px-3 pt-4 pb-2">
                <h4 class="text-sm mb-2"><b>Cloudinary</b></h4>
                <p class="text-xs text-gray-500 mb-10">
                  Cloud image & video upload, storage, management & CDN
                </p>
                <div
                  class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3"
                >
                  <p class="text-xs"><span class="text-indigo-500"></span></p>
                  <div>
                    <img
                      class="inline mx-1"
                      src="../../assets/icon/circlemain.svg"
                      alt=""
                    />
                    <img
                      class="inline"
                      src="../../assets/icon/circlemain.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-1 flex flex-col">
            <div class="custom_card h-full relative">
              <img src="../../assets/BG4.jpg" class="shadow-md" alt="Avatar" />
              <div class="px-3 pt-4 pb-2">
                <h4 class="text-sm mb-2"><b>Okta</b></h4>
                <p class="text-xs text-gray-500 mb-10">
                  Cloud Identity and Mobility Management Service
                </p>
                <div
                  class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3"
                >
                  <p class="text-xs"><span class="text-indigo-500"></span></p>
                  <div>
                    <img
                      class="inline mx-1"
                      src="../../assets/icon/circlemain.svg"
                      alt=""
                    />
                    <img
                      class="inline"
                      src="../../assets/icon/circlemain.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-1 flex flex-col">
            <div class="custom_card h-full relative">
              <img src="../../assets/BG4.jpg" class="shadow-md" alt="Avatar" />
              <div class="px-3 pt-4 pb-2">
                <h4 class="text-sm mb-2"><b>Canva</b></h4>
                <p class="text-xs text-gray-500 mb-10">
                  Design Anything. Publish Anywhere.
                </p>
                <div
                  class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3"
                >
                  <p class="text-xs"><span class="text-indigo-500"></span></p>
                  <div>
                    <img
                      class="inline mx-1"
                      src="../../assets/icon/circlemain.svg"
                      alt=""
                    />
                    <img
                      class="inline"
                      src="../../assets/icon/circlemain.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="px-10 mb-9">
        <div class="mb-6">
          <h1 class="text-xl">Looking for more</h1>
        </div>

        <div class="w-full my-10">
          <div class="mx-auto w-10/12 relative border rounded h-72">
            <div class="center_item absolute w-3/4 text-center">
              <p class="text-sm mb-4">Connect your github account</p>
              <span class="text-sm text-gray-500 mb-4"
                >Connect to your profileto recieve program recommendations based
                on your skills.</span
              >
                <p class="text-xs">$100 - $4,500</p>
                <div>
                  <img class="inline" src="../../assets/icon/discovery_icon2.svg" alt="" />
                </div>
              </div>
              <p class="text-sm pink">Go to portfolio account</p>
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
  name: "discovery",
  data() {
    return {
      showtab: "features",
    };
  },
  components: {
    mainheader,
  },
};
</script>

<style>
.custom_card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
}

/* On mouse-over, add a deeper shadow */
.custom_card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.custom_card img {
  border-radius: 5px 5px 0 0;
}
</style>
