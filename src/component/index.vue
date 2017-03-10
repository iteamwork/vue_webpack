<template>
    <div id="index">
        <div class="header pure-g m_center">
            <div class="pure-u-1-3">城市</div>
            <div class="pure-u-2-3">
                <div class="pure-g tab" @click="chooseNav">
                    <div hot='sel' class="pure-u-1-2" :class="{'active':selNav}">正在热映</div>
                    <div class="pure-u-1-2" :class="{'active':!selNav}">即将上映</div>
                </div>
            </div>
        </div>


        <div :style="{'width':'100%'}" v-show="selNav">
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
            <hot :hotLists="hotLists"></hot>
        </div>
        <div :style="{'width':'100%'}" v-show="!selNav">
            <coming :comingLists="comingLists"></coming>
        </div>

    </div>
</template>
<script>
import Swiper from '../assets/js/swiper.min.js'
import hot from './index/hot'
import coming from './index/coming'
import playVideo from './index/playVideo.vue'
export default {
    name: 'swiper',
    data:function(){
        return{
            comingLists:[],
            imgs:[],
            hotLists:[],
            selNav:true
        }
    },
    components: {
        hot:hot,
        playVideo:playVideo,
        coming:coming
    },
    computed:{

    },
    methods:{
        chooseNav (event){
            event.target.getAttribute('hot')? (this.selNav = true) : (this.selNav = false);
        },
        selectHotTab(){
            this.selNav = true;
        },
        slectComingTab(){
            this.selNav = false;
        }
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
        this.$http.get('http://127.0.0.1:9999/getComingMovies/',
            {emulateJSON: true})
            .then(function (response) {
                // 响应成功回调
                if(response.body.code == 200){
                    //console.log('right:' + JSON.stringify(response.body.data));
                    this.comingLists = response.body.data.returnValue;
                }
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
