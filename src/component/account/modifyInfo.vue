<template>
    <div id="modifyInfo">
        <div class="pure-g m_center header">
            <div class="pure-u-1-8">
                <i aria-hidden="true" class="fa fa-2x fa-angle-left" @click="goBack"></i>
            </div>
            <div class="pure-u-3-4 m_size">个人设置</div>
        </div>
        <div class="pure-g m_pad">
            <div class="pure-u-1-3">昵称:</div>
            <div class="pure-u-2-3">
                <input type="text">
            </div>
            <div class="pure-u-1-3">手机:</div>
            <div class="pure-u-2-3">
                <input type="text">
            </div>
            <div class="pure-u-1-3">性别:</div>
            <div class="pure-u-2-3">
                <div class="pure-g m_border">
                    <div class="pure-u-1-2">
                        <input   type="radio" name="sex">男
                    </div>
                    <div class="pure-u-1-2">
                        <input  type="radio" name="sex">女
                    </div>
                </div>
            </div>
        </div>
        <div class="pure-g m_action m_center">
            <div class="pure-u-1-2">
                <input type="button" class="btn_cancel" value="取消">
            </div>
            <div class="pure-u-1-2">
                <input type="button" class="btn_save" value="保存">
            </div>
        </div>
    </div>
</template>
<script>
 export default{
     data(){
         return {}
     },
     methods:{
         goBack(){
             window.history.go(-1);//返回+刷新
             //window.history.back()//返回
         }
     }
 }
</script>