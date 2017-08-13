<template>
  <div class="container">
    <header>
      <img :src="logo" alt="">
      <my-hello></my-hello>
    </header>
    <hr>
    <div class="content">
      <my-menu :items="items"></my-menu>
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
      logo,
      items: []
    };
  },
  async created() {
    if (!this.store.getMenu().length) {
      let response = await this.$http.get('/data/menu.json');
      this.store.setMenu(response.data);
      // sync data
      this.items = this.store.getMenu();
    }
  }
};
</script>
