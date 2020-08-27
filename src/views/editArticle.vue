<template>
  <div id="editor">
    <div>
      <a-input id="title" placeholder="输入标题" size="large" v-model="title" />
    </div>
    <a-divider></a-divider>
    <div style="height:100%;">
      <mavon-editor
        :toolbars="markdownOption"
        :fontSize="16"
        v-model="content"
        :codeStyle="'atom-one-light'"
        :ishljs="true"
        :katex="true"
      ></mavon-editor>
    </div>

    <a-divider></a-divider>
    <a-button v-on:click="submitArticle" type="primary" size="large">Save</a-button>
    <!-- <a-button v-on:click="submitArticle" type="primary" size="large">Update</a-button> -->
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
console.log(mavonEditor.getMarkdownIt());
mavonEditor.getMarkdownIt().set({
  html: true,
  linkify: true,
  typographer: true,
});
export default {
  name: "editor",
  components: {
    mavonEditor,
  },
  props: {
    id: String, //文章的id
  },
  data() {
    return {
      title: "",
      content: "",
      markdownOption: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: false, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
      },
    };
  },
  methods: {
    submitArticle() {
      let obj = {
        username: this.$store.state.username,
        userid: this.$store.state.userid,
        title: this.title,
        content: this.content,
      };

      let url, axiosMethod;
      if (this.id) {
        url = "/api/articles" + this.id;
        axiosMethod = this.$axios.put(url, obj);
      } else {
        url = "/api/articles";
        axiosMethod = this.$axios.post(url, obj);
      }

      axiosMethod
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            this.$message.success("保存成功");
          }
        })
        .catch((err) => {
          console.log(err);
          this.$message.error("保存失败");
        });
    },
    getArticle() {
      console.log(this.id);
      this.$axios
        .get("/api/articles/" + this.id)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            this.title = res.data.body.title;
            this.content = res.data.body.content;
            // this.username = res.data.body.username;
            // this.nickname = res.data.body.nickname;
            // this.updatedAt = res.data.body.updatedAt;
          }
        })
        .catch((err) => {
          console.error(err);
          this.$message.error("获取失败");
        });
    },
  },
  created() {
    console.log(this.id);
    if (this.id) {
      this.getArticle();
    }
  },
};
</script>

<style scoped>
#editor {
  margin: auto;
  width: 80%;
  z-index: 200;
  position: relative;
}
#title {
  margin-top: 1rem;
  font-size: 1rem;
}
</style>