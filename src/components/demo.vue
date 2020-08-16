<template>
  <div>
    第一个组件
    <h4>axios 请求</h4>
    <div>{{msg}}</div>
    <div>
      token: {{this.$store.state.token}}
      username:  {{this.$store.state.username}}
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myData: "demo1",
      url: "https://www.lanqiao.cn",
      activeIndex: 1,
      lists: [
        {
          name: "Pony",
          age: 18,
          url: "https://www.lanqiao.cn",
          pic: "https://static.shiyanlou.com/frontend/dist/img/9f43b00.svg",
        },
        {
          name: "Jack",
          age: 20,
          url: "https://www.lanqiao.cn",
          pic: "https://static.shiyanlou.com/frontend/dist/img/9f43b00.svg",
        },
      ],
      msg: "",
    };
  },
  created() {
    this.$axios.get("/api/articles").then((res) => {
      this.msg = res.data.msg;
    });
  },
};
</script>

<style>
* {
  font-size: 1rem;
}
</style>