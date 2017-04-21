<template>
  <div class="container">
    <nav>
      <ul>
        <li v-for="menu in menus">
          <router-link :to="menu.url">{{ menu.name }}</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import store from '../../store';

export default {
  name: 'app',
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
