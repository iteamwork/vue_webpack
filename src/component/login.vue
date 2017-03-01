<template>
  <div id="login">
    <div class="col-md-12 column">
        <form  class="form-horizontal" role="form" method="post">
            <div class="form-group">
                <label for="username" class="col-sm-2 control-label">用户名:</label>
                <div class="col-sm-10">
                    <input type="text" placeholder="请输入用户名"
                           class="form-control" v-model="user.username" id="username" name="username" />
                    <p v-show="userNameError">请输入用户名</p>
                </div>
            </div>
            <div class="form-group">
                <label for="password"  class="col-sm-2 control-label">密码:</label>
                <div class="col-sm-10">
                    <input type="password" placeholder="请输入密码" class="form-control"
                           v-model="user.password"  id="password" name="password" />
                    <p v-show="passwordError">请输入密码</p>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-3">
                    <button @click="btn_login" type="button" class="btn btn-primary btn-block">登陆</button>
                </div>
                <div class="col-sm-4">
                    <a href="/login/forgotPwd" class="btn">忘记密码</a>
                </div>
            </div>
        </form>
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
                        console.log('right:' + JSON.stringify(response.data));
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
<style>
    #login p{
        margin: 10px 0px;
        text-align: left;
        color: #d9534f;
    }
</style>

