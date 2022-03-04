import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './base';

const history = createWebHashHistory();

const router = createRouter({
  history,
  routes
});

export default router;
