import Vue from 'vue';
import user from './models/user';
import { DEBUG } from '@/config';

export default new Vue({
  name: 'store',
  mixins: [DEBUG ? dev : {}, user]
});
