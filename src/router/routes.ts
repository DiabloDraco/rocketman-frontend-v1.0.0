import { RouteRecordRaw } from 'vue-router'
import Aside from 'components/aside/HAside.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    components: {
      default: () => import('pages/MainHome.vue'),
      Aside
    },
  },
  {
    path: '/Order',
    name: 'Order',
    component: () => import('pages/OrderPage.vue'),
  },
  {
    path: '/Customer',
    name: 'Customer',
    component: () => import('pages/CustomerPage.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('pages/LoginPage.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    name: 'Error',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
