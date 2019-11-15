import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
import Home from '../components/Home.vue';
import Page1 from '../components/Page1.vue';
import Page2 from '../components/Page2.vue';
import Page3 from '../components/Page3.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/page-1',
    name: 'page1',
    component: Page1,
  },
  {
    path: '/page-2',
    name: 'page2',
    component: Page2,
  },
  {
    path: '/page-3',
    name: 'page3',
    component: Page3,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
