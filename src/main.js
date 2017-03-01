import Vue from 'vue'
import App from './App.vue'

import VueRouter from "vue-router"
import VueResource from 'vue-resource'


import '../node_modules/bootstrap/dist/css/bootstrap.css'
//import './assets/jquery/dist/jquery.js'
//import './assets/bootstrap/dist/js/bootstrap.min.js'

Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);


// 定义组件, 也可以从别的文件引入
import firstcomponent from './component/firstcomponent.vue'
import secondcomponent from './component/secondcomponent.vue'
import Login from './component/login.vue'
import Register from './component/register.vue'


// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {
      path:'/first',
      component:firstcomponent
    },
    {
      path: '/second',
      component: secondcomponent
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
  ]
})


const app = new Vue({
      router: router,
      render: h => h(App)
}).$mount('#app')
