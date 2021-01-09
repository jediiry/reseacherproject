import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import mainprogram from "../views/mainprogram";
import maindiscovery from "../views/maindiscovery";
import mainleadership from "../views/mainleadership";
import mainpayment from "../views/mainpayment";
import mainsubmission from "../views/mainsubmission";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/program",
    name: "program",
    component: mainprogram,
  },
  {
    path: "/discovery",
    name: "maindiscovery",
    component: maindiscovery,
  },
  {
    path: "/leadership",
    name: "mainleadership",
    component: mainleadership,
  },
  {
    path: "/payment",
    name: "mainpayment",
    component: mainpayment,
  },
  {
    path: "/submission",
    name: "submission",
    component: mainsubmission,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
