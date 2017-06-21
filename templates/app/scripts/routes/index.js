import Home from '../views/home';
import About from '../views/about';

let routes = [{
  path: '/home',
  name: 'home',
  component: Home,
  alias: '/'
}, {
  path: '/about',
  name: 'about',
  component: About
}];

export default routes;
