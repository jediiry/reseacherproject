<template>
  <div>
    <mainheader></mainheader>
    <div class="bg-light-gray pb-10">
      <div class="grid grid-cols-1 p-10">
        <div>
          <p class="greeting-title">Good Afternoon Lawal!</p>
        </div>
      </div>
    </div>

    <div class="pl-2 pr-5 lg:pr-16">
      <hall :submitButton="true" :imageButton="true"></hall>

      <div class="pl-5 lg:pl-10 pt-5 mt-10">
        <div class="hallOfFame_tab flex flex-row mb-2">
          <a href="" class="text-xl text-gray-900 md:mr-10 font-bold px-2 active_tab">
            Program details</a>
          <a href="" class="text-xl text-gray-900 md:mx-10 font-bold px-2">Crowdstream</a>
          <a href="" class="text-xl text-gray-900 md:mx-10 font-bold px-2">Hall of fame</a>
        </div>


        <div class="grid auto-rows-auto sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
          <div class="col-span-3 mt-3 pr-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a
              tempora porro vero, ut praesentium tempore minima debitis, unde
              suscipit consectetur animi temporibus ex eos, quo optio quod nulla
              itaque!. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iusto a tempora porro vero, ut praesentium tempore minima debitis,
              unde suscipit consectetur animi temporibus ex eos, quo optio quod
              nulla itaque!. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Iusto a tempora porro vero, ut praesentium tempore minima
              debitis, unde suscipit consectetur animi temporibus ex eos, quo
              optio quod nulla itaque!.
            </p>
            <h3 class="text-lg my-7">Eligibility</h3>
            <p class="text-base text-gray-400 my-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a
              tempora porro vero, ut praesentium tempore minima debitis, unde
              suscipit consectetur animi temporibus ex eos, quo optio quod nulla
              itaque!. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iusto a tempora porro vero, ut praesentium tempore minima debitis,
              unde suscipit consectetur animi temporibus ex eos, quo optio quod
              nulla itaque!. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Iusto a tempora porro vero, ut praesentium tempore minima
              debitis, unde suscipit consectetur animi temporibus ex eos, quo
              optio quod nulla itaque!.
            </p>
            <h3 class="text-lg my-7">Eligibility</h3>
            <p class="text-base text-gray-400 my-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <span class="text-purple-500">Vulnerability Rating Taxonomy</span>
              porro vero, ut praesentium tempore minima debitis, unde suscipit
              consectetur animi temporibus ex eos, quo optio quod nulla itaque!.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a
              tempora porro vero, ut praesentium tempore minima debitis, unde.
            </p>
            <h3 class="text-lg my-7">Discovering Security Vulnerabilities</h3>
            <p class="text-base text-gray-400 my-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              porro vero, ut praesentium tempore minima debitis, unde suscipit
              consectetur animi temporibus ex eos, quo optio quod nulla itaque!.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a
              tempora porro vero, ut praesentium tempore minima debitis, unde.
            </p>

            <ul class="list-disc mb-8 p-4 text-base text-gray-400 p-3">
              <li class="pb-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorum iste eius eos vitae consectetur.
              </li>
              <li class="pb-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorum iste eius eos vitae consectetur.
              </li>
              <li class="pb-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorum iste eius eos vitae consectetur.
              </li>
              <li class="pb-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorum iste eius eos vitae consectetur.
              </li>
              <li class="pb-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorum iste eius eos vitae consectetur.
              </li>
              <li class="pb-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorum iste eius eos vitae consectetur.
              </li>
              <li class="pb-1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorum iste eius eos vitae consectetur.
              </li>
            </ul>

            <div
              class="mb-10 flex bg-white border border-solid border-blue-500 rounded"
            >
              <span class="bg-blue-500 p-2 flex items-center">
                <span
                  class="bg-white rounded-full text-blue-500 h-8 w-8 text-center flex items-center justify-center"
                  >i</span
                >
              </span>
              <span class="p-4 flex items-center text-gray-400 text-xs"
                >This program only awards points for VRT based
                submissions.</span
              >
            </div>

            <h2 class="mb-7 text-3xl">Targets</h2>
            <h3 class="mb-5">In scope</h3>
            <table class="targets_table mb-10">
              <thead>
                <tr>
                  <th class="text-gray-700 text-xs">Target name</th>
                  <th class="text-gray-700 text-xs">Type</th>
                  <th class="text-gray-700 text-xs">Tags</th>
                  <th class="text-gray-700 text-xs">Known issues</th>
                  <th class="text-gray-700 text-xs">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-gray-700 text-xs">manage.logiboxes.com</td>
                  <td class="text-gray-700 text-xs">Website Testing</td>
                  <td class="text-gray-700 flex-wrap flex">
                    <span
                      class="rounded-l-lg bg-gray-300 p-2 text-gray-700 text-xs mr-2 my-1"
                      >API Testing</span
                    >
                  </td>
                  <td class="text-gray-700 text-xs">None known</td>
                  <td>
                    <button>o</button>
                  </td>
                </tr>
                <tr>
                  <td class="text-gray-700 text-xs">httpi.com</td>
                  <td class="text-gray-700 text-xs">Website Testing</td>
                  <td class="text-gray-700 flex-wrap flex">
                    <span
                      class="rounded-l-lg bg-gray-300 p-2 text-gray-700 text-xs mr-2 my-1"
                      >API Testing</span
                    >
                    <span
                      class="rounded-l-lg bg-gray-300 p-2 text-gray-700 text-xs mr-2 my-1"
                      >Java</span
                    >
                    <span
                      class="rounded-l-lg bg-gray-300 p-2 text-gray-700 text-xs mr-2 my-1"
                      >Jquery</span
                    >
                  </td>
                  <td class="text-gray-700 text-xs">None known</td>
                  <td>
                    <button>o</button>
                  </td>
                </tr>
              </tbody>
            </table>

            <h3 class="mb-5 ">Out scope</h3>
            <table class="targets_table">
              <thead>
                <tr>
                  <th class="text-gray-700 text-xs">Target name</th>
                  <th class="text-gray-700 text-xs">Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-gray-700 text-xs">
                    Any asset not explicitly listed as 'In Scope' above is
                    explicitly not out of scope
                  </td>
                  <td class="text-gray-700 text-xs">Website Testing</td>
                </tr>
              </tbody>
            </table>

            <p class="text-base my-20 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              ratione dolore provident deserunt iure repellendus beatae alias
              debitis ut neque voluptate quam error, qui mollitia fugiat
              sapiente eligendi maxime sed! Tempora minus id fuga! Non cumque
              porro, atque, illo ipsum officia sapiente ut voluptas commodi
              libero ullam? Deleniti recusandae earum debitis fugit voluptatem,
              officiis eius architecto, consequatur ea illum repellendus?
            </p>

            <h3 class="text-xl mt-7 mb-3">Target Information</h3>
            <p class="text-base text-sm text-gray-700">
              The target for this engagement is the management portal of the
              LogicBuisiness web application.
            </p>

            <h3 class="text-xl mt-10 mb-4">API Documentation</h3>
            <a
              href=""
              class="text-base border-b border-indigo-500 text-indigo-500"
              >https://manage.logicboxes.com/kb/node/744</a
            >

            <h3 class="text-xl mt-7 mb-3">Credentials</h3>
            <p class="text-base mb-10 text-sm text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              ratione dolore provident deserunt iure repellendus beatae alias
              debitis ut neque voluptate quam error, qui mollitia fugiat
              sapiente eligendi maxime sed! Tempora minus id fuga!
            </p>

            <h3 class="text-xl mt-10 mb-3">Credentials</h3>
            <p class="text-base mb-5 text-sm text-gray-700">
              The following is a partial list of issues that we ask for you not
              to report, unless you believe there is an actual vulnerability:
            </p>

            <ul class="text-base mb-5 text-sm text-gray-700">
              <li class="text-gray-700 mb-1">
                - CSRF on forms that are available to anonymous users
              </li>
              <li class="text-gray-700 mb-1">
                - CSRF on forms that are available to anonymous users
              </li>
              <li class="text-gray-700 mb-1">
                - CSRF on forms that are available to anonymous users
              </li>
              <li class="text-gray-700 mb-1">
                - CSRF on forms that are available to anonymous users
              </li>
              <li class="text-gray-700 mb-1">
                - CSRF on forms that are available to anonymous users
              </li>
            </ul>

            <h3 class="text-xl mt-10 mb-6">Safe Harbor:</h3>

            <h2 class="mb-6 italic text-lg">
              When conducting vulnerability reseacrh according to this policy,
              we comsider this research to be:
            </h2>

            <ul class="text-base mb-5 text-sm text-gray-700">
              <li class="text-gray-700 mb-1">
                - CSRF on forms that are available to anonymous users,on forms
                that are available to anonymous users
              </li>
              <li class="text-gray-700 mb-1">
                - CSRF on forms that are available to anonymous users, on forms
                that are available to anonymous users
              </li>
              <li class="text-gray-700 mb-1">
                - CSRF on forms that are available to anonymous users, on forms
                that are available to anonymous users
              </li>
              <li class="text-gray-700 mb-1">
                - CSRF on forms that are available to anonymous users, on forms
                that are available to anonymous users
              </li>
              <li class="text-gray-700 mb-1">
                - CSRF on forms that are available to anonymous users, on forms
                that are available to anonymous users
              </li>
            </ul>

            <p
              class="text-base italic mb-10 text-sm text-gray-700 leading-relaxed"
            >
              If at any time you have concerns or are uncertain whether your
              security research is consistent with this policy, please inquire
              via support@teklabspace.com before going any further.
            </p>

            <h3 class="text-xl mt-10 mb-9">Porgram rules</h3>

            <div
              class="mb-3 flex bg-white border border-solid border-blue-500 rounded"
            >
              <span class="bg-blue-500 p-2 flex items-center">
                <span
                  class="bg-white rounded-full text-blue-500 h-8 w-8 text-center flex items-center justify-center"
                  >i</span
                >
              </span>
              <span class="p-4 flex items-center text-gray-400 text-xs"
                >This program follows
                <span class="text-blue-500">
                  Bugcrowd's standard disclosure terms.</span
                ></span
              >
            </div>

            <div
              class="mb-3 flex bg-white border border-solid border-blue-500 rounded"
            >
              <span class="bg-blue-500 p-2 flex items-center">
                <span
                  class="bg-white rounded-full text-blue-500 h-8 w-8 text-center flex items-center justify-center"
                  >i</span
                >
              </span>
              <span class="p-4 flex items-center text-blue-500 text-xs"
                >Learn more about Bugcrowd's VRT.</span
              >
            </div>
          </div>

          <div class="col-span-1">
            <h3 class="text-xl mb-4">Vulnerability Rewarded</h3>
            <div class="border border-gray-300 border-solid rounded-lg mb-8">
              <h1 class="p-6 text-lg">0</h1>
            </div>

            <h3 class="text-xl mb-4">Known issues</h3>
            <div class="border border-gray-300 border-solid rounded-lg mb-8">
              <p class="p-4 text-sm">
                Counts of <span class="text-blue-500">P1</span> -
                <span class="color-purple">P4</span> vulnerabilities, including
                imported issues tracked outside of Bugcrowd. Excludes
                <span class="color-purple">Our of scope vulnerabilities</span>
              </p>
            </div>

            <h3 class="text-xl mb-4">Unique</h3>
            <div
              class="border border-gray-300 border-solid rounded-lg mb-8 flex flex-row items-center justify-between p-4 "
            >
              <p class="text-sm">
                Issues in <span class="text-blue-500">Triaged </span
                ><span class="color-purple"> Unresolved Won't fix</span>
              </p>
              <h1>0</h1>
            </div>

            <h3 class="text-xl mb-4">Total</h3>
            <div
              class="border border-gray-300 border-solid rounded-lg mb-8 flex flex-row items-center justify-between p-4 "
            >
              <p class="text-sm">
                Includes <span class="color-purple"> Duplicate </span> of unique
                known issues.
              </p>
              <h1>0</h1>
            </div>

            <h3 class="text-xl mb-4">Hall of Fame</h3>
            <div class="border border-gray-300 border-solid rounded-lg mb-8">
              <p class="text-sm py-10 pl-3 pr-10">The hall of fame is empty.</p>
            </div>

            <h3 class="text-xl mb-4">Recently joined</h3>
            <div class="border border-gray-300 border-solid rounded-lg mb-8">
              <div class="flex flex-wrap pt-10 px-4">
                <img
                  class="h-8 w-8 rounded-full inline mr-3 my-2"
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
                <img
                  class="h-8 w-8 rounded-full inline mr-3 my-2"
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
                <img
                  class="h-8 w-8 rounded-full inline mr-3 my-2"
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
                <img
                  class="h-8 w-8 rounded-full inline mr-3 my-2"
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
                <img
                  class="h-8 w-8 rounded-full inline mr-3 my-2"
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
                <img
                  class="h-8 w-8 rounded-full inline mr-3 my-2"
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
                <img
                  class="h-8 w-8 rounded-full inline mr-3 my-2"
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
                <img
                  class="h-8 w-8 rounded-full inline mr-3 my-2"
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
                <img
                  class="h-8 w-8 rounded-full inline mr-3 my-2"
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
                <img
                  class="h-8 w-8 rounded-full inline mr-3 my-2"
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
              <p class="text-sm text-gray-500 p-4">11 Total</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hall from "@/components/hall/hall.vue";
import mainheader from "../header/header";

export default {
  name: "programDetails",
  components: {
    Hall,
    mainheader,
  },
};
</script>

<style>
table.targets_table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

table.targets_table th {
  background-color: #f2f2f2;
  /* width: 25%; */
}

.targets_table th,
td {
  text-align: left;
  padding: 16px;
}

.targets_table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.active_tab {
  border-bottom: 3px solid #df74fa;
}

.color-purple {
  color: #df74fa;
}

@media only screen and (max-width: 44.69em) { /** 715px / 16 */
    .hallOfFame_tab a {
        font-size: 14px;
    }
}
</style>
