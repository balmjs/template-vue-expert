import { reactive, toRefs } from 'vue';
import { isDev } from '@/config';
import { useHttp } from '@/plugins/http';

const $http = useHttp();

const state = reactive({
  demoMenu: []
});

async function getDemoMenu() {
  let url = isDev ? '/mock/menu' : '/menu.json';
  let response = await $http.get(url);
  let { code, data, message } = response;

  if (code === 200) {
    state.demoMenu = data;
  } else {
    alert(message);
  }
}

const useDemoStore = () => {
  return { ...toRefs(state), getDemoMenu };
};

export default useDemoStore;
