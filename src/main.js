import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';

import "./styles/index.scss";

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
