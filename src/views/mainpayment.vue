<template>
  <div class="grid grid-cols-7 mainfade">
    <sidebar></sidebar>
    <div class="col-start-2 col-span-11">
      <payment></payment>
      <!-- <payment-two></payment-two> -->

    </div>
  </div>
</template>

<script>

import Payment from "../components/payment/payment.vue";
// import PaymentTwo from "../components/payment/payment2.vue";

// @ is an alias to /src
import sidebar from "../components/sidebar/sidebar.vue";

export default {
  name: "maindiscovery",
  components: {
    sidebar,
    Payment,
    // PaymentTwo,

  },
};
</script>
