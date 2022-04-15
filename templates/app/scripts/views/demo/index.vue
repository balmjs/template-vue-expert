<template>
  <div class="page--about ui-container">
    <my-menu isSubmenu :items="submenu"></my-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import { computed } from 'vue';
import MyMenu from '@/views/components/my-menu';
import demoMenu from '@/assets/menu.json';

export default {
  components: {
    MyMenu
  },
  setup() {
    const submenu = computed(() => demoMenu[1].children);

    return {
      submenu
    };
  }
};
</script>
