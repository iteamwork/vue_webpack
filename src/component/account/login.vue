<template>
  <div id="login" class="pure-u-1">
      <div class="header pure-g">
          <div class="pure-u-1 header_reg"><router-link  to="/register">注册</router-link></li></div>
      </div>
      <div class="choose pure-g">
          <div @click="ChooseMobileTab" class="pure-u-1-2" :class="{active : loginTab.isMobileActive}">手机号登录</div>
          <div @click="ChooseUserTab" class="pure-u-1-2" :class="{active : loginTab.isUserActive}">用户名登录</div>
      </div>
      <div class="content">
          <div v-if="loginTab.isMobileActive" class="pure-g m_line">
              <div class="pure-u-1-8 m_center">
                  <i class="fa fa-2x fa-mobile" aria-hidden="true"></i>
                  <!--<i class="fa fa-camera-retro fa-lg"></i>-->
              </div>
              <div class="pure-u-7-8">
                  <input type="text" placeholder="请输入手机号" v-model="user.mobile">
              </div>
          </div>

          <div v-if="loginTab.isUserActive" class="pure-g m_line">
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
          <input type="button" @click="btn_login" value="登录" class="pure-u-1 button-login pure-button">
      </div>
      <div class="pure-g forgotPwd">
          <div class="pure-u-1 header_reg">
              <router-link to="/forgotPwd">忘记密码?</router-link></li>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user:{
        username:'',
        password:'',
        mobile:''
      },
      userName: '',
      userNameError:false,
      passwordError:false,
      loginTab:{
        type:0,
        isMobileActive:true,
        isUserActive:false
      }
    }
  },

  methods:{
      btn_login:function(){
        var self = this,
            obj={
                password : self.user.password
            };
        if(self.loginTab.type === 0){
            if(self.checkUserMobile() & self.ckeckPwd()){
                obj.type=0;
                obj.mobile = self.user.mobile;
            }
            else
                return;
        }else{
            if(self.checkUserName() & self.ckeckPwd()) {
                obj.type=1;
                obj.username = self.user.username
            }
            else
                return;
        }
          this.$http.post('http://127.0.0.1:9999/Login',obj,
                  {emulateJSON: true})
                  .then(function (response) {
                      // 响应成功回调
                      if(response.body.code == 200){
                          sessionStorage.setItem('userName',response.body.user.username);
                          sessionStorage.setItem('mobile',response.body.user.mobile);
                          sessionStorage.setItem('id',response.body.user.id);
                          sessionStorage.setItem('sex',response.body.user.sex);
                          sessionStorage.setItem('faceImg',response.body.user.faceImg);
                          sessionStorage.setItem('role',response.body.user.role);
                          console.log(sessionStorage.getItem('userName'));
                          window.location.href='/user';
                      }
                      else
                        alert('用户名或密码错误...');
                  }, function (response) {
                      console.log('error:' + JSON.stringify(response));
                      // 响应错误回调
                  });
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
    },
      ChooseUserTab:function(){
          this.loginTab.type=1;
          this.loginTab.isUserActive = true;
          this.loginTab.isMobileActive= false;
    },
      ChooseMobileTab:function(){
          this.loginTab.type=0;
          this.loginTab.isUserActive = false;
          this.loginTab.isMobileActive= true;
      },
  }
}
</script>



