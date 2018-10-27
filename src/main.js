import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios';
import axios from 'axios';


new Vue({
  router,
  axios,
  VueAxios,
  render: h => h(App)
}).$mount("#app");