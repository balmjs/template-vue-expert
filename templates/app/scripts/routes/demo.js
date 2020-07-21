import DemoIndex from '@/views/demo/index';
import DemoBalmUI from '@/views/demo/balm-ui';
import DemoBalmUILite from '@/views/demo/balm-ui-lite';

let routes = [
  {
    path: '/demo',
    name: 'demo',
    component: DemoIndex,
    redirect: '/demo/balm-ui',
    children: [
      {
        path: 'balm-ui',
        name: 'about.balm-ui',
        component: DemoBalmUI
      },
      {
        path: 'balm-ui-lite',
        name: 'about.balm-ui-lite',
        component: DemoBalmUILite
      }
    ]
  }
];

export default routes;
