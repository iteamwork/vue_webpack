<template>
    <div id="index">
        <div class="header pure-g m_center">
            <div class="pure-u-1-3">城市</div>
            <div class="pure-u-1-3">正在热映</div>
            <div class="pure-u-1-3">即将上映</div>
        </div>

        <div class="pure-g">
            <div class="swiper-container pure-u-1" id="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in imgs">
                        <img class="img" :src="'https://gw.alicdn.com/tfs/' + item.smallPicUrl" />
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>

        <div class="pure-g">
            <hot :hotLists="hotLists"></hot>
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
import Swiper from '../assets/js/swiper.min.js'
import hot from './index/hot'
export default {
    name: 'swiper',
    data:function(){
        return{
            citys:[],
            imgs:[],
            hotLists:[]
        }
    },
    components: {
        hot:hot
    },
    computed:{

    },
    watch: {
        imgs() {
            this.$nextTick(() => {
                new Swiper ('.swiper-container', {
                    loop: true,
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    autoplay : 3000,
                    autoplayDisableOnInteraction : false,
                })
            })
        }
    },
    created (){
        //获取用户列表
        var obj = 'zhang';
        this.$http.get('http://127.0.0.1:9999/getUsers/?name='+obj,
            {emulateJSON: true})
            .then(function (response) {
                // 响应成功回调
                if(response.body.code == 200){
                    //console.log('right:' + JSON.stringify(response.body));
                    this.citys = response.body.data;
                }
                else
                    alert('用户名或密码错误...');
            }, function (response) {
                console.log('error:' + response);
                // 响应错误回调
            });


        //获取banner
        this.$http.get('http://127.0.0.1:9999/getBanner',
            {emulateJSON: true})
            .then(function (response) {
                // 响应成功回调
                if(response.body.code == 200){
                    //console.log('right:' + JSON.stringify(response.body.data.returnValue));
                    this.imgs = response.body.data.returnValue;
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
    #index{
        margin-bottom: 3.2rem;
    }


    #index .swiper-pagination-bullet{
        opacity: 0.8;
        background: #e5e8e8;
    }

    #index .swiper-pagination-bullet-active{
        background: #ff5733;
    }


</style>
