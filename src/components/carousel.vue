<!--
  功能：功能描述
  时间：2020年08月28日 15:08:47
-->
<template>
  <div id="carousel">
    <a-carousel autoplay>
      <div class="card">
        <div class="container">
            <h1>用肉眼直视如此耀眼的骄阳</h1>
            <p>
              2019年11月29日四川大学江安校区一教B105线下讲座
              <br />马克思主义学院李丹老师教大家如何善待死亡
            </p>
            <a-button>了解更多</a-button>
        </div>
      </div>
    </a-carousel>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: "carousel",
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {},
  // 以下是生命周期钩子   注：没用到的钩子请自行删除
  /**
   * 在实例初始化之后，组件属性计算之前，如data属性等
   */
  beforeCreate() {},
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
  /**
   * 在挂载开始之前被调用：相关的 render 函数首次被调用。
   */
  beforeMount() {},
  /**
   * el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
   * 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$ el 也在文档内。
   */
  mounted() {},
  /**
   * 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
   * 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
   */
  beforeUpdate() {},
  /**
   * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
   * 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
   */
  updated() {},
  /**
   * keep-alive 组件激活时调用。 仅针对keep-alive 组件有效
   */
  activated() {},
  /**
   * keep-alive 组件停用时调用。 仅针对keep-alive 组件有效
   */
  deactivated() {},
  /**
   * 实例销毁之前调用。在这一步，实例仍然完全可用。
   */
  beforeDestroy() {},
  /**
   * Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，
   * 所有的事件监听器会被移除，所有的子实例也会被销毁。
   */
  destroyed() {},
};
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped>
.card {
  width: 100%;
  height: 80vh;
  background-color: #364d79;
  background-image: url("../assets/bg1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

/* .ant-carousel >>> .slick-slide {
  height: 80%; 
   text-align: center;

  height: 80vh;
  background: #364d79;
  overflow: hidden; 
} */

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
#carousel {
  margin: 0;
  margin-bottom: 2%;
  /* height: 80vh */
}

.container {
  height: 100%;
  width: 60%;
  background-color: rgba(104, 168, 236, 0.3);
  padding: 5rem;
}

.container h1 {
  font-size: 2rem;
  color: #fff;
}

.container p {
  color: #fff;
  font-size: 0.7rem;
}

.container a-button {
  font-size: 0.5rem;
  margin-top: 0.2rem;
  padding: 0.3rem;
}

</style>
