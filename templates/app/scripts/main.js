import { createApp } from 'vue';
import App from '@/views/layouts/app';
import router from '@/routes';

const app = createApp(App);

app.use(router);

app.mount('#app');
