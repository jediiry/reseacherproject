<template>
  <div class="h-screen relative fade">
    <mainheader></mainheader>
    <div class="">
      <div class="grid grid-cols-1 px-10 py-4">
        <!-- <div>
          <p class="greeting-title">Good Afternoon Lawal!</p>
        </div> -->
      </div>
    </div>
    <div class="px-10">
      <hall :submitButton="false" :imageButton="false"></hall>

      <div class="grid grid-cols-4 gap-7 p-10">
        <div class="submitProgram-box1 col-span-1">
          <h2 class="font-two mb-2">TARGET SCOPE</h2>
          <p class="text-xs text-gray-600 mb-8">
            Select target
          </p>
          <h2 class="font-two mb-2">TECHNICAL SEVERITY</h2>
          <!-- <p class="font-two mb-2 text-xs text-gray-600">
            Select the vulnerability target
          </p> -->
          <p class="text-xs text-gray-500 mb-8">
            This describes the severity level of the Vulnerability
          </p>
          <h2 class="font-two mb-2 uppercase">Select a vulnerability type</h2>
          <!-- <p class="font-two mb-2 text-xs text-gray-600">
            Select the vulnerability target
          </p> -->
          <p class="text-xs text-gray-500 mb-8">
            This describes the severity level of the Vulnerability
          </p>

          <!-- <h2 class="font-two mb-2">Technical severity</h2>
          <p class="text-xs text-gray-600 mb-8">
            The
            <span class="text-blue-500"> Vulnerability Rating Taxonomy </span>
            is the baseline guide for classifying technical severity
          </p> -->
          <!-- <p class="text-xs text-gray-500 mb-8">
            A severity rating suggested by the VRT is not guaranteed to be the
            severity rating applied for your submission.
          </p> -->
          <!-- <h2 class="font-two mb-2 uppercase">Vulnerability details</h2>

          <p class="text-xs text-gray-500 mb-8">
            The proof of concept is the most important part of your report
            submission. Clear, reproducible steps will help us validate this
            issue as quickly as possible.
          </p> -->

          <h2 class="font-two mb-2 uppercase">SUMMARY TITLE</h2>

          <p class="text-xs text-gray-500 mb-8">
            A clear and concise summary title includes the type of vulnerability
            and the impacted asset. 200 Words
          </p>
          <h2 class="font-two mb-2 uppercase">BUG DISCRIPTION</h2>

          <p class="text-xs text-gray-500 mb-8">
            What is the vulnerability? In clear steps, how do you reproduce it?
            Please replace all the [square] sections below with the pertinent
            details. Remember, the more detail you provide, the easier it is for
            us to triage and respond quickly, so be sure to take your time
            filling out the report!
          </p>
        </div>

        <div class="submitProgram-box2  col-span-3">
          <input
            type="text"
            class="w-full p-3 border mb-8"
            placeholder="https://example.com"
          />

          <select name="target" class="w-full p-3 border mb-10">
            <option value="">Select Technical severity</option>
            <option
              >Cross-site Scripting (XSS): Reflected, Persistent and DOM-based
              XSS:</option
            >
            <option>SQL Injection (SQLi)</option>
            <option>Cross-site Request Forgery (CSRF)</option>
            <option>Server Side Request Forgery (SSRF)</option>
            <option>Remote File Inclusion (RFI)</option>
            <option>Local File Inclusion (LFI)</option>
            <option>Remote Code Execution (RCE)</option>
            <option>CRLF Injection</option>
            <option>LDAP Injection</option>
            <option>Failure to restrict URL Access</option>
            <option>Insufficient Transport Layer Protection</option>
            <option>Unvalidated Redirects and Forwards</option>
            <option>Insecure Cryptographic Storage</option>
            <option>Security Misconfiguration</option>
            <option>Insecure Direct Object References</option>
            <option>Server-Side Template Injection</option>
            <option>DNS Zone Transfer (AXFR Vulnerability)</option>
            <option>HTTP Request Smuggling</option>
            <option>Mobile Application Security Vulnerabilities:</option>
            <option>Weak Server Side Controls</option>
            <option>Lack of Binary Protections</option>
            <option>Insecure Data Storage</option>
            <option>Unintended Data Leakage</option>
            <option>Poor Authorization and Authentication</option>
            <option>Not Listed</option>
            <!-- <option value="">Web Application Security Vulnerabilities</option> -->
          </select>

          <select name="target" class="w-full p-3 border mb-10">
            <option value=""
              >Select a vulnerability type (e.g. XSS, SQL)</option
            >

            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Critical</option>
          </select>
          <!-- <input
            type="text"
            class="w-full p-3 border mb-8"
            placeholder="https://example.com"
          /> -->
          <input
            type="text"
            class="w-full p-3 border mb-8"
            placeholder="Bug Summary Title"
          />

          <!-- <p class="mb-4">URL / Locationof vulnerability (optional)</p>
          <p>For example https://secure.server.com/some/path/file.php</p>
          <input type="text" class="w-full p-3 border my-4" /> -->

          <!-- <h2 class="text-sm text-gray-500 mb-3 uppercase">Description</h2> -->
          <!-- <p class="text-xs text-gray-400 mb-3">
            Describe the vulnerability and its impact
          </p>
          <p class="text-xs text-gray-400 mb-3">
            Provide a proof of concept or replication steps
          </p>
          <p class="text-xs text-gray-400 mb-3 italic">
            Maximum 10,000 characters
          </p> -->

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
              class="border col-span-1 px-4 row-span-10 w-full"
              cols="30"
              rows="10"
              v-model="editablecontent"
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

          <!-- <h2 class="text-sm text-gray-500 mb-3">
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
          </div> -->

          <button class="bg-gray-200 border px-4 py-2 mb-4 rounded text-sm">
            <img class="inline" src="../../assets/icon/calender.svg" alt="" />
            Add attachments
          </button>

          <p class="text-xs text-gray-400 mb-4">
            You can attach multiple files (up to 20). Please keep individual
            upload size under 400MB.
          </p>
          <p class="text-xs text-gray-400 mb-10 pb-20 border-b">
            You can embed image attachments (.jpg/.gif/.png, smaller than 2MB)
            into the Markdown fields. You can copy the embed code using the
            'Copy as Markdown' button.
          </p>

          <div class="mb-5">
            <input type="checkbox" class="mr-4" />
            <p class="inline text-sm">
              I have followed the
              <span class="font-bold">program brief</span> and agree to
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
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white font-two font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Close
              </button>
            </div>
          </modal>
        </div>

        <!-- <div class="submitProgram-box3  col-span-1">
          <div class="p-4 mb-4 border rounded">
            <h2 class="font-title font-bold">Program Rules</h2>
            <span class="text-xs"
              >Please familiarize yourself with Bugcrowd's
              <span class="text-blue-500"> standard disclosure terms.</span>
            </span>
          </div>

          <div class="border rounded px-9 py-5">
            <h2 class="font-title font-bold">Some tips</h2>
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
        </div> -->
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
  data() {
    return {
      editablecontent: `
      ## Summary:
[add summary of the vulnerability]

## Steps To Reproduce:
[add details for how we can reproduce the issue]

  1. [add step]
  1. [add step]
  1. [add step]

## Supporting Material/References:
[list any additional material (e.g. screenshots, logs, etc.)]

## Remediation:
[add details for possible remidiation]

  * [attachment / reference]
      `,
    };
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
