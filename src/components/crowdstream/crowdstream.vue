<template>
  <div>
    <mainheader></mainheader>
    <div class="p-5">
      <h1 class="font-one mb-2">CrowdStream</h1>
      <p class="font-two text-gray-500 mb-10">
        CrowdStream is a showcase of accepted and disclosed submissions on
        participating programs.
      </p>

      <div class="bg-white rounded-md">
        <div class="grid grid-cols-12 bg-gray-100 justify-center mb-8">
          <div
            class="text-center cursor-pointer p-5 font-bold col-span-4"
            :class="{ 'bg-white': submission, pink: submission }"
            @click="submission = true"
          >
            All Submission
          </div>
          <div
            class="text-center cursor-pointer p-5 font-bold col-span-8"
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
            <div class="fade">
              <noitem
                message="There are no accepted or disclosed submissions on this program. Recently accepted or disclosed submissions will be displayed here."
                title=""
              ></noitem>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mainheader from "../header/header";
import noitem from "../noitem/noitem";

export default {
  name: "crowdstream",
  data() {
    return {
      submission: true,
      report: false,
    };
  },
  components: {
    mainheader,
    noitem,
  },
};
</script>

<style></style>
