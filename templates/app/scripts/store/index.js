import event from './event';

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
  getMenu() {
    return this.state.menu;
  }
};
