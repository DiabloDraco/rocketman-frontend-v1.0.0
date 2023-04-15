import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('src/pages/HrefPage.vue'),
  },
  {
    path: '/Order',
    name: 'Order',
    component: () => import('pages/OrderPage.vue')
  },
  {
    path: '/order/foods',
    name: 'foods',
    component: () => import('pages/CategoryFood.vue')
  },
  {
    path: '/Category',
    name: 'Category',
    component: () => import('pages/ProductPage.vue'),
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
    component: () => import('pages/SuggestionPage.vue'),
  },
  {
    path: '/settings',
    component: () => import('pages/SettingsPage.vue'),
    children: [
      {
        path: 'users',
        component: () => import('pages/UsersPage.vue'),
      },
      {
        path: 'drivers',
        component: () => import('pages/DriverPage.vue'),
      },
      {
        path: 'payment',
        component: () => import('pages/PaymentPage.vue'),
      },
      {
        path: 'info',
        component: () => import('pages/InfoPage.vue'),
      },
      {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    name: 'Error',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
