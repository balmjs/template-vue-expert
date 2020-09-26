<template>
  <div class="container">
    <header class="hero">
      <img :src="logo" alt />
      <hello></hello>
    </header>
    <hr />
    <div class="content">
      <my-menu :items="store.menu"></my-menu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Hello from '@/views/components/hello';
import MyMenu from '@/views/components/my-menu';
import logo from '@/assets/logo.png';
import { useHttp } from '@/plugins';
import { useStore } from 'balm-ui';

export default {
  name: 'App',
  components: {
    Hello,
    MyMenu
  },
  setup(props, ctx) {
    const store = useStore();

    onMounted(async () => {
      const $http = useHttp();

      let url = `/menu`;
      let response = await $http.get(url);
      let { code, data, message } = response;

      if (code === 200) {
        store.menu = data;
      } else {
        alert(message);
      }
    });

    return {
      store,
      logo
    };
  }
};
</script>
