<template>
  <div
    class="hallOfFame flex border border-gray-300 border-solid ml-2 sm:mr-10 lg:mr-16"
  >
    <div
      class="hallOfFame_left flex flex-col border-r border-gray-300 border-solid"
    >
      <div class="p-5 pb-20">
        <h1 class="text-lg mb-2">LogicBoxes / OrderBox</h1>
        <span class="text-xs text-gray-400 block">OrderBox VDP</span>
        <div class="mt-7 mb-3">
          <img
            class="inline mr-2"
            src="../../assets/icon/points_icon.svg"
            alt=""
          />
          <!-- <span class="mr-3">Points</span>  -->
          <span class="text-xs text-gray-400">Per vulnerability</span>
        </div>
        <div class="mb-1">
          <img
            class="inline mr-2"
            src="../../assets/icon/habour_icon.svg"
            alt=""
          />
          <!-- <span>Partial safe harbour</span>  -->
        </div>
        <div>
          <img
            class="inline mr-2"
            src="../../assets/icon/crow_icon.svg"
            alt=""
          />
          <!-- <span>Managed by Teklabspace</span>  -->
        </div>
      </div>
      <div
        v-if="submitButton"
        class="hallOfFame_footer border-gray-300 border-solid border-t flex justify-between p-4"
      >
        <div class="hallOfFame_footer_box">
          <button
            type="button"
            @click.prevent="submit"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-700 text-base font-medium text-white hover:bg-green-900focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Submit Report
          </button>
        </div>
        <div class="hallOfFame_footer_box flex justify-end">
          <img src="../../assets/icon/star_icon.svg" alt="" />
          <img
            class="inline mx-10"
            src="../../assets/icon/eye_icon.svg"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="hallOfFame_right relative">
      <img
        class="absolute block top-1/2 left-1/2"
        src="../../assets/logo2.svg"
        alt=""
      />

      <!-- <button
        v-if="imageButton"
        class="bg-indigo-900 text-white p-1 text-sm rounded absolute right-10 top-10"
        @click.prevent="submit"
      >
        Submit Report
      </button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "hall",
  props: ["submitButton", "imageButton"],
  methods: {
    submit() {
      this.$router.push("submit");
    },
  },
};
</script>

<style>
.hallOfFame_left {
  flex: 2;
}

.hallOfFame_right {
  flex: 1;
}

.hallOfFame_right img {
  transform: translate(-50%, -50%);
}

@media only screen and (max-width: 31.25em) {
  /** 500px / 16 */
  .hallOfFame_footer {
    flex-direction: column;
  }

  .hallOfFame_footer > :nth-child(2) {
    padding-top: 12px;
    justify-content: space-between;
  }
  .hallOfFame_footer > :nth-child(1) button {
    width: 100%;
  }

  .hallOfFame_footer > :nth-child(2) > img:nth-child(2) {
    margin-left: 0;
    margin-right: 0;
  }
}

@media only screen and (max-width: 37.5em) {
  /** 600px / 16 */
  .hallOfFame_right img {
    width: 50%;
  }
  .hallOfFame_right button {
    right: 10%;
    font-size: 11px;
  }
}
</style>
