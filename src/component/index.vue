<template>
    <div id="index">
        <div class="header pure-g m_center">
            <div class="pure-u-1-3">
                <div @click="chooseCity" class="icon">{{city}}
                    <i :class="{'fa-angle-down':selCity}" class="fa fa-lg fa-angle-up skew" aria-hidden="true"></i>
                </div>
            </div>
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
            <hot :hotLists="hotLists" :city="city"></hot>

            <div v-show="showCityMask" class="pure-g mask">
                <ul @click="getVal" class="pure-u-1">
                    <li value="上海">上海</li>
                    <li value="北京">北京</li>
                    <li value="广州">广州</li>
                    <li value="成都">成都</li>
                    <li value="武汉">武汉</li>
                    <li value="合肥">合肥</li>
                    <li value="南京">南京</li>
                    <li value="郑州">郑州</li>
                </ul>
            </div>


        </div>
        <div :style="{'width':'100%'}" v-show="!selNav">
            <coming :comingLists="comingLists"></coming>
        </div>

        <div class="loadingMask" v-show="showLoading">
            <div class="pure-g">
                <div class="pure-u-1 load">
                    <i class='fa fa-spinner fa-pulse fa-5x fa-fw'></i><span :style="{'font-size':'1rem'}">loading...</span>
                </div>
            </div>
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
            selNav:true,
            city:'上海',
            selCity:true,
            showCityMask:false,
            showLoading:true
        }
    },
    components: {
        hot:hot,
        playVideo:playVideo,
        coming:coming
    },
    computed(){

    },
    mounted(){
        $('.load').css({
            top:($(window).height() - $('.load').height()) / 2,
            left:($(window).width() - $('.load').width()) / 2
        })
    },
    methods:{
        chooseNav (event){
            event.target.getAttribute('hot')? (this.selNav = true) : (this.selNav = false);
        },
        chooseCity(){
            this.showCityMask = true;
            this.selCity = false;
        },
        getVal(e){
            this.city = e.target.innerHTML;
            this.selCity = true;
            this.showCityMask = false;
            //console.log(e.target.innerHTML);
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
        //获取预售电影
        var obj = 'zhang';
        this.$http.get('http://127.0.0.1:9999/getComingMovies/',
            {emulateJSON: true})
            .then(function (response) {
                // 响应成功回调
                if(response.body.code == 200){
                    //console.log('right:' + JSON.stringify(response.body.data));
                    this.comingLists = response.body.data.returnValue;
                }
                this.showLoading = false;
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

