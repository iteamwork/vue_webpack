<template>
    <div id="index">
        <div class="header pure-g m_center">
            <div class="pure-u-1-3">城市</div>
            <div class="pure-u-1-3">正在热映</div>
            <div class="pure-u-1-3">即将上映</div>
        </div>
        <div class="content">
            <div class="pure-g">
                <ul class="pure-u-1">
                    <li v-for="city in citys" >{{city.username}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'app',
    data:function(){
        return{
            citys:[]
        }
    },
    computed:{

    },
    created (){
        var obj = 'zhang';
        this.$http.get('http://127.0.0.1:9999/getUsers/?name='+obj,
            {emulateJSON: true})
            .then(function (response) {
                // 响应成功回调
                if(response.body.code == 200){
                    console.log('right:' + JSON.stringify(response.body));
                    this.citys = response.body.data;
                }
                else
                    alert('用户名或密码错误...');
            }, function (response) {
                console.log('error:' + response);
                // 响应错误回调
            });
    }
}
</script>
