import App from "./App.vue";
import Vue from "vue";
import axios from "axios";
import "ant-design-vue/dist/antd.css";
import router from "./router";
import store from "./store";
import {
  Button,
  message,
  Form,
  Divider,
  Avatar,
  Input,
  List,
  Icon,
  Pagination,
  Col,
  Tooltip,
  Row,
  Upload,
  Comment,
  Menu,
  Tag,
} from "ant-design-vue";


const serverUrl = "/node/";
axios.defaults.baseURL = serverUrl;
Vue.prototype.$serverUrl = serverUrl;



//全局请求拦截
axios.interceptors.request.use(
  (config) => {
    let token = store.state.token;
    if (token) {
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
Vue.prototype.$message = message;

Vue.config.productionTip = false;

// Vue.use(Antd);
[
  Button,
  message,
  Form,
  Divider,
  Avatar,
  Input,
  List,
  Icon,
  Pagination,
  Col,
  Tooltip,
  Row,
  Upload,
  Comment,
  Menu,
  Tag
].forEach(x => Vue.use(x));

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
