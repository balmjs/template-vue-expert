import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './app';
import routes from './routers';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
});
