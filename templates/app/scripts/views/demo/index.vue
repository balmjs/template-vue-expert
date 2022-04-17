<template>
  <div class="page-demo">
    <my-menu isSubmenu :items="submenu"></my-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import MyMenu from '@/views/components/my-menu';
import menu from '@/assets/menu.json';

export default {
  components: {
    MyMenu
  },
  computed: {
    submenu() {
      return menu[1].children;
    }
  }
};
</script>
