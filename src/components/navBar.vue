<template>
  <div id="nav-bar">
    <a-menu class="menu" v-model="current" mode="horizontal" @click="navTo">
      <a-menu-item class="menu-item" key="demo">
        <!-- <a-icon type="appstore" /> -->
        <strong>首页</strong>
      </a-menu-item>
      <a-menu-item class="menu-item" key="demo">
        <!-- <a-icon type="appstore" /> -->
        <strong>首页</strong>
      </a-menu-item>

      <a-menu-item class="menu-item" key="editArticle">
        <!-- <a-icon type="edit" /> -->
        <strong>写文章</strong>
      </a-menu-item>
      <a-menu-item class="menu-item" key="articleList">
        <!-- <a-icon type="edit" /> -->
        <strong>文章列表</strong>
      </a-menu-item>
      <a-sub-menu class="menu-item">
        <span slot="title" class="submenu-title-wrapper">
          <strong>用户设置</strong>
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
      current: ["main"],
    };
  },
  methods: {
    navTo(menu) {
      let key = menu.key;
      if (key === "logout") {
        console.log("logout");
      } else {
        this.$router.push({
          name: key,
        });
      }
    },
  },
};
</script>

<style scoped>
#nav-bar {
  z-index: 10000;
  width: 90%;
  margin: auto;
}
.menu {
  margin: auto;
  text-align: right;
  height: 4rem;
}

.menu-item {
  text-align: center;
  height: 100%;
  margin: auto;
  margin-bottom: -1px;
  margin-top: -1px;
  font-size: 0.9rem;
  width: 6rem;
  padding: 1rem 0;
}
</style>