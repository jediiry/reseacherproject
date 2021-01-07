import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../src/assets/css/costume.css";
import modal from "../src/components/modal/modal";
import displayPlugin from "./plugins/plugins";
import dropdown from "../src/components/dropdown/dropdown";

Vue.config.productionTip = false;
Vue.component("modal", modal);
Vue.component("dropdown", dropdown);
Vue.use(displayPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
