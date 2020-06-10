// export function setBase(server) {}

export function getBase(server) {
  server.get('/menu', (schema, request) => {
    return {
      code: 200,
      message: 'OK',
      data: [
        {
          name: 'Home',
          url: '/home'
        },
        {
          name: 'About',
          url: '/about',
          children: [
            {
              name: 'BalmUI',
              url: '/about/balm-ui'
            },
            {
              name: 'BalmUI lite',
              url: '/about/balm-ui-lite'
            }
          ]
        }
      ]
    };
  });
}
