import { createRouter, createWebHashHistory } from 'vue-router';
import baseRoutes from './base';
import demoRoutes from './demo';

const routes = baseRoutes.concat(demoRoutes);

const history = createWebHashHistory();

const router = createRouter({
  history,
  routes
});

export default router;
