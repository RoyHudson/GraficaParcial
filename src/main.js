import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import axios from 'axios'

import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";

Vue.config.productionTip = false
Vue.use(Vuelidate);
Vue.prototype.$http = axios;
const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register }
];


new Vue({
  render: h => h(App),
}).$mount('#app')
