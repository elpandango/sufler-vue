import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Sufler from './components/Sufler.vue';




export const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/sufler',
    component: Sufler
  }
];
