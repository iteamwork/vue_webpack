import Vue from 'vue'
import App from './App.vue'

import VueRouter from "vue-router"; //路由
import VueResource from 'vue-resource'; //请求,后端交互数据

import routes from './router/router.js'

Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

//引入css文件
import '../node_modules/purecss/build/pure-min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './assets/css/common.css';
import './assets/css/main.css';
import './assets/css/swiper.min.css'

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  //mode:'history',
  base:__dirname,
  routes:routes
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



