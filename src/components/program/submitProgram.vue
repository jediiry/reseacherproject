<template>
  <div class="relative fade">
    <mainheader></mainheader>
    <div class="bg-light-gray pb-10">
      <div class="grid grid-cols-1 p-10">
        <div>
          <p class="greeting-title">Good Afternoon Lawal!</p>
        </div>
      </div>
    </div>
    <hall :submitButton="false" :imageButton="false"></hall>

    <div class="grid grid-cols-4 gap-7 p-10">
      <div class="submitProgram-box1 col-span-1">
        <h2 class="text-base mb-2">Summary title</h2>
        <p class="text-xs text-gray-600 mb-8">
          Help us get an idea of what this vulnerability is about.
        </p>

        <h2 class="text-base mb-2">Target</h2>
        <p class="text-base mb-2 text-xs text-gray-600">
          Select the vulnerability target
        </p>
        <p class="text-xs text-gray-500 mb-8">
          Help us get an idea of what this vulnerability is about.
        </p>

        <h2 class="text-base mb-2">Technical severity</h2>
        <p class="text-xs text-gray-600 mb-8">
          The
          <span class="text-blue-500"> Vulnerability Rating Taxonomy </span> is
          the baseline guide for classifying technical severity
        </p>
        <p class="text-xs text-gray-500 mb-8">
          A severity rating suggested by the VRT is not guaranteed to be the
          severity rating applied for your submission.
        </p>

        <h2 class="text-base mb-2">Vulnerability details</h2>
      </div>

      <div class="submitProgram-box2  col-span-2">
        <input
          type="text"
          class="w-full p-3 border mb-16"
          placeholder="Provide summary title"
        />
        <select name="target" class="w-full p-3 border mb-20">
          <option value="">Select target</option>
        </select>

        <select name="target" class="w-full p-3 border mb-20">
          <option value="">Select a vulnerability type (e.g. XSS, SQL)</option>
        </select>

        <p class="mb-4">URL / Locationof vulnerability (optional)</p>
        <p>For example https://secure.server.com/some/path/file.php</p>
        <input type="text" class="w-full p-3 border my-4" />

        <h2 class="text-sm text-gray-500 mb-3">Description</h2>
        <p class="text-xs text-gray-400 mb-3">
          Describe the vulnerability and its impact
        </p>
        <p class="text-xs text-gray-400 mb-3">
          Provide a proof of concept or replication steps
        </p>
        <p class="text-xs text-gray-400 mb-3 italic">
          Maximum 10,000 characters
        </p>

        <div class="grid grid-cols-1 grid-rows-12 mb-9">
          <div class="col-span-1 row-span-2 p-3 border flex">
            <button
              class="py-2 px-4 text-sm bg-gray-500 ml-auto inline-block rounded-l"
            >
              Write
            </button>
            <button class="py-2 px-4 text-sm bg-gray-200 rounded-r">
              Preview
            </button>
          </div>
          <textarea
            class="border col-span-1 row-span-10 w-full"
            cols="30"
            rows="10"
          ></textarea>
          <div class="col-span-1 row-span-2 border flex justify-between p-4">
            <p class="text-xs">
              Embed images by dragging & dropping,
              <span class="text-blue-600">selecting</span>
              or pasting them.
            </p>
            <img src="../../assets/icon/calender.svg" alt="" />
          </div>
        </div>

        <h2 class="text-sm text-gray-500 mb-3">
          Any additional information? (optional)
        </h2>
        <p class="text-xs text-gray-400 mb-3">Maximum 10,000 characters.</p>

        <div class="grid grid-cols-1 grid-rows-12 mb-9">
          <div class="col-span-1 row-span-2 p-3 border flex">
            <button
              class="py-2 px-4 text-sm bg-gray-500 ml-auto inline-block rounded-l"
            >
              Write
            </button>
            <button class="py-2 px-4 text-sm bg-gray-200 rounded-r">
              Preview
            </button>
          </div>
          <textarea
            class="border col-span-1 row-span-10 w-full"
            cols="30"
            rows="10"
          ></textarea>
          <div class="col-span-1 row-span-2 border flex justify-between p-4">
            <p class="text-xs">
              Embed images by dragging & dropping,
              <span class="text-blue-600">selecting</span>
              or pasting them.
            </p>
            <img src="../../assets/icon/calender.svg" alt="" />
          </div>
        </div>

        <button class="bg-gray-200 border px-4 py-2 mb-4 rounded text-sm">
          <img class="inline" src="../../assets/icon/calender.svg" alt="" /> Add
          attachments
        </button>

        <p class="text-xs text-gray-400 mb-4">
          You can attach multiple files (up to 20). Please keep individual
          upload size under 400MB.
        </p>
        <p class="text-xs text-gray-400 mb-10 pb-20 border-b">
          You can embed image attachments (.jpg/.gif/.png, smaller than 2MB)
          into the Markdown fields. You can copy the embed code using the 'Copy
          as Markdown' button.
        </p>

        <div class="mb-5">
          <input type="checkbox" class="mr-4" />
          <p class="inline text-sm">
            I have followed the <span class="font-bold">program brief</span> and
            agree to
            <span class="font-bold">Bugcrowd's terms & conditions</span>
          </p>
        </div>

        <button
          class="bg-green-900 p-3 text-white text-sm font-bold rounded"
          @click="$m.showdropdown('submited')"
        >
          Report vulnerability
        </button>
        <modal class="modal" id="submited">
          <div slot="content">
            <div class="bdivide-gray-100 divide-y">
              <div class=" py-4">
                <div class="flex justify-between">
                  <div>
                    <p class="text-xl text-center">
                      Program Successful Added
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div slot="footer">
            <button
              type="button"
              @click="$m.hidemodal('submited')"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </modal>
      </div>

      <div class="submitProgram-box3  col-span-1">
        <div class="p-4 mb-4 border rounded">
          <h2 class="text-lg font-bold">Program Rules</h2>
          <span class="text-xs"
            >Please familiarize yourself with Bugcrowd's
            <span class="text-blue-500"> standard disclosure terms.</span>
          </span>
        </div>

        <div class="border rounded px-9 py-5">
          <h2 class="text-lg font-bold">Some tips</h2>
          <ul class="text-xs list-disc">
            <li class="mb-3">
              Issues with a submission? Please reach out to
              <span>support@bugcrowd.com</span>
            </li>
            <li class="mb-3">
              Automated scanning tools seldom give first-to-find vulns
            </li>
            <li class="mb-3">
              You're likely to be rewarded if you include a working PoC
            </li>
            <li class="mb-3">
              If possible explain how your finding is exploitable. The more
              details about the risks the more likely a reward!
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hall from "@/components/hall/hall.vue";
import mainheader from "../header/header";

export default {
  name: "submitProgram",
  components: {
    Hall,
    mainheader,
  },
};
</script>

<style>
input:focus,
select:focus,
textarea:focus,
button:focus,
button:active {
  outline: none;
}
</style>
