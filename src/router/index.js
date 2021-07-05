import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/codes',
    name: 'Codes',
    component: () => import('../views/Code/Codes.vue')
  },
  {
    path: '/codes/code/:id',
    name: 'Code',
    component: () => import('../views/Code/Code.vue')
  },
  {
    path: '/panel/share',
    name: 'CodeShare',
    component: () => import('../views/Code/CodeShare.vue')
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import('../views/Faq.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
