import Vue from 'vue';
import App from '@/views/layouts/app';
import router from '@/routes';
import http from '@/plugins/http';
import myStore from '@/store';
// BalmUI
import BalmUI from 'balm-ui';
import 'balm-ui/dist/balm-ui.css';

import '../apis'; // NOTE: Just for dev

Vue.config.productionTip = false;

Vue.use(http);
Vue.use(BalmUI, {
  $store: myStore
});

new Vue({
  el: '#app',
  components: { App },
  template: '<app/>',
  router
});
