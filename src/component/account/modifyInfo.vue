<template>
    <div id="modifyInfo">
        <div class="pure-g m_center header">
            <div class="pure-u-1-8">
                <i aria-hidden="true" class="fa fa-2x fa-angle-left" @click="goBack"></i>
            </div>
            <div class="pure-u-3-4 m_size">个人设置</div>
        </div>
        <div class="pure-g m_pad">
            <div class="pure-u-1-5">昵称:</div>
            <div class="pure-u-4-5">
                <input type="text" v-model="username">
            </div>
            <div class="pure-u-1-5">手机:</div>
            <div class="pure-u-4-5">
                <input type="text" v-model="mobile">
            </div>
            <div class="pure-u-1-5">性别:</div>
            <div class="pure-u-4-5">
                <div class="pure-g m_border">
                    <div class="pure-u-1-2">
                        <input value="0" v-model="sex"  type="radio" name="sex">男
                    </div>
                    <div class="pure-u-1-2">
                        <input value="1" v-model="sex"  type="radio" name="sex">女
                    </div>
                </div>
            </div>
            <div class="pure-u-1-5">头像:</div>
            <div class="pure-u-4-5">
                <input type="file" @change="onFileChange">
            </div>
        </div>
        <div class="pure-g m_action m_center">
            <div class="pure-u-1-2">
                <input type="button" @click="goBack" class="btn_cancel" value="取消">
            </div>
            <div class="pure-u-1-2">
                <input type="button" @click="btnSave" class="btn_save" value="保存">
            </div>
        </div>
    </div>
</template>
<script>
 export default{
     data(){
         return {
             username:sessionStorage.getItem('userName'),
             mobile:sessionStorage.getItem('mobile'),
             sex:sessionStorage.getItem('sex'),
             id:sessionStorage.getItem('id'),

         }
     },
     methods:{
         goBack(){
             window.history.go(-1);//返回+刷新
             //window.history.back()//返回
         },
         btnSave(){
             var obj={
                 username: this.username,
                 mobile:this.mobile,
                 sex:this.sex,
                 id:this.id
                     };


             this.$http.post('http://127.0.0.1:9999/updateUserInfo',obj,
                     {emulateJSON: true})
                     .then(function (response) {
                         // 响应成功回调
                         if(response.body.code == 200){
                             sessionStorage.setItem('userName',this.username);
                             sessionStorage.setItem('mobile',this.mobile);
                             sessionStorage.setItem('sex',this.sex);
                             alert(response.body.msg);
                         }
                         else if(response.body.code == 300){
                             alert(response.body.msg);
                         }else{
                             alert(response.body.msg);
                         }

                     }, function (response) {
                         console.log('error:' + JSON.stringify(response));
                         // 响应错误回调
                     });
         },
         onFileChange(e){
             var file = e.target.files || e.dataTransfer.files;
             if(!file.length) return;
             this.createImage(file);

         },
         createImage(file){
             var vm = this
             var reader = null
             var leng = file.length
             for (var i = 0; i < leng; i++) {
                 reader = new window.FileReader()
                 reader.readAsDataURL(file[i])
                 reader.onload = function (e) {
                     vm.images.push(e.target.result)
                 }
             }
         }
     }
 }
</script>