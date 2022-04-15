<template>
  <div class="page--demo ui-container">
    <my-menu isSubmenu :items="submenu"></my-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import { computed } from 'vue';
import MyMenu from '@/views/components/my-menu';
import menu from '@/assets/menu.json';

export default {
  components: {
    MyMenu
  },
  setup() {
    const submenu = computed(() => menu[1].children);

    return {
      submenu
    };
  }
};
</script>
