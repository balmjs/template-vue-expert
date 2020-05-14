import { createRouter, createWebHashHistory } from 'vue-router';
import baseRoutes from './base';
import aboutRoutes from './about';

const routes = baseRoutes.concat(aboutRoutes);

const history = createWebHashHistory();

const router = createRouter({
  history,
  routes
});

export default router;
