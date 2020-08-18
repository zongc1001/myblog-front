<template>
  <div class="main">
    <div v-html="value"></div>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
console.log(mavonEditor.getMarkdownIt());

export default {
  data() {
    return {
      title: "",
      content: "",
      username: "",
      nickname: "",
      markdownIt: {},
    };
  },
  computed: {
    value: function () {
      return this.markdownIt.render(this.content);
    },
  },
  props: {
    id: String,
  },
  methods: {
    getArticle() {
      console.log(this.id);
      this.$axios
        .get("/api/articles/" + this.id)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            this.title = res.data.body.title;
            this.content = res.data.body.content;
            this.username = res.data.body.username;
            this.nickname = res.data.body.nickname;
          }
        })
        .catch((err) => {
          console.error(err);
          this.$message.error("获取失败");
        });
    },
  },
  created() {
    this.getArticle();
    this.markdownIt = mavonEditor.getMarkdownIt();
    this.markdownIt.set({
      html: true,
      linkify: true,
      typographer: true,
    });
  },
};
</script>

<style scoped>
.main {
  margin: 1rem 20%;
  padding: 1rem;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
}
</style>