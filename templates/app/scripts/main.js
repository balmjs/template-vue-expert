import { createApp } from 'vue';
import App from '@/views/layouts/app';
import router from '@/routes';
import $bus from '@/plugins/$bus';
import $http from '@/plugins/$http';
import $store from '@/plugins/$store';
import '../apis';

const app = createApp(App);

app.use(router);
app.use($bus);
app.use($http);
app.use($store);

app.mount('#app');
