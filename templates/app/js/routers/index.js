const Home = require('../views/home');
const About = require('../views/about');

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
