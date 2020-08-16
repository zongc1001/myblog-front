import Vue from "vue";

import VueRouter from "vue-router";
import demo from "./components/demo";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "demo",
    component: demo,
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import("./views/signup"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import("./views/login.vue"),
  },
];

const router = new VueRouter({
  routes
});

export default router;
