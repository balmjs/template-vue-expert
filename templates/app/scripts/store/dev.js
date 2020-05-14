import { onBeforeMount } from 'vue';

const el = document.createElement('div');

export default {
  template: '<div v-if="false"></div>',
  setup() {
    onBeforeMount(() => {
      document.body.appendChild(el);
    });
  }
};
