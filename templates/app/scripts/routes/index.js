import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import baseRoutes from './base';
import demoRoutes from './demo';

Vue.use(VueRouter);
Vue.use(VueMeta);

let routes = baseRoutes.concat(demoRoutes);

const router = new VueRouter({
  routes
});

export default router;
