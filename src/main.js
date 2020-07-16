import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import Platform from "./components/Platform";
import Agenda from "./components/Agenda.vue";
import Login from "./components/Login.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(ElementUI);

// const routes = {
//   "/": Agenda,
//   "/login": Login,
// };
const routes = [
  { path: "/", component: Platform },
  { path: "/genda", component: Agenda },
  { path: "/login", component: Login },
];

const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
});

new Vue({
  router,
  render: (h) => h(App),
  // template: App,
}).$mount("#app");
