import axios from 'axios';

axios.defaults.baseURL = '/api';

axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    // TODO: response handler
    return response.data;
  },
  error => {
    // TODO: error handler
    return Promise.reject(error);
  }
);

export default {
  install(Vue) {
    Vue.prototype.$http = axios;
  }
};
