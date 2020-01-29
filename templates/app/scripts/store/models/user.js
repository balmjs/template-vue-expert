import axios from 'axios';
import { DEBUG } from '@/config';

export default {
  data() {
    return {
      menu: []
    };
  },
  methods: {
    async getMenu() {
      let url = `/menu${DEBUG ? '' : '.json'}`;
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
