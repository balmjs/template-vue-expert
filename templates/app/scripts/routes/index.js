import Home from '../views/home';
import NotFound from '../views/not-found';
import aboutRoutes from './about';

let baseRoutes = [{
  path: '/home',
  name: 'home',
  component: Home,
  alias: '/'
}, {
  path: '*',
  component: NotFound
}];

let routes = baseRoutes.concat(aboutRoutes);

export default routes;
