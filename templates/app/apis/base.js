export function getBase(server) {
  server.get('/menu', () => {
    return {
      code: 200,
      message: 'OK',
      data: [
        {
          name: 'Home',
          url: '/home'
        },
        {
          name: 'Demo',
          url: '/demo',
          children: [
            {
              name: 'BalmUI',
              url: '/demo/balm-ui'
            },
            {
              name: 'BalmUI lite',
              url: '/demo/balm-ui-lite'
            }
          ]
        }
      ]
    };
  });
}
