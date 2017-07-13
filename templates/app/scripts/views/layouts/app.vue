<template>
  <div class="container">
    <header>
      <img :src="logo" alt="">
      <my-hello></my-hello>
    </header>
    <hr>
    <div class="content">
      <my-menu></my-menu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MyHello from '../components/hello';
import MyMenu from '../components/menu';
import logo from '../../../images/logo.png';

export default {
  name: 'app',
  components: {
    MyHello,
    MyMenu
  },
  data() {
    return {
      logo
    };
  }
};
</script>
