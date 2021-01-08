<template>
    <div class="relative">
        <mainheader></mainheader>
        <div class="bg-light-gray pb-10">
            <div class="grid grid-cols-1 p-10">
                <div>
                    <p class="greeting-title">Good Afternoon Lawal!</p>
                </div>
            </div>
        </div>

        <div class="pl-2 pr-16 mb-6">
            <div class="hallOfFame flex border border-gray-300 border-solid ml-2 mr-16">
                <div class="hallOfFame_left flex flex-col border-r border-gray-300 border-solid">
                    <div class="p-5 pb-20">
                        <h1 class="text-lg mb-2">LogicBoxes / OrderBox</h1>
                        <span class="text-xs text-gray-400 block">OrderBox VDP</span>
                        <div class="mt-7 mb-3">
                            <img  class="inline mr-2" src="../../assets/icon/shop.svg" alt=""> 
                            <span class="mr-3">Points</span> 
                            <span class="text-xs text-gray-400">Per vulnerability</span>
                        </div>
                        <div class="mb-1">
                            <img class="inline mr-2" src="../../assets/icon/circle.svg" alt="">
                            <span>Partial safe harbour</span> 
                        </div>
                        <div>
                            <img class="inline mr-2" src="../../assets/icon/circle.svg" alt="">
                            <span>Managed by Teklabspace</span> 
                        </div>
                    </div>
                </div>
                <div class="hallOfFame_right relative">
                    <img class="absolute block top-1/2 left-1/2" src="./../../assets//teklabspcelogo.png" alt="">
                </div>
            </div>
        </div>

        <div class="grid grid-cols-4 gap-7 p-10">
            <div class="submitProgram-box1 col-span-1">
                <h2 class="text-base mb-2">Summary title</h2>
                <p class="text-xs text-gray-600 mb-8">Help us get an idea of what this vulnerability is about.</p>

                <h2 class="text-base mb-2">Target</h2>
                <p class="text-base mb-2 text-xs text-gray-600">Select the vulnerability target</p>
                <p class="text-xs text-gray-500 mb-8">Help us get an idea of what this vulnerability is about.</p>

                <h2 class="text-base mb-2">Technical severity</h2>
                <p class="text-xs text-gray-600 mb-8">
                    The <span class="text-blue-500"> Vulnerability Rating Taxonomy </span> is the baseline guide for classifying 
                    technical severity
                </p>
                <p class="text-xs text-gray-500 mb-8">
                    A severity rating suggested by the VRT is not guaranteed to be the severity
                    rating applied for your submission.
                </p>

                <h2 class="text-base mb-2">Vulnerability details</h2>

            </div>

            <div class="submitProgram-box2  col-span-2">
                <input type="text" class="w-full p-3 border mb-16" placeholder="Provide summary title">
                <select name="target" class="w-full p-3 border mb-20">
                    <option value="">Select target</option>
                </select>

                <select name="target" class="w-full p-3 border mb-20">
                    <option value="">Select a vulnerability type (e.g. XSS, SQL)</option>
                </select>

                <p class="mb-4">URL / Locationof vulnerability (optional)</p>
                <p>For example https://secure.server.com/some/path/file.php</p>
                <input type="text" class="w-full p-3 border my-4">
                
                <h2 class="text-sm text-gray-500 mb-3">Description</h2>
                <p class="text-xs text-gray-400 mb-3">Describe the vulnerability and its impact</p>
                <p class="text-xs text-gray-400 mb-3">Provide a proof of concept or replication steps</p>
                <p class="text-xs text-gray-400 mb-3 italic">Maximum 10,000 characters</p>

                <div class="grid grid-cols-1 grid-rows-12 mb-9">
                    <div class="col-span-1 row-span-2 p-3 border flex">
                        <button class="py-2 px-4 text-sm bg-gray-500 ml-auto inline-block rounded-l">Write</button>
                        <button class="py-2 px-4 text-sm bg-gray-200 rounded-r">Preview</button>
                    </div>
                    <textarea class="border col-span-1 row-span-10 w-full" cols="30" rows="10"></textarea>
                    <div class="col-span-1 row-span-2 border flex justify-between p-4">
                        <p class="text-xs">
                            Embed images by dragging & dropping, <span class="text-blue-600">selecting</span> 
                            or pasting them.
                        </p>
                        <img src="../../assets/icon/calender.svg" alt="">
                    </div>
                </div>


                <h2 class="text-sm text-gray-500 mb-3">Any additional information? (optional) </h2>
                <p class="text-xs text-gray-400 mb-3">Maximum 10,000 characters.</p>

                <div class="grid grid-cols-1 grid-rows-12 mb-9">
                    <div class="col-span-1 row-span-2 p-3 border flex">
                        <button class="py-2 px-4 text-sm bg-gray-500 ml-auto inline-block rounded-l">Write</button>
                        <button class="py-2 px-4 text-sm bg-gray-200 rounded-r">Preview</button>
                    </div>
                    <textarea class="border col-span-1 row-span-10 w-full" cols="30" rows="10"></textarea>
                    <div class="col-span-1 row-span-2 border flex justify-between p-4">
                        <p class="text-xs">
                            Embed images by dragging & dropping, <span class="text-blue-600">selecting</span> 
                            or pasting them.
                        </p>
                        <img src="../../assets/icon/calender.svg" alt="">
                    </div>
                </div>


                <button class="bg-gray-200 border px-4 py-2 mb-4 rounded text-sm">
                    <img class="inline" src="../../assets/icon/calender.svg" alt="">  Add attachments
                </button>

                <p class="text-xs text-gray-400 mb-4">You can attach multiple files (up to 20). Please keep individual upload size under 400MB.</p>
                <p class="text-xs text-gray-400 mb-10 pb-20 border-b">
                    You can embed image attachments (.jpg/.gif/.png, smaller than 2MB) into
                    the Markdown fields. You can copy the embed code using the 'Copy as Markdown' button.
                </p>

                <div class="mb-5">
                    <input type="checkbox" class="mr-4">
                    <p class="inline text-sm">I have followed the <span class="font-bold">program brief</span> and agree to <span class="font-bold">Bugcrowd's terms & conditions</span></p>
                </div>

                <button class="bg-green-900 p-3 text-white text-sm font-bold rounded">
                    Report vulnerability
                </button>
            </div>

            <div class="submitProgram-box3  col-span-1">
                <div class="p-4 mb-4 border rounded">
                    <h2 class="text-lg font-bold">Program Rules</h2>
                    <span class="text-xs">Please familiarize yourself with Bugcrowd's <span class="text-blue-500"> standard disclosure terms.</span> </span>
                </div>

                <div class="border rounded px-9 py-5">
                    <h2 class="text-lg font-bold">Some tips</h2>
                    <ul class="text-xs list-disc">
                        <li class="mb-3">Issues with a submission? Please reach out to <span>support@bugcrowd.com</span></li>
                        <li class="mb-3">Automated scanning tools seldom give first-to-find vulns</li>
                        <li class="mb-3">You're likely to be rewarded if you include a working PoC </li>
                        <li class="mb-3">If possible explain how your finding is exploitable. The more details about the risks the more likely a reward!</li>
                    </ul>
                </div>
            </div>
        </div>

        <div id="myModal" class="modal block">
            <!-- Modal content -->
            <div class="modal-content relative">
                <span class="close text-gray-400">&times;</span>
                <h1 class="center_item text-2xl">Program Successfully Added</h1>
            </div>
        </div>
    </div>
</template>

<script>
// import Hall from "@/components/hall/hall.vue";
import mainheader from "../header/header";

export default {
    name: 'submitProgram',
    components: {
        // Hall,
        mainheader
    }
}
</script>

<style>
.hallOfFame_left{
    flex: 2;
}

.hallOfFame_right{
    flex: 1;
}

.hallOfFame_right img {
    transform: translate(-50%, -50%);
}

input:focus,
select:focus,
textarea:focus,
button:focus,
button:active
{
    outline: none;
}

.center_item {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}






/* The Modal (background) */
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.8); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  height: 50%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 24px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>