import { createApp } from 'vue';
import user from './models/user';
import { DEBUG } from '@/config';

export default createApp({
  name: 'store',
  mixins: [DEBUG ? dev : {}, user]
});
