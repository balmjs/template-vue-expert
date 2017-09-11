import event from './event';
import API from '../api';

export default {
  debug: true,
  state: {
    menu: []
  },
  setMenu(items) {
    if (this.debug) {
      console.log('setMenu', items);
    }
    this.state.menu = items;
    // For async
    event.$emit('SET_MENU', items);
  },
  async getMenu() {
    if (!this.state.menu.length) {
      let data = await API.getMenu();
      this.setMenu(data);
    }

    return this.state.menu;
  }
};
