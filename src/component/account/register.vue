<template>
    <div id="login" class="pure-u-1">
        <div class="header pure-g">
            <div class="pure-u-1 header_reg"><router-link  to="/login">登录</router-link></li></div>
        </div>
        <div class="content">
            <div  class="pure-g m_line">
                <div class="pure-u-1-8 m_center">
                    <i class="fa fa-2x fa-mobile" aria-hidden="true"></i>
                </div>
                <div class="pure-u-7-8">
                    <input type="text" placeholder="请输入手机号" v-model="user.mobile">
                </div>
            </div>

            <div  class="pure-g m_line">
                <div class="pure-u-1-8 m_center">
                    <i class="fa fa-lg fa-user-o" aria-hidden="true"></i>
                </div>
                <div class="pure-u-7-8">
                    <input type="text" placeholder="请输入用户名" v-model="user.username">
                </div>
            </div>
            <div class="pure-g">
                <div class="pure-u-1-8 m_center">
                    <i class="fa fa-2x fa-lock" aria-hidden="true"></i>
                </div>
                <div class="pure-u-7-8">
                    <input type="password" placeholder="请输入密码" v-model="user.password">
                </div>
            </div>
        </div>
        <div class="pure-g bottom">
            <input type="button" @click="btn_register" value="注册" class="pure-u-1 button-login pure-button">
        </div>
        <!--<div class="pure-g forgotPwd">-->
            <!--<div class="pure-u-1 header_reg">-->
                <!--<router-link to="/register">忘记密码?</router-link></li>-->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            user:{
                username:'',
                password:'',
                mobile:''
            }
        }
    },

    methods:{
        btn_register:function(){
            var self = this;
            if(self.checkUserMobile() & self.checkUserName()  & self.ckeckPwd()){
                var obj=self.user;
                this.$http.post('http://127.0.0.1:9999/Register',obj,
                    {emulateJSON: true})
                    .then(function (response) {
                        //console.log('right:' + JSON.stringify(response.body));
                        // 响应成功回调
                        if(response.body.code == 200){
                            alert('注册成功...');
                            setTimeout(function () {
                                window.location.href='/login';
                            },1000);
                        }
                        else if(response.body.code == 300){
                            alert('改手机号已存在...');
                        }else{
                            alert('注册失败...');
                        }
                    }, function (response) {
                        console.log('error:' + response);
                        // 响应错误回调
                    });
            }
        },
        checkUserMobile:function(){
            if(this.user.mobile === ""){
                this.userMobileError = true;
                return false;
            }else{
                this.userMobileError = false;
                return true;
            }
        },
        checkUserName:function(){
            if(this.user.username === ""){
                this.userNameError = true;
                return false;
            }else{
                this.userNameError = false;
                return true;
            }
        },
        ckeckPwd:function(){
            if(this.user.password === ""){
                this.passwordError = true;
                return false;
            }else{
                this.passwordError = false;
                return true;
            }
        }
    }
}
</script>



