<template>
  <div class="page--ui ui-container">
    <my-menu isSubmenu :items="items"></my-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import MyMenu from '@/views/components/my-menu';

export default {
  metaInfo: {
    title: 'UI'
  },
  components: {
    MyMenu
  },
  computed: {
    items() {
      return this.$store.menu.length ? this.$store.menu[1].children : [];
    }
  }
};
</script>
