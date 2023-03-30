import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name:'home',
    component: () => import('pages/MainHome.vue'),
  },
  {
    path: '/Order',
    name: 'Order',
    component: () => import('pages/OrderPage.vue'),
  },
  {
    path: '/Customer',
    name: 'Customer',
    component: () => import('src/pages/header.vue'),
  },
  {
    path: '/       ',
    name: 'Customer',
    component: () => import('src/pages/.vue'),
  },
  {
    path: '/customer/:id',
    name: 'customerID',
    component: () => import('pages/OrderPage.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('pages/LoginPage.vue'),
  },
  {
    path: '/customer',
    name: 'Customer',
    component: () => import('pages/CustomerPage.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    name: 'Error',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
