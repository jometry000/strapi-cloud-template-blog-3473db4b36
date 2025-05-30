export default {
  routes: [
    {
      method: 'GET',
      path: '/business-hours',
      handler: 'business-hour.find',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/business-hours/:id',
      handler: 'business-hour.findOne',
      config: {
        auth: false,
      },
    },
  ],
};
