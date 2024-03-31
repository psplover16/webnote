// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import test from '@/views/test.vue';

const routes = [
  //   { path: '/', component: Home },
  { path: '/', redirect: '/JS_basic' },
  {
    path: '/JS_basic',
    component: () => import("@/views/JS_basic.vue"),
    meta: {
      title: 'JS_basic',
    }
  },
  {
    path: '/frontframe',
    component: () => import("@/views/frontframe.vue"),
    meta: {
      title: 'frontframe',
    }
  },
  {
    path: '/frontEngineering',
    component: () => import("@/views/frontEngineering.vue"),
    meta: {
      title: 'frontEngineering',
    }
  },
  {
    path: '/dom_event',
    component: () => import("@/views/dom_event.vue"),
    meta: {
      title: 'dom_event',
    }
  },
  {
    path: '/RWD',
    component: () => import("@/views/RWD.vue"),
    meta: {
      title: 'RWD',
    }
  },
  {
    path: '/webpage',
    component: () => import("@/views/webpage.vue"),
    meta: {
      title: 'webpage',
    }
  },
  {
    path: '/html',
    component: () => import("@/views/html.vue"),
    meta: {
      title: 'html',
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;