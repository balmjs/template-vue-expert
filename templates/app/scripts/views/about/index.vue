<template>
  <div class="page--about ui-container">
    <my-menu isSubmenu :items="items"></my-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import MyMenu from '../components/menu';

export default {
  components: {
    MyMenu
  },
  data() {
    return {
      items: []
    };
  },
  async created() {
    let menu = this.store.getMenu();
    if (menu.length) { // sync data
      this.items = menu[1].children;
    } else { // async data (just for first load)
      this.$event.$on('setMenu', data => {
        this.items = data[1].children;
      });
    }
  }
};
</script>
