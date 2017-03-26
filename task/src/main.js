// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

// 定义路由组件
const SingDance = require('./view/area/Sing-dance.vue');
const EntLife = require('./view/area/Ent-life.vue');
const Online = require('./view/area/Online.vue');
const MobileGame = require('./view/area/Mobile-game.vue');
const Draw = require('./view/area/Draw.vue');
const Otaku = require('./view/area/Otaku.vue');
const Single = require('./view/area/Single.vue');
const ESports = require('./view/area/E-sports.vue');

// 定义路由 配置映射
const routes = [
    {path: '/', redirect: '/sing-dance'},
    {path: '/sing-dance', component: SingDance},
    {path: '/ent-life', component: EntLife},
    {path: '/online', component: Online},
    {path: '/mobile-game', component: MobileGame},
    {path: '/draw', component: Draw},
    {path: '/otaku', component: Otaku},
    {path: '/single', component: Single},
    {path: '/e-sports', component: ESports},
];

const router = new VueRouter({
    routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
