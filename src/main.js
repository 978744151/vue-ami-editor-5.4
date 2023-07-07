import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// fortawesome
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all";
// import VueAmisSdk from "vue-amis-sdk";
// console.log(VueAmisSdk);
// Vue.use(VueAmisSdk);

import { VuePlugin } from "vuera";
Vue.use(VuePlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
