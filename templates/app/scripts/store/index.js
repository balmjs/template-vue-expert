import { createApp } from 'vue';
import { DEBUG } from '@/config';
import dev from './dev';
import user from './models/user';

export default createApp({
  name: 'store',
  mixins: [DEBUG ? dev : {}, user]
});
