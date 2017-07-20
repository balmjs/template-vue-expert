import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import App from './views/layouts/app';
import routes from './routes';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.prototype.$http = axios;

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
