<template>
  <nav class="menu-container">
    <ul :class="['my-menu', { submenu: isSubmenu }]">
      <li v-for="(item, index) in menu" :key="index">
        <router-link activeClass="active" :to="item.url">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'my-menu',
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
  setup(props) {
    const menu = computed(() => {
      return props.menu;
    });

    return {
      menu
    };
  }
};
</script>
