<template>
  <nav>
    <ul class="site-menu">
      <li v-for="menu in menus">
        <router-link :to="menu.url">{{ menu.name }}</router-link>
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
      menus: []
    };
  },
  async created() {
    if (!store.menus.length) {
      let response = await this.$http.get('/data/menu.json');
      store.menus = response.data;
      this.menus = store.menus;
    }
  }
};
</script>
