import axios from 'axios';

axios.defaults.baseURL = '/api';

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // TODO: error handler
    return Promise.reject(error);
  }
);

const useHttp = () => axios;

export default {
  install(app) {
    app.config.globalProperties.$http = axios;
    app.provide('http', axios);
  }
};
export { useHttp };
