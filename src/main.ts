import "bootstrap/dist/css/bootstrap.min.css";
import "element-plus/dist/index.css";

import { createApp } from "vue";
import ElementPlus from "element-plus";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { createMetaManager } from "vue-meta";
import { createPinia } from "pinia";
import { createPersistedStatePlugin } from "pinia-plugin-persistedstate-2";
import SecureLS from "secure-ls";
const ls = new SecureLS();


const metaManager = createMetaManager(false, {
  meta: { tag: "meta", nameless: true },
});
const pinia = createPinia();
pinia.use(
  createPersistedStatePlugin({
    storage: {
      getItem: (key) => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: (key) => ls.remove(key),
    },
  })
);

createApp(App)
  .use(ElementPlus)
  .use(pinia)
  .use(router)
  .use(metaManager)
  .mount("#app");
import "bootstrap/dist/js/bootstrap.js";
