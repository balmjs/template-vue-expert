import DemoIndex from '@/views/demo/index';
import DemoBalmUI from '@/views/demo/balm-ui';
import DemoBalmCLI from '@/views/demo/balm-cli';

const demoRoutes = [
  {
    path: '/demo',
    name: 'demo',
    component: DemoIndex,
    redirect: '/demo/balm-ui',
    children: [
      {
        path: 'balm-ui',
        name: 'demo.balm-ui',
        component: DemoBalmUI
      },
      {
        path: 'balm-cli',
        name: 'demo.balm-cli',
        component: DemoBalmCLI
      }
    ]
  }
];

export default demoRoutes;
