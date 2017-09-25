<template>
  <div class="page--about ui-container">
    <my-menu isSubmenu :items="items"></my-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import MyMenu from '../components/menu';

export default {
  metaInfo: {
    title: 'About'
  },
  components: {
    MyMenu
  },
  data() {
    return {
      items: []
    };
  },
  async created() {
    let menu = this.$store.state.menu;
    if (menu.length) { // sync data
      this.items = menu[1].children;
    } else { // async data (just for first load)
      this.$event.$on('SET_MENU', data => {
        this.items = data[1].children;
      });
    }
  }
};
</script>
