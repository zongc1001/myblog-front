<template>
  <div id="nav-bar">
    <a-menu class="menu" v-model="current" mode="horizontal" @click="navTo">
      <a-menu-item class="menu-item" key="home" v-show="this.$store.state.username">
        <!-- <a-icon type="appstore" /> -->
        <h6>首页</h6>
      </a-menu-item>

      <a-menu-item class="menu-item" key="editArticle" v-show="this.$store.state.username">
        <!-- <a-icon type="edit" /> -->
        <h6>写文章</h6>
      </a-menu-item>
      <a-menu-item class="menu-item" key="articleList">
        <h6>文章列表</h6>
      </a-menu-item>
      <a-sub-menu class="menu-item">
        <span slot="title" class="submenu-title-wrapper">
          <h6>用户设置</h6>
        </span>
        <a-menu-item-group title="登录状态">
          <!-- <a-menu-item key="signup">注册</a-menu-item> -->
          <a-menu-item key="login">登录</a-menu-item>
          <!-- <a-menu-item key="logout">注销</a-menu-item> -->
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
h6 {
  font-size: .8rem;
  font-weight: 700;
}

#nav-bar {
  z-index: 200;
  width: 86%;
  margin: auto;
  font-family: "微软雅黑";
  line-height: 100%;
  top: 0;
}
.menu {
  margin: auto;
  text-align: right;
  height: 20%;
}

/* .menu::after {
  content: 'lalala';
  position: relative;
  top: -4rem;
  
  height: 4rem;
  width: 8rem;
  background-color: red;
} */

.menu-item {
  text-align: center;
  height: 100%;
  margin: auto;
  margin-bottom: -1px;
  margin-top: -1px;
  font-size: 0.6rem;
  width: 6rem;
  padding: 1rem 0;
}

.title {
  float: left;
  text-align: left;
  margin: auto;
  margin-left: 5rem;
  line-height: 1.2;
  width: 10rem;
}

.main-title {
  color: rgb(24, 144, 255);
  font-size: 1.3rem;
  font-weight: 400;
  margin: 5px 0;
}


.sub-title {
  font-size: .8rem;
  color: rgb(185, 185, 185);
  font-weight: 300;

}

</style>