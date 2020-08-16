<template>
  <div>
    <a-menu v-model="current" mode="horizontal" @click="navTo">
      <a-menu-item key="demo">
        <a-icon type="appstore" />首页
      </a-menu-item>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper">
          <a-icon type="setting" />用户设置
        </span>
        <a-menu-item-group title="登录状态">
          <a-menu-item key="signup">注册</a-menu-item>
          <a-menu-item key="login">登录</a-menu-item>
          <a-menu-item key="logout">注销</a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: [
        "main"
      ],
    }
  },
  methods: {
    navTo(menu) {
      let key = menu.key;
      if(key === "logout") {
        console.log("logout");
      } else {
        this.$router.push({
          name: key
        });
      }
    },
  },
};
</script>

<style scoped>

</style>