<template>
    <div id="login" class="pure-u-1">
        <div class="header pure-g header_reg">
            <div class="pure-u-1-8 m_center ">
                <router-link to="/login">
                    <i class="fa fa-lg fa-angle-left" aria-hidden="true"></i>
                </router-link>
            </div>
            <div style="color: #fff;" class=" m_center pure-u-3-4">重置密码</div>
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
            <input type="button" @click="btn_updatePwd" value="提交" class="pure-u-1 button-login pure-button">
        </div>
    </div>
</template>
<script>
    export default {
        data:function(){
            return {
                user:{
                    password:'',
                    mobile:''
                }
            }
        },

        methods:{
            btn_updatePwd:function(){
                var self = this;
                if(self.checkUserMobile()  & self.ckeckPwd()){
                    var obj=self.user;
                    this.$http.post('http://127.0.0.1:9999/UpdatePwd',obj,
                            {emulateJSON: true})
                            .then(function (response) {
                                //console.log('right:' + JSON.stringify(response.body));
                                // 响应成功回调
                                if(response.body.code == 200){
                                    alert('修改成功...');
                                    setTimeout(function () {
                                        window.location.href='/login';
                                    },1000);
                                }
                                else if(response.body.code == 300){
                                    alert('改手机号不存在...');
                                }else{
                                    alert('修改失败...');
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



