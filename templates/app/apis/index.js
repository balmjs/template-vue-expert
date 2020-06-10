import { isDev } from '@/config';
import { Server, Model } from 'miragejs';
import { getBase } from './base';

if (isDev) {
  const ApiRegExp = /^\/api\//;

  const server = new Server({
    models: {
      menu: Model
    },

    seeds(server) {
      // More data
    },

    routes() {
      this.namespace = '/api';

      getBase(this);
      // More apis
    }
  });

  server.passthrough(request => {
    return !ApiRegExp.test(request.url);
  });
}
