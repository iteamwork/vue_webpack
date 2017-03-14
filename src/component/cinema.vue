<template>
    <div class="pure-g" id="cinema">
        <ul class="pure-u-1">
           <li v-for="item in list">
               {{item.username}}
           </li>
        </ul>
    </div>
</template>
<script>
export default {
        name: 'app',
        data ()
            {
                return {
                    list: []
                }
            },
        created(){
            this.$http.get('http://127.0.0.1:9999/getUsers',
                {emulateJSON: true})
                .then(function (response) {
                    // 响应成功回调
                    if(response.body.code == 200){
                        console.log(response.body.data)
                        this.list = response.body.data;
                    }
                    else
                        alert('获取列表失败...');
                }, function (response) {
                    console.log('error:' + JSON.stringify(response));
                    // 响应错误回调
                });
        }
}
</script>
