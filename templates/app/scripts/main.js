import { createApp } from 'vue';
import App from '@/views/layouts/app';
import router from '@/routes';
import $http from '@/plugins/$http';
import store from '@/store';
import BalmUI from 'balm-ui';

import '../apis'; // NOTE: Just for dev

const app = createApp(App);

app.use(router);
app.use($http);
app.use(BalmUI, {
  store
});

app.mount('#app');
