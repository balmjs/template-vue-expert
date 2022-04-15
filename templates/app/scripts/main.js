import Vue from 'vue';
import App from '@/views/layouts/app';
import router from '@/routes';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  components: { App },
  template: '<app/>',
  router
});
