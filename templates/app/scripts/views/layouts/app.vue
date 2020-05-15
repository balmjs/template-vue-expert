<template>
  <header class="hero">
    <img :src="logo" alt />
    <hello></hello>
  </header>
  <hr />
  <div class="content">
    <my-menu :items="$store.menu"></my-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import { inject, ref, onMounted } from 'vue';
import Hello from '@/views/components/hello';
import MyMenu from '@/views/components/my-menu';
import logo from '@/assets/logo.png';

function init() {
  const $bus = inject('$bus');

  $bus.$on('on-loading', () => {
    console.log('on-loading');
  });

  $bus.$on('off-loading', () => {
    console.log('off-loading');
  });
}

export default {
  name: 'app',
  components: {
    Hello,
    MyMenu
  },
  setup() {
    init();

    const $store = inject('$store');

    onMounted(async () => {
      const $http = inject('$http');

      let url = `/menu`;
      let response = await $http.get(url);
      let { code, data, message } = response;

      if (code === 200) {
        $store.menu = ref(data);
      } else {
        alert(message);
      }
    });

    return {
      $store,
      logo
    };
  }
};
</script>
