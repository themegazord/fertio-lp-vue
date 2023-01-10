import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/Home/HomeView.vue';
import QuemSomos from '../views/QuemSomos/QuemSomos.vue';
import Formulario from '../views/Formulario/FormularioView.vue';
import Page404 from '../views/NotFound/NotFound.vue';

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
    component: QuemSomos,
  },
  {
    path: '/formulario',
    name: 'formulario',
    component: Formulario,
  },
  {
    path: '/produtos',
    name: 'produtos',
    component: Page404,
  },
  {
    path: '/parceiros',
    name: 'parceiros',
    component: Page404,
  },
  {
    path: '/contatos',
    name: 'contatos',
    component: Page404,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
