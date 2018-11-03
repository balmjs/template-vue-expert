import axios from 'axios';

export default {
  data() {
    return {
      menu: []
    };
  },
  methods: {
    async getMenu() {
      let response = await axios.get('/data/menu.json');
      let { code, data, message } = response;

      if (code === 200) {
        this.menu = data;
      } else {
        alert(message);
      }
    }
  }
};
