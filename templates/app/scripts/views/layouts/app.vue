<template>
  <div class="container">
    <header class="hero">
      <img :src="logo" />
      <hello></hello>
    </header>
    <div class="content">
      <my-menu :items="$store.menu"></my-menu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Hello from '@/views/components/hello';
import MyMenu from '@/views/components/my-menu';
import logo from '@/assets/logo.png';

export default {
  name: 'App',
  components: {
    Hello,
    MyMenu
  },
  data() {
    return {
      logo
    };
  },
  created() {
    this.$store.getMenu();
  }
};
</script>
