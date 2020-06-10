<template>
  <nav class="menu-container">
    <ul :class="['my-menu', { submenu: isSubmenu }]">
      <template v-for="(item, index) in menu">
        <li :key="index">
          <router-link :to="item.url" active-class="active">
            {{ item.name }}
          </router-link>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MyMenu',
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    isSubmenu: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    menu() {
      return this.items;
    }
  }
};
</script>
