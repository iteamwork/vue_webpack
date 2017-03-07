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


//user
import Info from './component/user/info.vue'
//user subs
import Zxfw from './component/user/zxfw.vue'
import Yxkj from './component/user/yxkj.vue'
import Wdzx from './component/user/wdzx.vue'
import Wdsc from './component/user/wdsc.vue'
import Xtxx from './component/user/xtxx.vue'
import Sybz from './component/user/sybz.vue'
import Kfdh from './component/user/kfdh.vue'


import Cinema from './component/cinema.vue'


import Login from './component/account/login.vue'
import Register from './component/account/register.vue'
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
      path: '/cinema',
      component: Cinema
    },
    {
      path:'/user',
      component : Info
    },
    {
      path:'/user/zxfw',
      component : Zxfw
    },
    {
      path:'/user/yxkj',
      component : Yxkj
    },
    {
      path:'/user/wdsc',
      component : Wdsc
    },
    {
      path:'/user/wdzx',
      component : Wdzx
    },
    {
      path:'/user/xtxx',
      component : Xtxx
    },
    {
      path:'/user/sybz',
      component : Sybz
    },
    {
      path:'/user/kfdh',
      component : Kfdh
    },
    {
      path : '*',
      component : NotFound
    }
  ]
})


router.beforeEach(({meta, path}, from, next) => {
  if(!sessionStorage.userName && path.indexOf('/user')>=0 && path !=='/user'){
    return next({path:'/login'})
  }
  //console.log("userName: "+ sessionStorage.userName);
  //console.log("path: " + path);
  //console.log("next: " + next);
  //console.log("from: " + from.toString());
  //var { auth = true } = meta
  //var isLogin = Boolean(store.state.user.id) //true 用户已登录， false 用户未登录
  //if (auth && !isLogin && path !== '/login') {
  //  return next({ path: '/login' })
  //}
  next()
})



const app = new Vue({
      router: router,
      render: h => h(App)
}).$mount('#app')



