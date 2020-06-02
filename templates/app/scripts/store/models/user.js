import axios from 'axios';
import { isDev } from '@/config';

export default {
  data() {
    return {
      menu: []
    };
  },
  methods: {
    async getMenu() {
      let url = `/menu${isDev ? '' : '.json'}`;
      let response = await axios.get(url);
      let { code, data, message } = response;

      if (code === 200) {
        this.menu = data;
      } else {
        alert(message);
      }
    }
  }
};
