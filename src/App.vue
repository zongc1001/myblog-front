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

</style>
