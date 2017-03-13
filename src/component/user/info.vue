<template>
    <div id="user">
        <div class="pure-g">
            <div class="pure-u-1 img">
                <div class="m_p2">
                    <img class="face_img" src="../../assets/default_img.png" alt="pic">
                </div>
                <div class="m_padtop">
                    <div v-if="userName">
                        <div style="color: #fff;font-size: 1rem;" >{{userName}}</div>
                    </div>
                    <div v-else>
                        <router-link  to="/login">请点击登录</router-link>
                    </div>
                </div>
                <div >
                    <ul v-if="userName" class="share">
                        <li>修改资料</li>
                        <li ><a href="/forgotPwd">修改密码</a></li>
                        <li @click="logOut">退出登录</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="pure-g">
            <ul class="list">
                <li @click="getGrunt('/user/zxfw')">
                    <div class="pure-u-1-8"></div>
                    <div class="pure-u-3-4">咨询服务</div>
                    <div class="pure-u-1-8"> <i class="fa fa-lg fa-angle-right" aria-hidden="true"></i> </div>
                </li>
                <li @click="getGrunt('/user/yxkj')">
                    <div class="pure-u-1-8"></div>
                    <div class="pure-u-3-4">砍价意向</div>
                    <div class="pure-u-1-8 m_center"> <i class="fa fa-lg fa-angle-right" aria-hidden="true"></i> </div>
                </li>
                <li @click="getGrunt('/user/wdzx')">
                    <div class="pure-u-1-8"></div>
                    <div class="pure-u-3-4">我的专享</div>
                    <div class="pure-u-1-8 "> <i class="fa fa-lg fa-angle-right" aria-hidden="true"></i> </div>
                </li>
            </ul>
        </div>

        <div class="pure-g">
            <ul class="list">
                <li @click="getGrunt('/user/wdsc')">
                    <div class="pure-u-1-8"></div>
                    <div class="pure-u-3-4">我的收藏</div>
                    <div class="pure-u-1-8"> <i class="fa fa-lg fa-angle-right" aria-hidden="true"></i> </div>
                </li>
                <li @click="getGrunt('/user/xtxx')">
                    <div class="pure-u-1-8"></div>
                    <div class="pure-u-3-4">系统消息</div>
                    <div class="pure-u-1-8 m_center"> <i class="fa fa-lg fa-angle-right" aria-hidden="true"></i> </div>
                </li>
            </ul>
        </div>

        <div class="pure-g">
            <ul class="list">
                <li @click="getGrunt('/user/sybz')">
                    <div class="pure-u-1-8"></div>
                    <div class="pure-u-3-4">使用帮助</div>
                    <div class="pure-u-1-8"> <i class="fa fa-lg fa-angle-right" aria-hidden="true"></i> </div>
                </li>
                <li @click="getGrunt('/user/kfdh')">
                    <div class="pure-u-1-8"></div>
                    <div class="pure-u-3-4">客服电话</div>
                    <div class="pure-u-1-8 m_center"> <i class="fa fa-lg fa-angle-right" aria-hidden="true"></i> </div>
                </li>
            </ul>
        </div>


    </div>
</template>
<script>
export default {
    data () {
        return {
            userName:sessionStorage.getItem('userName')
        }
    },
    methods:{
        logOut:function(){
            sessionStorage.setItem('userName','');
            this.userName = sessionStorage.getItem('userName');
        },
        getGrunt:function(val){
//            if(this.userName == null || this.userName =="")
//                window.location.href='/login';
//            else
                window.location.href=val;
        }
    }
}
</script>