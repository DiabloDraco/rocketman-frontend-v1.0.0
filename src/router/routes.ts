import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name:'home',
    component: () => import('pages/ProductPage.vue'),
  },
  {
    path: '/Order',
    name: 'Order',
    component: () => import('pages/OrderPage.vue'),
  },
  {
    path: '/Category',
    name: 'Category',
    component: () => import('pages/ProductPage.vue')
  },
  {
    path: '/Client/:id',
    name: 'clientID',
    component: () => import('pages/ClientPage.vue'),
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('pages/LoginPage.vue'),
  },
  {
    path: '/Client',
    name: 'Client',
    component: () => import('pages/ClientPage.vue'),
  },
  {
    path: '/Takliflar',
    name: 'Takliflar',
    component: () => import('src/pages/SuggestionPage.vue'),
  },
  {
    path: '/Suggestions',
    name: 'Suggestions',
    component: () => import('pages/SuggestionPage.vue')
  },
  {
    path: '/:catchAll(.*)*',
    name: 'Error',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
