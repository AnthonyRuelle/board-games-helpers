import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/7-wonders-architect',
    name: '7WondersArchitect',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/7WondersArchitect.vue'),
  },
  {
    path: '/colt-express',
    name: 'ColtExpress',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/ColtExpress.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Contact.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
