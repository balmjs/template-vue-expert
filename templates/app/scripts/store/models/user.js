import { isDev } from '@/config';

export default {
  data() {
    return {
      menu: [] // shared data
    };
  },
  methods: {
    async getMenu() {
      let url = `/menu${isDev ? '' : '.json'}`; // NOTE: for mock
      let response = await this.$http.get(url);
      let { code, data, message } = response;

      if (code === 200) {
        this.menu = data;
      } else {
        alert(message);
      }
    }
  }
};
