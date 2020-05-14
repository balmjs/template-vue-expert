import { createApp } from 'vue';
import App from '@/views/layouts/app';
import router from '@/routes';
import $http from '@/plugins/$http';
import $bus from '@/plugins/$bus';
import $store from '@/plugins/$store';
import '../apis';

const app = createApp(App);

app.use(router);
app.use($http);
app.use($bus);
app.use($store);

app.mount('#app');
