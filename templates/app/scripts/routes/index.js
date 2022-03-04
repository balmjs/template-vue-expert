import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import routes from './base';

Vue.use(VueRouter);
Vue.use(VueMeta);

const router = new VueRouter({
  routes
});

export default router;
