<template>
  <div id="app">
    <!-- <div class="main">
      <div class="head">
        <h1>index app</h1>
      </div> -->
    <!-- <div class="content">
        <h1>asdasda</h1>
      </div> -->
    <router-view class="hund"></router-view>
    <!-- </div> -->

    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue App" />-->
  </div>
</template>

<script>
import Agenda from "./components/Agenda.vue";
import Login from "./components/Login.vue";

const routes = {
  "/": Agenda,
  "/login": Login,
};

export default {
  name: "App",
  // data: {
  //   currentRoute: window.location.pathname
  // },
  // computed: {
  //   ViewComponent() {
  //     return routes[this.currentRoute] || NotFound;
  //   }
  // },
  // render(h) {
  //   return h(this.ViewComponent);
  // },
  components: {
    Agenda,
  },
};
</script>

<style>
html,
body,
.hund {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  width: 100%;
  height: 100%;
}
</style>
