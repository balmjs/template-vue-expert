export default {
  install(Vue, options) {
    Vue.prototype.$store = new Vue(options);
  }
};
