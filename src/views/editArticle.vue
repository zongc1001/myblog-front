<template>
  <div id="editor">
    <div id="title">
      <a-input placeholder="输入标题" size="large" v-model="title" />
    </div>
    <a-divider></a-divider>
    <div style="height:100%;">
      <mavon-editor
        :toolbars="markdownOption"
        fontSize="16"
        v-model="value"
        codeStyle="atom-one-light"
        ishljs="true"
        katex="true"
      ></mavon-editor>
    </div>

    <a-divider></a-divider>
    <a-button v-on:click="submitArticle" type="primary" size="large">Save</a-button>
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
  data() {
    return {
      title: "",
      value: "",
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
        content: this.value,
      };
      this.$axios
        .post("/api/articles", obj)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            this.$message.success(res.data.msg);
          }
        })
        .catch((err) => {
          console.log("1313123" + err);
          this.$message.error("发表失败");
        });
    },
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
}
</style>