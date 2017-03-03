import Vue from 'vue'
import App from './App.vue'

import VueRouter from "vue-router"; //路由
import VueResource from 'vue-resource'; //请求,后端交互数据

Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

//引入css文件
import '../node_modules/purecss/build/pure-min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './assets/css/common.css';
import './assets/css/main.css';


//引入定义组件, 也可以从别的文件引入
import Index from './component/index.vue'
import firstcomponent from './component/firstcomponent.vue'
import secondcomponent from './component/secondcomponent.vue'
import Login from './component/login.vue'
import Register from './component/register.vue'
import NewLogin from './component/newLogin.vue'

import NotFound from './component/errors/404'


const TabFirst ={template:'<div>Posts</div>'}
const TabSec ={template:'<div>Profile</div>'}


// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {
      path : '/',
      component : Index
    },
    {
      path:'/first',
      component:firstcomponent,
      children: [
        { path: 'tab1', component: TabFirst },
        { path: 'tab2', component: TabSec }
      ]
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
    {
      path: '/newLogin',
      component: NewLogin
    },
    {
      path : '*',
      component : NotFound
    }
  ]
})


const app = new Vue({
      router: router,
      render: h => h(App)
}).$mount('#app')
