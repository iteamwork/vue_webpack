<template>
    <div class="pure-g">
        <ul id="hot" class="pure-u-1">
            <li class="pure-g b_bottom" v-for="item in hotLists">
                <div class="pure-u-1-4 m_center" :style="{'position':'relative'}">
                    <img  :src="item.poster | addPrefix">
                    <div @click="playMovieVideo(item.preview[0].iphoneUrl
    , `https://gw.alicdn.com/${item.poster}`)" class="m_pos">
                        <img src="https://gw.alicdn.com/tps/TB1PH2uLXXXXXaLaXXXXXXXXXXX-60-60.png" alt="">
                    </div>
                </div>
                <div class="pure-u-7-12">
                    <router-link :to="{ path:'/movie/detail/'+ item.id }">
                        <span>{{ item.showName }}</span>
                        <span class="vm type-3dimax" v-if="item.showMark == 'IMAX3D'">
                            {{item.showMark}}
                        </span>
                        <span class="vm type-imax" v-if="item.showMark == 'IMAX'">
                            {{item.showMark}}
                        </span>
                        <span class="vm type-3d" v-if="item.showMark == '3D'">
                            {{item.showMark}}
                        </span>

                        <div class="full-star pr">
                            <div class="score-start" :style="{width: `${item.remark * 10}%`}"></div>
                            <div class="score pa">{{ item.remark }}</div>
                        </div>
                        <p>导演:{{item.director}}</p>
                        <p>{{ item.highlight }}</p>
                        <p>{{ item.leadingRole}}</p>

                    </router-link>
                </div>
                <div class="pure-u-1-6 m_center">
                    <input v-if="item.openTime < '2017-03-09'" type="button" value="购买" class="btn btn_buy">
                    <input v-else type="button" value="预售" class="btn forward_buy">
                </div>
                <div class="pure-u-1 m_center m_act">
                    <div class="m_title m_left" :style="{color:'#fea54c'}">1212五折狂</div>
                    <div class="m_title">1212特惠抢票</div>
                </div>
                <!--<router-link :to="{ name: 'detail', params: { id: item.mID }}">-->
                    <!--<div>{{ item.showName }}</div>-->
                <!--</router-link>-->

            </li>

        </ul>

        <div id="playVideo" class="pure-u-1">
            <div class="mask video-mask" @click="cancelMask" v-show="showMask">
                <div class="video-box pa">
                    <div class="v-cover" @click="videoStop">
                        <video :src="videoUrl" ref="video" class="v-content" :poster="poster"></video>
                    </div>
                    <div class="v-icon" @click="videoStart" v-if="showIcon">
                        <img src="https://gw.alicdn.com/tps/TB1PH2uLXXXXXaLaXXXXXXXXXXX-60-60.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data:function(){
        return{
            hotLists:[],
            showMask:false,
            videoUrl:'',
            poster:'',
            showIcon:true
        }
    },
    filters:{
        addPrefix:function(val){
          return  "https://gw.alicdn.com/" + val;
      }
    },
    created (){
        //获取电影列表
        this.$http.get('http://127.0.0.1:9999/getMoviesByCity',
                {emulateJSON: true})
                .then(function (response) {
                    // 响应成功回调
                    if(response.body.code == 200){
                        console.log('right:' + JSON.stringify(response.body.data));
                        this.hotLists = response.body.data.returnValue;
                    }
                    else
                        alert('用户名或密码错误...');
                }, function (response) {
                    console.log('error:' + response);
                    // 响应错误回调
                });

    },
    methods:{
        playMovieVideo:function(url,poster){
            this.videoUrl = url;
            this.poster =  poster;
            this.showMask = true
        },
        cancelMask(event){
            console.log(event.target.className);
            if(event.target.className =="mask video-mask"){
                this.videoStop()
                this.showMask = false
                //this.pauseVideo()
            }

        },
        videoStart(){
            this.showIcon = false
            let video = this.$refs.video
            video.play()
        },
        videoStop(){
            this.showIcon = true
            let video = this.$refs.video
            video.pause()
        }
    },
    mounted () {
        let video = this.$refs.video
        video.onended = () => {
            this.showIcon = true
        }
    }
}
</script>
<style>

    #hot{
        background: #fff;
    }

    #hot li a{
        color: #333333;
        display: inline-block;
        width: 100%;
    }

    #hot .b_bottom{
        border-bottom: 1px solid #d9d9d9;
        padding: 1rem 0rem 0rem 0rem;
    }

    #hot .b_bottom .m_pos{
        position: absolute;
        left: 7.5%;
        width: 85%;
        bottom: 0;
        top: 0;
    }
    #hot .b_bottom .m_pos img{
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 0.75rem;
        padding-top: 2.75rem;
    }


    #hot .b_bottom img{
        width: 85%;
        height: 7rem;
    }

    #hot .b_bottom .btn{
        padding: 0.25rem 0.5rem;
        background-color: #fff;
        border-radius: 0.2rem;
        font-size: 0.8rem;
    }

    #hot .b_bottom .forward_buy{
        border: 1px solid #37b7ff;
        color: #37b7ff;
    }
    #hot .b_bottom .btn_buy{
        border: 1px solid #ff4d64;
        color: #ff4d64;
        padding-left: 0.5rem;
    }

    #hot .b_bottom .vm{
        border: 1px solid #f1f1f1;
        color: #c1c1c1;
        display: inline-block;
        font-size: 0.7rem;
        padding: 0.1rem 0.2rem;
        border-radius: 0.2rem;
    }

    #hot .b_bottom .full-star {
        position: relative;
        margin-top: 0.4rem;
        width: 4rem;
        height: 0.8rem;
        background-size: auto 100%;
        background-image: url('../../assets/imgs/nostart.svg');
    }
    #hot .b_bottom .score-start {
        width: 100%;
        height: 100%;
        background-size: auto 100%;
        background-image: url('../../assets/imgs/star.svg');
    }


    #hot .b_bottom .score{
        position: absolute;
        top: 0;
        left: 4.5rem;
        font-size: 0.8rem;
    }

    #hot .b_bottom p{
        font-size: 0.8rem;
        padding-top: 0.6rem;
        color: #9c9c9c;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }


    #hot .b_bottom .m_act{
        border-top: 1px solid #e1e1e1;
        /*border-bottom: 1px solid #e1e1e1;*/
        padding: 0.5rem 0rem;
        margin-top: 0.4rem;
    }

    #hot .b_bottom .m_act .m_left{
        border-right: 1px solid #e1e1e1;
    }

    #hot .b_bottom .m_act .m_title{
        width: 49%;
        float: left;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

</style>