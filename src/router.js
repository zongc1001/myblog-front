import Vue from "vue";

import VueRouter from "vue-router";
import home from "./views/home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
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
  {
    path: "/editArticle",
    name: "editArticle",
    component: () =>
      import("./views/editArticle.vue"),
  },
  {
    path: "/editArticle/:id",
    props: true,
    component: () =>
      import("./views/editArticle.vue"),
  },
  
  {
    path: "/articleList",
    name: "articleList",
    component: () =>
      import("./views/articleList.vue"),
  },
  {
    path: "/articles/:id",
    props: true,
    component: () => 
      import("./views/article.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
