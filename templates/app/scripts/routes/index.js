import Home from '../views/home';
import About from '../views/about';
import NotFound from '../views/not-found';

let routes = [{
  path: '/home',
  name: 'home',
  component: Home,
  alias: '/'
}, {
  path: '/about',
  name: 'about',
  component: About
}, {
  path: '*',
  component: NotFound
}];

export default routes;
