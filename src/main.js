import Vue from "vue";
import Vuelidate from "vuelidate";
import axios from "@/plugins/axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

Vue.use(Vuelidate);
Vue.use(VueAxios, axios);
Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
