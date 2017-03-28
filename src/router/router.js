
import App from '../App.vue'

//引入定义组件, 也可以从别的文件引入
import Index from '../component/index.vue'
import firstcomponent from '../component/firstcomponent.vue'
import secondcomponent from '../component/secondcomponent.vue'


//user
import Info from '../component/user/info.vue'
//user subs
import Zxfw from '../component/user/zxfw.vue'
import Yxkj from '../component/user/yxkj.vue'
import Wdzx from '../component/user/wdzx.vue'
import Wdsc from '../component/user/wdsc.vue'
import Xtxx from '../component/user/xtxx.vue'
import Sybz from '../component/user/sybz.vue'
import Kfdh from '../component/user/kfdh.vue'
import ModifyInfo from '../component/account/modifyInfo.vue'

//电影详情
import MovieDetail from '../component/movieDetail.vue'


import Cinema from '../component/cinema.vue'

import Login from '../component/account/login.vue'
import Register from '../component/account/register.vue'
import ForgotPwd from '../component/account/forgotPwd.vue'

import NotFound from '../component/errors/404'


const TabFirst ={template:'<div>Posts</div>'}
const TabSec ={template:'<div>Profile</div>'}

export default [
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
        path: '/forgotPwd',
        component: ForgotPwd
    },
    {
        path: '/cinema',
        component: Cinema
    },
    {
        path : '/movie/detail',
        name: 'detail',
        component : MovieDetail
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
        path:'/user/ModifyInfo',
        component : ModifyInfo
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