<template>
  <div class="container">
    <header class="hero">
      <img :src="logo" alt="">
      <hello></hello>
    </header>
    <hr>
    <div class="content">
      <my-menu :items="items"></my-menu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Hello from '../components/hello';
import MyMenu from '../components/my-menu';
import logo from '../../../images/logo.png';

export default {
  name: 'app',
  components: {
    Hello,
    MyMenu
  },
  data() {
    return {
      logo,
      items: []
    };
  },
  async created() {
    this.items = await this.$store.getMenu();
  }
};
</script>
