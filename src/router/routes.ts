import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [

  {
    path: '/',
    component: () => import('pages/MainHome.vue')
  },
  {
    path: '/Order',
    name: 'Order',
    component: () => import('pages/OrderPage.vue'),
  },
  {
    path: '/Customer',
    component: () => import('pages/CustomerPage.vue'),
  },

  {
    path: '/Order',
    name: 'Order',
    component: () => import('pages/OrderPage.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/LoginPage.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    name: 'Error',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
