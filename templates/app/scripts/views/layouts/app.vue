<template>
  <div class="container">
    <header class="hero">
      <img :src="logo" alt />
      <hello></hello>
    </header>
    <hr />
    <div class="content">
      <my-menu :items="menu"></my-menu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Hello from '@/views/components/hello';
import MyMenu from '@/views/components/my-menu';
import logo from '@/assets/logo.png';
import menu from '@/assets/menu.json';

export default {
  name: 'App',
  components: {
    Hello,
    MyMenu
  },
  setup() {
    return {
      logo,
      menu
    };
  }
};
</script>
