import Vue from 'vue';
import $http from './plugins/$http';
import App from './views/layouts/app';
import router from './routes';
import store from './store';

Vue.config.productionTip = false;
Vue.use($http);

new Vue({
  el: '#app',
  components: { App },
  template: '<app/>',
  router
});
