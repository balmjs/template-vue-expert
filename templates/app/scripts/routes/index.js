import { createRouter } from 'vue-router';
import baseRoutes from './base';
import aboutRoutes from './about';

let routes = baseRoutes.concat(aboutRoutes);

const router = createRouter({
  routes
});

export default router;
