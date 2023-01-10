import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare, faInstagramSquare, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

library.add(faFacebookSquare, faInstagramSquare, faTelegram);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
