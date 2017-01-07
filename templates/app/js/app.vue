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
export default {
  name: 'app',
  data() {
    return {
      menus: [{
        name: 'Home',
        url: '/home'
      }, {
        name: 'About',
        url: '/about'
      }]
    };
  }
};
</script>
