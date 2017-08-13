import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import App from './views/layouts/app';
import routes from './routes';
import store from './store';
import event from './store/event';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.prototype.$http = axios;
Vue.prototype.store = store;
Vue.prototype.$event = event;

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
