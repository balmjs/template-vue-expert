import { reactive, toRefs } from 'vue';

const state = reactive({
  menu: []
});

const useDemoStore = () => {
  return { ...toRefs(state) };
};

export default useDemoStore;
