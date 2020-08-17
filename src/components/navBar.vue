<template>
  <div id="nav-bar">
    <a-menu class="menu" v-model="current" mode="horizontal" @click="navTo">
      <a-menu-item  class="menu-item" key="demo">
        <a-icon type="appstore" />首页
      </a-menu-item>
      <a-menu-item key="editArticle">
        <a-icon type="edit" />写文章
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
#nav-bar {
  z-index: 10000;
}
.menu {
  margin: auto;
  text-align: right;
  height: 3rem;
}

.menu-item {
  text-align: center;
}
</style>