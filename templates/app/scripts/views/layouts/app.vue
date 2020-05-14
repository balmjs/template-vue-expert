<template>
  <header class="hero">
    <img :src="logo" alt />
    <hello></hello>
  </header>
  <hr />
  <div class="content">
    <!-- <my-menu :items="$store.menu"></my-menu> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from '@/views/components/hello';
// import MyMenu from '@/views/components/my-menu';
import logo from '@/assets/logo.png';

export default {
  name: 'app',
  components: {
    Hello
    // MyMenu
  },
  setup() {
    // await this.$store.getMenu();

    return {
      logo
    };
  }
};
</script>
