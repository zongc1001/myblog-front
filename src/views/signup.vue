<template>
  <div>
    <a-row type="flex" justify="center">
      <h3>注册</h3>
    </a-row>
    <a-row>
      <a-col :span="1" :offset="10">用户名：</a-col>
      <a-col :span="3">
        <a-input type="text" v-model="username" />
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="1" :offset="10">密码：</a-col>
      <a-col :span="3">
        <a-input type="password" v-model="password1" />
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="1" :offset="10" >重复密码：</a-col>
      <a-col :span="3">
        <a-input type="password" v-model="password2" />
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="1" :offset="10">昵称：</a-col>
      <a-col :span="3">
        <a-input type="text" v-model="nickname" />
      </a-col>
    </a-row>
    <a-row type="flex" justify="center">
      <a-button @click="submitSignup">提交</a-button>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password1: "",
      password2: "",
      nickname: "",
    };
  },
  methods: {
    submitSignup() {
      if(this.password1 !== this.password2) {
        this.$message.error("两次密码不一致");
      } else if (this.username && this.password1 && this.password2) {
        let obj = {
          username: this.username,
          password1: this.password1,
          nickname: this.nickname,
        };
        this.$axios
          .post("/api/users/signup", obj)
          .then(res => {
            console.log(res);
            if(res.status === 200) {
              this.$message.success(res.data.msg);
            }
          })
          .catch((err) => {
            console.log(err);
            this.$message.error("注册失败");
          });
      } else {
        this.$message.error("输入项未填写完整");
      }
    },
  },
};
</script>

<style>
div.ant-row {
  margin: 10px 0;
}
</style>