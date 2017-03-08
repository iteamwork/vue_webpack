<template>
    <ul id="hot" class="pure-u-1">
        <li class="pure-g" v-for="item in hotLists">
            <div class="pure-u-1-4">
                <img :src="item.poster">
                <!--<img src="https://gw.alicdn.com/"+{item.poster}>-->
            </div>
            <div class="pure-u-3-4">
                <router-link :to="{ path:'/movie/detail/'+ item.id }">{{ item.showName }}</router-link>
            </div>
            <!--<a href="/movie/detail?id={{item.mID }}">{{ item.showName }}</a>-->
            <!--{{ item.showName }}-->
            <!--<router-link :to="{ name: 'detail', params: { id: item.mID }}">-->
                <!--<div>{{ item.showName }}</div>-->
            <!--</router-link>-->

        </li>
    </ul>
</template>
<script>
export default {
    data:function(){
        return{
            hotLists:[]
        }
    },
    created (){
        //获取电影列表
        this.$http.get('http://127.0.0.1:9999/getMoviesByCity',
                {emulateJSON: true})
                .then(function (response) {
                    // 响应成功回调
                    if(response.body.code == 200){
                        console.log('right:' + JSON.stringify(response.body.data.returnValue));
                        this.hotLists = response.body.data.returnValue;
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
<style>
    #hot li a{
        color: #333333;
    }
</style>