<template>
    <div id="movie-detail">
        <div class="header pure-g">
            <div class="pure-u-1"  @click="goBack">
                <i class="fa fa-2x fa-angle-left" aria-hidden="true"></i>
            </div>
        </div>
        <div class="pure-g m_bg">
            <div class="pure-u-2-5">
                <img :src="detailObj.poster ? `https://gw.alicdn.com/${detailObj.poster}` : 'https://gw.alicdn.com/tps/i1/TB147JCLFXXXXc1XVXXxGsw1VXX-112-168.png'" alt="">
            </div>
            <div class="pure-u-3-5">
                <dl>
                    <dt>{{detailObj.showName}}</dt>
                    <dd class="m_ellipsis">{{ detailObj.showNameEn }}</dd>
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

        <div class="pure-g detail">
            <div class="pure-u-1 close">{{ infoObj.description }}</div>
            <div @click="tag" class="pure-u-1 m_tag">展开</div>
        </div>

    </div>
</template>
<script>
export default {
    data () {
        return {
            detailObj: {},
            infoObj:{},
            detailStr:''
        }
    },
    computed:{

    },
    created () {
        let id = this.$route.params.id;
        //获取电影列表'
        this.$http.get('http://127.0.0.1:9999/getMoviesById/'+id,
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
                                    console.log('right:' + JSON.stringify(response.body.data));
                                    this.infoObj = response.body.data.returnValue;
                                    //this.detailStr = this.detailObj.detailStr;
                                }
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
            this.$router.back()
        }
    }

}
</script>