import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';

import "./styles/index.scss";
import "./styles/hljs.scss";
import "./styles/tutorial.scss";

import hljs from "highlight.js";
Vue.use(hljs.vuePlugin);

import axios from 'axios';
Vue.prototype.$http = axios;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
