import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './views/layouts/app';
import routes from './routes';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
