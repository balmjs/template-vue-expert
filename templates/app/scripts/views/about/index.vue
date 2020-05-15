<template>
  <div class="page--about ui-container">
    <my-menu isSubmenu :items="$store.menu"></my-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import { computed, ref, inject } from 'vue';
import MyMenu from '@/views/components/my-menu';

export default {
  components: {
    MyMenu
  },
  setup() {
    console.log('about page');
    const $store = inject('$store');

    console.log($store.menu);

    // const menu = computed(() => {
    //   return $store.menu.length ? $store.menu[1].children : [];
    // });

    return {
      $store
    };
  }
};
</script>
