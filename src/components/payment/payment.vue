<template>
  <div class="fade h-screen">
    <mainheader></mainheader>
    <div class="w-full">
      <div>
        <div class="px-10 mb-9 mt-10">
          <h1 class="font-title mb-6">Upcoming payment</h1>

          <div
            class="grid auto-rows-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8"
          >
            <div class="col-span-1 flex flex-col">
              <div class="custom_card h-full relative" @click.prevent="details">
                <img src="../../assets/BG.png" alt="Avatar" />
                <div class="px-3 pt-4 pb-2">
                  <h4 class="font-title mb-2"><b>Bigbank</b></h4>
                  <p class="font-three mb-10">Help Secure Bigbank!</p>
                  <div
                    class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3"
                  >
                    <p class="text-xs"><span class="pink"></span></p>
                    <div>
                      <img
                        class="inline"
                        src="../../assets/icon/discovery_icon2.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-span-1 flex flex-col">
              <div class="custom_card h-full relative" @click.prevent="details">
                <img src="../../assets/BG2.png" alt="Avatar" />
                <div class="px-3 pt-4 pb-2">
                  <h4 class="font-title mb-2"><b>Kenna Security</b></h4>
                  <p class="font-three mb-10">
                    HA Hosted Vulnerability Intelligence Platform
                  </p>
                  <div
                    class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3"
                  >
                    <p class="text-xs"><span class="pink"></span></p>
                    <div>
                      <img
                        class="inline"
                        src="../../assets/icon/discovery_icon2.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-span-1 flex flex-col">
              <div class="custom_card h-full relative" @click.prevent="details">
                <img src="../../assets/BG3.jpg" alt="Avatar" />
                <div class="px-3 pt-4 pb-2">
                  <h4 class="font-title mb-2"><b>Upwork</b></h4>
                  <p class="font-three mb-10">
                    Hire Freelancers & Get Freelance Jobs Online
                  </p>
                  <div
                    class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3"
                  >
                    <p class="text-xs"><span class="pink"></span></p>
                    <div>
                      <img
                        class="inline"
                        src="../../assets/icon/discovery_icon2.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-span-1 flex flex-col">
              <div class="custom_card h-full relative" @click.prevent="details">
                <img src="../../assets/BG4.jpg" alt="Avatar" />
                <div class="px-3 pt-4 pb-2">
                  <h4 class="font-title mb-2"><b>Cloudinary</b></h4>
                  <p class="font-three mb-10">
                    Cloud image & video upload, storage, management & CDN
                  </p>
                  <div
                    class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3"
                  >
                    <p class="text-xs"><span class="pink"></span></p>
                    <div>
                      <img
                        class="inline"
                        src="../../assets/icon/discovery_icon2.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-1 flex flex-col">
              <div class="custom_card h-full relative" @click.prevent="details">
                <img src="../../assets/BG5.jpg" alt="Avatar" />
                <div class="px-3 pt-4 pb-2">
                  <h4 class="font-title mb-2"><b>Okta</b></h4>
                  <p class="font-three mb-10">
                    Cloud Identity and Mobility Management Service
                  </p>
                  <div
                    class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3"
                  >
                    <p class="text-xs"><span class="pink"></span></p>
                    <div>
                      <img
                        class="inline"
                        src="../../assets/icon/discovery_icon2.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-1 flex flex-col">
              <div class="custom_card h-full relative" @click.prevent="details">
                <img src="../../assets/BG6.jpg" alt="Avatar" />
                <div class="px-3 pt-4 pb-2">
                  <h4 class="font-title mb-2"><b>Canva</b></h4>
                  <p class="font-three mb-10">
                    Design Anything. Publish Anywhere.
                  </p>
                  <div
                    class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3"
                  >
                    <p class="text-xs"><span class="pink"></span></p>
                    <div>
                      <img
                        class="inline"
                        src="../../assets/icon/discovery_icon2.svg"
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
          <h1 class="font-title mb-6">Remitted payment</h1>

          <div
            class="grid auto-rows-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8"
          >
            <div class="col-span-1 flex flex-col">
              <div class="custom_card h-full relative" @click.prevent="details">
                <img src="../../assets/BG.png" alt="Avatar" />
                <div class="px-3 pt-4 pb-2">
                  <h4 class="font-title mb-2"><b>Bigbank</b></h4>
                  <p class="font-three mb-10">Help Secure Bigbank!</p>
                  <div
                    class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3"
                  >
                    <p class="text-xs"><span class="pink"></span></p>
                    <div>
                      <img
                        class="inline"
                        src="../../assets/icon/discovery_icon2.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-1 flex flex-col">
              <div class="custom_card h-full relative" @click.prevent="details">
                <img src="../../assets/BG.png" alt="Avatar" />
                <div class="px-3 pt-4 pb-2">
                  <h4 class="font-title mb-2"><b>Bigbank</b></h4>
                  <p class="font-three mb-10">Help Secure Bigbank!</p>
                  <div
                    class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3"
                  >
                    <p class="text-xs"><span class="pink"></span></p>
                    <div>
                      <img
                        class="inline"
                        src="../../assets/icon/discovery_icon2.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-span-1 flex flex-col">
              <div class="custom_card h-full relative" @click.prevent="details">
                <img src="../../assets/BG2.png" alt="Avatar" />
                <div class="px-3 pt-4 pb-2">
                  <h4 class="font-title mb-2"><b>Kenna Security</b></h4>
                  <p class="font-three mb-10">
                    HA Hosted Vulnerability Intelligence Platform
                  </p>
                  <div
                    class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3"
                  >
                    <p class="text-xs"><span class="pink"></span></p>
                    <div>
                      <img
                        class="inline"
                        src="../../assets/icon/discovery_icon2.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-span-1 flex flex-col">
              <div class="custom_card h-full relative" @click.prevent="details">
                <img src="../../assets/BG3.jpg" alt="Avatar" />
                <div class="px-3 pt-4 pb-2">
                  <h4 class="font-title mb-2"><b>Upwork</b></h4>
                  <p class="font-three mb-10">
                    Hire Freelancers & Get Freelance Jobs Online
                  </p>
                  <div
                    class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3"
                  >
                    <p class="text-xs"><span class="pink"></span></p>
                    <div>
                      <img
                        class="inline"
                        src="../../assets/icon/discovery_icon2.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-span-1 flex flex-col">
              <div class="custom_card h-full relative" @click.prevent="details">
                <img src="../../assets/BG4.jpg" alt="Avatar" />
                <div class="px-3 pt-4 pb-2">
                  <h4 class="font-title mb-2"><b>Cloudinary</b></h4>
                  <p class="font-three mb-10">
                    Cloud image & video upload, storage, management & CDN
                  </p>
                  <div
                    class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3"
                  >
                    <p class="text-xs"><span class="pink"></span></p>
                    <div>
                      <img
                        class="inline"
                        src="../../assets/icon/discovery_icon2.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-1 flex flex-col">
              <div class="custom_card h-full relative" @click.prevent="details">
                <img src="../../assets/BG5.jpg" alt="Avatar" />
                <div class="px-3 pt-4 pb-2">
                  <h4 class="font-title mb-2"><b>Okta</b></h4>
                  <p class="font-three mb-10">
                    Cloud Identity and Mobility Management Service
                  </p>
                  <div
                    class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3"
                  >
                    <p class="text-xs"><span class="pink"></span></p>
                    <div>
                      <img
                        class="inline"
                        src="../../assets/icon/discovery_icon2.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-1 flex flex-col">
              <div class="custom_card h-full relative" @click.prevent="details">
                <img src="../../assets/BG6.jpg" alt="Avatar" />
                <div class="px-3 pt-4 pb-2">
                  <h4 class="font-title mb-2"><b>Canva</b></h4>
                  <p class="font-three mb-10">
                    Design Anything. Publish Anywhere.
                  </p>
                  <div
                    class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3"
                  >
                    <p class="text-xs"><span class="pink"></span></p>
                    <div>
                      <img
                        class="inline"
                        src="../../assets/icon/discovery_icon2.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-1 flex flex-col">
              <div class="custom_card h-full relative" @click.prevent="details">
                <img src="../../assets/BG2.png" alt="Avatar" />
                <div class="px-3 pt-4 pb-2">
                  <h4 class="font-title mb-2"><b>Kenna Security</b></h4>
                  <p class="font-three mb-10">
                    HA Hosted Vulnerability Intelligence Platform
                  </p>
                  <div
                    class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3"
                  >
                    <p class="text-xs"><span class="pink"></span></p>
                    <div>
                      <img
                        class="inline"
                        src="../../assets/icon/discovery_icon2.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-span-1 flex flex-col">
              <div class="custom_card h-full relative" @click.prevent="details">
                <img src="../../assets/BG3.jpg" alt="Avatar" />
                <div class="px-3 pt-4 pb-2">
                  <h4 class="font-title mb-2"><b>Upwork</b></h4>
                  <p class="font-three mb-10">
                    Hire Freelancers & Get Freelance Jobs Online
                  </p>
                  <div
                    class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3"
                  >
                    <p class="text-xs"><span class="pink"></span></p>
                    <div>
                      <img
                        class="inline"
                        src="../../assets/icon/discovery_icon2.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-span-1 flex flex-col">
              <div class="custom_card h-full relative" @click.prevent="details">
                <img src="../../assets/BG4.jpg" alt="Avatar" />
                <div class="px-3 pt-4 pb-2">
                  <h4 class="font-title mb-2"><b>Cloudinary</b></h4>
                  <p class="font-three mb-10">
                    Cloud image & video upload, storage, management & CDN
                  </p>
                  <div
                    class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3"
                  >
                    <p class="text-xs"><span class="pink"></span></p>
                    <div>
                      <img
                        class="inline"
                        src="../../assets/icon/discovery_icon2.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-1 flex flex-col">
              <div class="custom_card h-full relative" @click.prevent="details">
                <img src="../../assets/BG5.jpg" alt="Avatar" />
                <div class="px-3 pt-4 pb-2">
                  <h4 class="font-title mb-2"><b>Okta</b></h4>
                  <p class="font-three mb-10">
                    Cloud Identity and Mobility Management Service
                  </p>
                  <div
                    class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3"
                  >
                    <p class="text-xs"><span class="pink"></span></p>
                    <div>
                      <img
                        class="inline"
                        src="../../assets/icon/discovery_icon2.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-1 flex flex-col">
              <div class="custom_card h-full relative" @click.prevent="details">
                <img src="../../assets/BG6.jpg" alt="Avatar" />
                <div class="px-3 pt-4 pb-2">
                  <h4 class="font-title mb-2"><b>Canva</b></h4>
                  <p class="font-three mb-10">
                    Design Anything. Publish Anywhere.
                  </p>
                  <div
                    class="flex justify-between items-center absolute bottom-0 right-0 w-full py-2 px-3"
                  >
                    <p class="text-xs"><span class="pink"></span></p>
                    <div>
                      <img
                        class="inline"
                        src="../../assets/icon/discovery_icon2.svg"
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
</template>

<script>
import mainheader from "../header/header";

export default {
  name: "payment",
  components: {
    mainheader,
  },
};
</script>

<style></style>
