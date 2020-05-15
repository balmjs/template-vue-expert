import { createApp, reactive } from 'vue';

const storeApp = createApp(
  {},
  reactive({
    menu: []
  })
);

export default storeApp._props;
