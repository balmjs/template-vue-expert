<template>
  <div class="container">
    <header class="hero">
      <img :src="logo" alt />
      <hello></hello>
    </header>
    <hr />
    <div class="content">
      <my-menu :items="store.demoMenu"></my-menu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Hello from '@/views/components/hello';
import MyMenu from '@/views/components/my-menu';
import logo from '@/assets/logo.png';
import { useStore } from 'balm-ui';

export default {
  name: 'App',
  components: {
    Hello,
    MyMenu
  },
  setup() {
    const store = useStore();

    onMounted(async () => {
      await store.getDemoMenu();
    });

    return {
      store,
      logo
    };
  }
};
</script>
