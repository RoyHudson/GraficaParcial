import Vue from "vue";
import Router from "vue-router";

import App from "./App";
import Home from "./views/Home";
import Login from "./views/Login";
import SignupForm from "./components/SingupForm.vue";

Vue.use(Router);

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: SignupForm}
];

const router = new Router({
  routes
});