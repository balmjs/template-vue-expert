const config = require('./config/balmrc');
const publish = require('./config/balm.publish');

const api = (mix) => {
  if (mix.env.isProd) {
    // For test data
    mix.copy('./app/data/*', './dist/api');
  } else {
    // For BalmUI iconfonts
    mix.copy('node_modules/balm-ui/fonts/*', 'app/fonts');
  }

  publish(mix);
};

module.exports = () => {
  return {
    config,
    api
  };
};
