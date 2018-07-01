import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes} from './routes';
import App from './App.vue';

import axios from 'axios'

const reqInterceptor = axios.interceptors.request.use(config => {
  // console.log('Request Interceptor', config);
  if (config.method === 'post') {
    config.method = 'PUT';
  }
  return config
});
const resInterceptor = axios.interceptors.response.use(res => {
  // console.log('Response Interceptor', res)
  return res
});
// axios.interceptors.request.eject(reqInterceptor);
// axios.interceptors.response.eject(resInterceptor);

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
