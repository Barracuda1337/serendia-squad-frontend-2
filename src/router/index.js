import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/codes",
      name: "Codes",
      component: () => import("../views/Code/Codes.vue"),
    },
    {
      path: "/codes/code/:id",
      name: "Code",
      component: () => import("../views/Code/Code.vue"),
    },
    {
      path: "/panel/code",
      name: "CodeEditorPanel",
      component: () => import("../views/Panel/CodeEditorPanel.vue"),
    },
    {
      path: "/faq",
      name: "FAQ",
      component: () => import("../views/Faq.vue"),
    },
  ],
});

export default router;
