import axios from 'axios';

export default {
  data() {
    return {
      menu: []
    };
  },
  methods: {
    async getMenu() {
      let resp = await axios.get('/data/menu.json');
      let { code, data, message } = resp.data;

      if (code === 200) {
        this.menu = data;
      } else {
        alert(message);
      }
    }
  }
};
