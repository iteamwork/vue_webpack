<template>
  <div id="login" class="pure-g">
      <div class="pure-u-1">
          <input type="text" placeholder="请输入用户名或手机号" v-model="user.username">
      </div>
      <div class="pure-u-1">
        <input type="password" placeholder="请输入密码" v-model="user.password">
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user:{
        username:'',
        password:''
      },
      userNameError:false,
      passwordError:false
    }
  },

  methods:{
      btn_login:function(){
        var self = this;
        if(self.checkUserName() & self.ckeckPwd()) {
            this.$http.post('http://127.0.0.1:9999/Login',
                    {username: self.user.username, password: self.user.password},
                    {emulateJSON: true})
                    .then(function (response) {
                        // 响应成功回调
                    }, function (response) {
                        console.log('error:' + response);
                        // 响应错误回调
                    });
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



