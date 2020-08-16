<template>
  <div id="app">
    <navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from "./components/navBar.vue";
export default {
  name: "app",
  components: {
    navbar,
  },
  mounted() {
    let token = window.localStorage.getItem("token");
    if (token) {
      this.$store.commit("login_saveToken", token);
    }
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
