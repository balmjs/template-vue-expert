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
import hello from '../components/hello';
import myMenu from '../components/my-menu';
import logo from '../../../images/logo.png';

export default {
  name: 'app',
  components: {
    hello,
    myMenu
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
