<template>
  <div class="main">
    <div class="extra">
      最后更新于{{updateTime}}
      <span style="float:right;" v-show="this.$store.state.username">
        <a-tag color="green">
          <a @click="updateArticle()">update</a>
        </a-tag>
        <a-tag color="red">
          <a @click="deleteArticle()">delete</a>
        </a-tag>
      </span>
    </div>
    <div class="article" v-html="value"></div>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
// import "mavon-editor/dist/css/index.css";
// console.log(mavonEditor.getMarkdownIt());
import "mavon-editor/dist/css/index.css";
import hljs from "highlight.js";
import "mavon-editor/dist/highlightjs/styles/atom-one-light.min.css";

export default {
  components: {
    // mavonEditor,
  },
  data() {
    return {
      title: "",
      content: "",
      username: "",
      nickname: "",
      markdownIt: {},
      updatedAt: "",
    };
  },
  computed: {
    value: function () {
      return this.markdownIt.render(this.content);
    },
    updateTime: function () {
      return this.updatedAt.slice(0, 10);
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
            this.updatedAt = res.data.body.updatedAt;
          }
        })
        .catch((err) => {
          console.error(err);
          this.$message.error("获取失败");
        });
    },
    updateArticle() {
      console.log("update called");

      let obj = {
        username: this.$store.state.username,
        userid: this.$store.state.userid,
        title: this.title,
        content: this.content,
      };
      console.log(obj);
      console.log(this.id);
      this.$router.push('/editArticle/' + this.id);
      // this.$axios
      //   .put("/api/articles/" + this.id, obj)
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.error(err);
      //   });
    },
    deleteArticle() {
      console.log("delete called");
    },
  },
  created() {
    console.log("enter created");
    this.markdownIt = mavonEditor.getMarkdownIt();
    console.log(this.markdownIt);
    console.log(hljs);
    this.markdownIt.set({
      html: true,
      linkify: true,
      typographer: true,
      highlight: function (str, lang) {
        console.log(hljs.highlight(lang, str, true));
        if (lang && hljs.getLanguage(lang)) {
          try {
            return (
              '<pre class="hljs"><code>' +
              hljs.highlight(lang, str, true).value +
              "</code></pre>"
            );
          } catch (__) {
            console.log(__);
          }
        }

        return (
          '<pre class="hljs"><code>' +
          this.markdownIt.utils.escapeHtml(str) +
          "</code></pre>"
        );
      },
    });
    this.getArticle();
  },
};
</script>

<style scoped>
.main {
  margin: 0.5rem 20%;
  padding: 1rem;
}

.article {
  padding: 1rem;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
}
.extra {
  padding: 0.5rem 1rem;
}
</style>