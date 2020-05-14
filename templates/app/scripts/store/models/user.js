import { reactive, toRefs } from 'vue';
import axios from 'axios';
import { DEBUG } from '@/config';

export default {
  setup() {
    const state = reactive({
      menu: []
    });

    const getMenu = async () => {
      let url = `/menu${DEBUG ? '' : '.json'}`;
      let response = await axios.get(url);
      let { code, data, message } = response;

      if (code === 200) {
        state.menu = data;
      } else {
        alert(message);
      }
    };

    return {
      ...toRefs(state),
      getMenu
    };
  }
};
