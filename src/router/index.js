import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/Home/HomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/quem-somos',
    name: 'quem-somos',
  },
  {
    path: '/produtos',
    name: 'produtos',
  },
  {
    path: '/parceiros',
    name: 'parceiros',
  },
  {
    path: '/contatos',
    name: 'contatos',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
