// src/router/index.js
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import test from "@/views/test.vue";

const routes = [
  //   { path: '/', component: Home },
  { path: "/", redirect: "/JS_basic" },
  {
    path: "/JS_basic",
    component: () => import("@/views/JS_basic.vue"),
    meta: {
      title: "JS_basic",
    },
  },
  {
    path: "/frontframe",
    component: () => import("@/views/frontframe.vue"),
    meta: {
      title: "frontframe",
    },
  },
  {
    path: "/frontEngineering",
    component: () => import("@/views/frontEngineering.vue"),
    meta: {
      title: "frontEngineering",
    },
  },
  {
    path: "/ajax",
    component: () => import("@/views/ajax.vue"),
    meta: {
      title: "ajax",
    },
  },
  {
    path: "/dom_event",
    component: () => import("@/views/dom_event.vue"),
    meta: {
      title: "dom_event",
    },
  },
  {
    path: "/RWD",
    component: () => import("@/views/RWD.vue"),
    meta: {
      title: "RWD",
    },
  },
  {
    path: "/webpage",
    component: () => import("@/views/webpage.vue"),
    meta: {
      title: "webpage",
    },
  },
  {
    path: "/html",
    component: () => import("@/views/html.vue"),
    meta: {
      title: "html",
    },
  },
  {
    path: "/electronPage",
    component: () => import("@/views/electronPage.vue"),
    meta: {
      title: "electronPage",
    },
  },
  {
    path: "/LogicPage",
    component: () => import("@/views/LogicPage.vue"),
    meta: {
      title: "LogicPage",
    },
  },
  {
    path: "/commonly/:id",
    component: () => import("@/views/commonly.vue"),
    // query: {
    //   key1: "commonlyValue1",
    //   key2: "commonlyValue2",
    // },
    name:"commonly",
    meta: {
      title: "commonlyMeta",
    },
  },
  {
    path: "/canvasPage",
    component: () => import("@/views/canvasPage.vue"),
    meta: {
      title: "canvasPage",
    },
  },
  {
    path: "/CSS",
    component: () => import("@/views/CSS.vue"),
    meta: {
      title: "CSS",
    },
  },
  {
    path: "/SVG",
    component: () => import("@/views/SVG.vue"),
    meta: {
      title: "SVG",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
