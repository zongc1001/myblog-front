import App from "./App.vue";
import Vue from "vue";
import axios from "axios";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import router from "./router";
import store from "./store";


const serverUrl = "/node/";
axios.defaults.baseURL = serverUrl;
Vue.prototype.$serverUrl = serverUrl;



//全局请求拦截
axios.interceptors.request.use(
  (config) => {
    let token = store.state.token;
    if(token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);


//全局响应拦截。
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);


Vue.prototype.$axios = axios;


Vue.config.productionTip = false;

Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
