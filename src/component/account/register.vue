<template>
    <div id="register">
        <div class="col-md-12 column">
            <form class="form-horizontal" role="form" method="post">
                <div class="form-group">
                    <label for="username" class="col-sm-2 control-label">用户名:</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" v-model="user.username" id="username" name="username" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="password" class="col-sm-2 control-label">密码:</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" v-model="user.password"  id="password" name="password" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="rePassword" class="col-sm-2 control-label">确认密码:</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" v-model="user.rePassword"  id="rePassword" name="rePassword" />
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-3">
                        <button @click="btn_register" type="button" class="btn btn-primary btn-block">注册</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                user:{
                    username:'aaa',
                    password:'aaa',
                    rePassword:'aaa'
                }
            }
        },
        methods:{
            btn_register:function(){

            }
        }
    }
</script>