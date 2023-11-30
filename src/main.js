import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/css/tailwind.css";
import "@/assets/css/main.scss";

import { Icon } from "@iconify/vue2";

Vue.config.productionTip = false;
Vue.use(ElementUI, Icon);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
