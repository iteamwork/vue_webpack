<template>
    <div id="movie-detail">
        <div class="header pure-g">
            <div class="pure-u-1"  @click="goBack">
                <i class="fa fa-2x fa-angle-left" aria-hidden="true"></i>
            </div>
        </div>

        <!--电影信息-->
        <div class="pure-g m_bg">
            <div class="pure-u-2-5">
                <img :src="detailObj.poster ? `https://gw.alicdn.com/${detailObj.poster}` : 'https://gw.alicdn.com/tps/i1/TB147JCLFXXXXc1XVXXxGsw1VXX-112-168.png'" alt="">
            </div>
            <div class="pure-u-3-5">
                <dl>
                    <dt>{{detailObj.showName}}</dt>
                    <dd class="m_ellipsis">导演:{{ detailObj.director }}</dd>
                    <dd>{{ detailObj.type }}</dd>
                    <dd>{{ detailObj.country }}｜{{ detailObj.duration }}分钟</dd>
                    <dd>{{ detailObj.openTime }}在中国上映</dd>
                    <dd class="full-star pr">
                        <div class="score-start" :style="{width: `${detailObj.remark * 10}%`}"></div>
                        <div class="score pa">{{ detailObj.remark }}分</div>
                    </dd>
                </dl>
            </div>
        </div>

        <!--电影介绍-->
        <div class="pure-g detail">
            <div class="pure-u-1" :class="{'close':isShow}">{{ infoObj.description }}</div>
            <div class="pure-u-1 m_tag"  @click="controlShowMany">
                <div v-if="isShow" >展开</div>
                <div v-else >收起</div>
            </div>
        </div>

        <!--主要演员-->
        <div class="pure-g pic">
            <div class="pure-u-1">
                <div class="yy">主要演员</div>
            </div>
            <div class="pure-u-1">
                <div class="swiper-container">
                    <div class="swiper-wrapper" v-if="infoObj.artistes">
                        <div class="swiper-slide" v-for="item in infoObj.artistes.actor">
                            <div class="am-img pr">
                                <img :src="`https://gw.alicdn.com/${item.avatar}`" alt="">
                                <div class="am-title pa">
                                    <p class="name">{{ item.artisteName }}</p>
                                    <p class="pos">{{ item.profession }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--剧照-->
        <div class="pure-g picPhoto">
            <div class="pure-u-1">
                <div class="yy">剧照</div>
            </div>
            <div class="pure-u-1">
                <div class="swiper-container crew-swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="item in infoObj.trailer">
                            <div class="am-img pr">
                                <img :src="`https://gw.alicdn.com/${item}`" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--评论-->
        <hotEvaluation :lists="evalLists"></hotEvaluation>

    </div>
</template>
<script>
import Swiper from '../assets/js/swiper.min.js'
import hotEvaluation from './index/hotEvaluation.vue'
export default {
    data() {
        return {
            detailObj: {},
            infoObj:{},
            detailStr:'',
            isShow:true,
            evalLists: []
        }
    },
    computed:{

    },
    components:{
        hotEvaluation:hotEvaluation
    },
    created () {
        let id = this.$route.query.id,
            city = this.$route.query.city;
            switch (city){
                case '上海' :
                    city= 'sh';
                    break;
                case '北京' :
                    city= 'bj';
                    break;
                case '广州' :
                    city= 'gz';
                    break;
            }
        //console.log(city);
        //获取电影列表'
        this.$http.get('http://127.0.0.1:9999/getMoviesById?id="'+id+'"&city="'+city+'"',
 //         this.$http.get('http://127.0.0.1:9999/getMoviesById/'+id+'/'+city,
            {emulateJSON: true})
            .then(function (response) {
                // 响应成功回调
                if(response.body.code == 200){
                    //console.log('right:' + JSON.stringify(response.body));
                    this.detailObj = response.body.data;
                    this.detailStr = this.detailObj.detailStr;
                    //获取电影详细内容
                    this.$http.get('http://127.0.0.1:9999/getMoviesByDetailStr/'+this.detailStr,
                            {emulateJSON: true})
                            .then(function (response) {
                                // 响应成功回调
                                if(response.body.code == 200){
                                    //console.log('right:' + JSON.stringify(response.body.data));
                                    this.infoObj = response.body.data.returnValue;
                                    //this.detailStr = this.detailObj.detailStr;
                                }
                                this.initSwiper();
                            }, function (response) {
                                console.log('error:' + response);
                                // 响应错误回调
                            });


                    //获取电影评论
                    this.$http.get('http://127.0.0.1:9999/getMoviesByEvaluation/'+this.detailStr,
                            {emulateJSON: true})
                            .then(function (response) {
                                // 响应成功回调
                                if(response.body.code == 200){
                                    //console.log('right:' + JSON.stringify(response.body.data.returnValue));
                                    this.evalLists = response.body.data.returnValue;
                                }
                                this.initSwiper();
                            }, function (response) {
                                console.log('error:' + response);
                                // 响应错误回调
                            });

                }
            }, function (response) {
                console.log('error:' + response);
                // 响应错误回调
            });


    },
    methods:{
        goBack () {
            window.history.go(-1);
//            this.$router.back()
        },
        controlShowMany:function(){
            this.isShow =!this.isShow;
        },
        initSwiper () {
            this.$nextTick(() => {
                var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    slidesPerView: 'auto',
                    centeredSlides: false,
                    spaceBetween: 5
                })
            })
        }
    }

}
</script>