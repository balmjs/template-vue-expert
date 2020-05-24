import Home from '@/views/home';
import NotFound from '@/views/not-found';

let baseRoutes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    alias: '/'
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
];

export default baseRoutes;
