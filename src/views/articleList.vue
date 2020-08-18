<template>
  <div class="main">
    <!-- <a-pagination :total="data.length" v-model="currentPage" /> -->
    <a-list bordered :data-source="data">
      <a-list-item slot="renderItem" slot-scope="item">
        <a class="title" @click="$router.push('/articles/' + item._id)">
          <!-- <span>{{ item.createdAt.slice(0, 10) }}</span>
          <a-divider type="vertical" /> -->
          <span>{{ item.title }}</span>
        </a>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      axios: {},
    };
  },
  computed: {
    
  },
  methods: {
    getList() {
      this.axios
        .get("/api/articles")
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            console.log(res.data.body);
            this.data = res.data.body;
          }
        })
        .catch((err) => {
          console.error(err);
          this.$message.error("获取文章失败");
        });
    },
  },
  created() {
    this.axios = this.$axios;
    this.getList();
  },
};
</script>

<style>
.main {
  margin: 1rem 20%;
}

.title {
  cursor: pointer;
  text-decoration-line: underline;
  text-decoration-style: solid;
}

a-list > a-list-item {
  margin-left: 4rem;
}
</style>