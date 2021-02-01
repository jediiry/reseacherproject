<template>
  <div>
    <mainheader></mainheader>
    <div class="bg-light-gray pb-10">
      <div class="grid grid-cols-1 p-10">
        <!-- <div>
          <p class="greeting-title">Good Afternoon Lawal!</p>
        </div> -->
      </div>
    </div>

    <div class="pl-2 pr-16">
      <hall :submitButton="true" :imageButton="true"></hall>

      <div class="pl-5 pt-5 mt-10">
        <div class="hallOfFame_tab flex flex-row mb-8">
          <a href="" class="text-xl text-gray-900 mr-10 px-2"
            >Program details</a
          >
          <a href="" class="text-xl text-gray-900 mx-10 px-2 active_tab"
            >Hanger</a
          >
          <a href="" class="text-xl text-gray-900 mx-10 px-2">Hall of fame</a>
        </div>

        <div class="bg-white shadow-md rounded-md">
          <div class="grid grid-cols-12 bg-gray-100 justify-center mb-8">
            <div
              class="text-center cursor-pointer p-5 font-title col-span-4"
              :class="{ 'bg-white': submission, pink: submission }"
              @click="submission = true"
            >
              All Submission
            </div>
            <div
              class="text-center cursor-pointer p-5 font-title col-span-8"
              :class="{ 'bg-white': !submission, pink: !submission }"
              @click="submission = false"
            >
              Disclose Report
            </div>
          </div>
          <div v-if="submission">
            <transition name="fade">
              <div class="fade">
                <noitem
                  message="There are no accepted or disclosed submissions on this program. Recently accepted or disclosed submissions will be displayed here."
                  title=""
                ></noitem>
              </div>
            </transition>
          </div>
          <div class="px-10 fade" v-else>
            <transition name="fade">
              <div class="fade grid grid-cols-2 grid-rows-2 gap-8">
                <div
                  class="border col-span-1 mt-7 bg-light-gray rounded-md p-5 divide-y divide-solid divide-gray-200"
                >
                  <div class="grid grid-cols-12 mb-3">
                    <div>
                      <div
                        class="flex justify-center items-center h-8 w-8 rounded-full bg-pink-200"
                      >
                        <img
                          src="../../assets/icon/arrow-down-right.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-span-10">
                      <p class="font-bold font-title">
                        Submission of Zenith Bank Report
                      </p>
                      <p class="text-xs">2020-12-24</p>
                    </div>
                    <div class="flex justify-end">
                      <img src="../../assets/icon/Vector.svg" alt="" />
                    </div>
                  </div>

                  <div>
                    <p class="text-sm mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Culpa, illo. Amet ipsum architecto quis adipisci sint
                      porro natus, impedit veritatis ex vero magnam et tenetur,
                      ad quibusdam recusandae aperiam nobis.
                    </p>
                  </div>
                </div>

                <div
                  class="border col-span-1 mt-7 bg-light-gray rounded-md p-5 divide-y divide-solid divide-gray-200"
                >
                  <div class="grid grid-cols-12 mb-3">
                    <div>
                      <div
                        class="flex justify-center items-center h-8 w-8 rounded-full bg-pink-200"
                      >
                        <img
                          src="../../assets/icon/arrow-down-right.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-span-10">
                      <p class="font-bold font-title">
                        Submission of Zenith Bank Report
                      </p>
                      <p class="text-xs">2020-12-24</p>
                    </div>
                    <div class="flex justify-end">
                      <img src="../../assets/icon/Vector.svg" alt="" />
                    </div>
                  </div>

                  <div>
                    <p class="text-sm mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Culpa, illo. Amet ipsum architecto quis adipisci sint
                      porro natus, impedit veritatis ex vero magnam et tenetur,
                      ad quibusdam recusandae aperiam nobis.
                    </p>
                  </div>
                </div>

                <div
                  class="border row-span-1 mt-7 bg-light-gray rounded-md p-5 divide-y divide-solid divide-gray-200"
                >
                  <div class="grid grid-cols-12 mb-3">
                    <div>
                      <div
                        class="flex justify-center items-center h-8 w-8 rounded-full bg-pink-200"
                      >
                        <img
                          src="../../assets/icon/arrow-down-right.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-span-10">
                      <p class="font-bold font-title">
                        Submission of Zenith Bank Report
                      </p>
                      <p class="text-xs">2020-12-24</p>
                    </div>
                    <div class="flex justify-end">
                      <img src="../../assets/icon/Vector.svg" alt="" />
                    </div>
                  </div>

                  <div>
                    <p class="text-sm mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Culpa, illo. Amet ipsum architecto quis adipisci sint
                      porro natus, impedit veritatis ex vero magnam et tenetur,
                      ad quibusdam recusandae aperiam nobis.
                    </p>
                  </div>
                </div>

                <div
                  class="border row-span-1 mt-7 bg-light-gray rounded-md p-5 divide-y divide-solid divide-gray-200"
                >
                  <div class="grid grid-cols-12 mb-3">
                    <div>
                      <div
                        class="flex justify-center items-center h-8 w-8 rounded-full bg-pink-200"
                      >
                        <img
                          src="../../assets/icon/arrow-down-right.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="col-span-10">
                      <p class="font-bold font-title">
                        Submission of Zenith Bank Report
                      </p>
                      <p class="text-xs">2020-12-24</p>
                    </div>
                    <div class="flex justify-end">
                      <img src="../../assets/icon/Vector.svg" alt="" />
                    </div>
                  </div>

                  <div>
                    <p class="text-sm mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Culpa, illo. Amet ipsum architecto quis adipisci sint
                      porro natus, impedit veritatis ex vero magnam et tenetur,
                      ad quibusdam recusandae aperiam nobis.
                    </p>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hall from "@/components/hall/hall.vue";
import noitem from "../noitem/noitem";
import mainheader from "../header/header";

export default {
  name: "hanger",
  data() {
    return {
      submission: true,
      report: false,
    };
  },
  components: {
    Hall,
    noitem,
    mainheader,
  },
};
</script>

<style></style>
