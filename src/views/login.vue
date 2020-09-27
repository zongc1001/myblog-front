<template>
  <div>
    <a-row type="flex" justify="center">
      <h3>登录</h3>
    </a-row>
    <a-row>
      <a-col :span="1" :offset="10">用户名</a-col>
      <a-col :span="3">
        <a-input type="text" v-model="username" />
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="1" :offset="10">密码</a-col>
      <a-col :span="3">
        <a-input type="password" v-model="password" />
      </a-col>
    </a-row>
    <a-row type="flex" justify="center">
      <a-button @click="submitLogin">登录</a-button>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submitLogin() {
      if (this.username && this.password) {
        let obj = {
          username: this.username,
          password: this.password,
        };
        this.$axios
          .post("/api/users/login", obj)
          .then((res) => {
            console.log(res);
            if(res.status === 200) {
              this.$message.success("登录成功");
              let token = res.data.token;
              this.$store.commit("login_saveToken", token);
            } else {
              this.$message.success("用户名或密码错误");
            }
          })
          .catch((err) => {
            console.error(err);
            this.$message.error("登录失败");
          });
      } else {
        this.$message.error("输入项未填写完整");
      }
    },
  },
};
</script>

<style scoped>
</style>


