import { createApp } from 'vue';
import App from '@/views/layouts/app';
import router from '@/routes';
import http from '@/plugins/http';
import myStore from '@/store';
import BalmUI from 'balm-ui';

import '../apis'; // NOTE: Just for dev

const app = createApp(App);

app.use(router);
app.use(http);
app.use(BalmUI, {
  $store: myStore
});

app.mount('#app');
