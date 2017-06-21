<template>
  <nav>
    <ul class="site-menu">
      <li v-for="item in menu">
        <router-link :to="item.url">{{ item.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import store from '../../store';

export default {
  name: 'my-menu',
  data() {
    return {
      menu: []
    };
  },
  async created() {
    if (!store.menu.length) {
      let response = await this.$http.get('/data/menu.json');
      store.menu = response.data;
      this.menu = store.menu;
    }
  }
};
</script>
