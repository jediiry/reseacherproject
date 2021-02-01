<template>
  <div>
    <div v-if="!num">
      <h1 class="greeting-title mb-5">Select Payout Method</h1>
      <div class="flex mb-28">
        <img
          class="mr-5"
          src="../../assets/banktransfer_img.svg"
          @click.prevent="othertab = true"
          alt=""
        />
        <img
          class=""
          src="../../assets/paypal_img.svg"
          @click.prevent="othertab = false"
          alt=""
        />
      </div>

      <div v-if="othertab">
        <div class="grid grid-cols-2 gap-5">
          <div class="col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1">
            <label class="font-bold" for="bank acc">
              Bank Account Country</label
            >
            <input
              type="text"
              class="form-control"
              placeholder="Bank Account Country"
            />
          </div>
          <div class="col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1">
            <label class="font-bold" for="lastname">
              Bank Account Currency</label
            >
            <input
              type="text"
              class="form-control border-none"
              placeholder="Nigerian Naiara (NGN)"
            />
          </div>
          <div class="col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1">
            <label class="font-bold" for="lastname"> SWIFT BICSWIFT BIC</label>
            <input
              type="text"
              class="form-control border-none"
              placeholder="ABCDEFGHIFJK"
            />
          </div>
          <div class="col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1">
            <label class="font-bold" for="lastname"> Bank Account Name</label>
            <input
              type="text"
              class="form-control border-none"
              placeholder="Jame John"
            />
          </div>
          <div class="col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1">
            <label class="font-bold" for="lastname">
              Nigeria Uniform Bank Account Number</label
            >
            <input
              type="text"
              class="form-control border-none"
              placeholder="NUBAN has 10 digits"
            />
          </div>
        </div>

        <!-- <div class="my-5">
          <label class="font-bold" for="dob"> SWIFT BICSWIFT BIC</label>
          <div class="grid grid-cols-3 gap-5">
            <div
              class="col-span-3 xs:col-span-3 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1"
            >
              <input
                type="text"
                class="form-control"
                placeholder="NUBAN has 10 digits"
              />
            </div>
            <div
              class="col-span-3 xs:col-span-3 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1"
            >
              <label class="font-bold" for="bank acc">
                Nigeria Uniform Bank Account Number</label
              >
              <input
                type="text"
                class="form-control"
                placeholder="  NUBAN has 10 digits"
              />
            </div>
          </div>
        </div> -->

        <div class="flex payment_footer">
          <button class="cancelBtn mr-4 px-4">Cancel</button>
          <button class="updateBtn">Update Settings</button>
        </div>
      </div>
      <div v-else>
        <div class="grid grid-cols-2 gap-5 items-center">
          <div class="col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1">
            <label class="font-bold" for="bank acc">
              Paypal email address</label
            >
            <input type="text" class="form-control" placeholder="email" />
          </div>
          <div>
            <button
              type="button"
              @click="num = false"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-pink-300 text-white shadow-sm px-4 py-2 bg-pink font-two font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              proceed
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="my-5">
        <div class="grid grid-cols-2 gap-5">
          <div
            class="col-span-3 xs:col-span-3 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1"
          >
            <label for="name">First name</label>
            <input type="text" class="form-control" placeholder="First name" />
          </div>
          <div
            class="col-span-3 xs:col-span-3 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1"
          >
            <label for="name">Last name</label>
            <input type="text" class="form-control" placeholder="Last name" />
          </div>
          <div
            class="col-span-3 xs:col-span-3 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1"
          >
            <label for="name">Date of Birth</label>
            <input type="date" class="form-control" placeholder="Last name" />
          </div>
          <div
            class="col-span-3 xs:col-span-3 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1"
          >
            <label for="name">Address</label>
            <input type="text" class="form-control" placeholder="Address" />
          </div>
          <div
            class="col-span-3 xs:col-span-3 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1"
          >
            <label for="name">Address 2 Optional</label>
            <input type="text" class="form-control" placeholder="Address 2" />
          </div>
          <div
            class="col-span-3 xs:col-span-3 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1"
          >
            <label for="name">City</label>
            <input type="text" class="form-control" placeholder="City" />
          </div>
          <div
            class="col-span-3 xs:col-span-3 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1"
          >
            <label for="name">Postal/Zip Code</label>
            <input type="text" class="form-control" placeholder="Postal Code" />
          </div>
          <div
            class="col-span-3 xs:col-span-3 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1"
          >
            <label for="name">Country</label>
            <input type="text" class="form-control" placeholder="Country" />
          </div>
          <div
            class="col-span-3 xs:col-span-3 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1"
          >
            <button
              type="button"
              @click="num = false"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-pink-300 text-white shadow-sm px-4 py-2 bg-pink font-two font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "settingspayment",
  data() {
    return {
      num: true,
      othertab: true,
    };
  },
};
</script>

<style>
.cancelBtn {
  background: #fff;
}
.updateBtn {
  background: #da04f2;
  color: #fff;
  padding: 8px 16px;
}

@media only screen and (max-width: 23.75em) {
  /** 380px / 16 */
  .payment_footer {
    flex-direction: column;
  }

  .cancelBtn {
    margin-bottom: 15px;
  }
}
</style>
