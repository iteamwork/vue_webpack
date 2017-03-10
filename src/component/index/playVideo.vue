<template>
    <div id="playVideo" class="pure-u-1">
        <div class="mask video-mask" @click="cancelMask" v-show="showMask">
            here
        </div>


        <!--<section class="mask video-mask" @click="cancelMask" v-show="showMask">-->
            <!--<div class="video-box pa">-->
                <!--<div class="v-cover">-->
                    <!--<video :src="$store.state.video.url" ref="video" class="v-content" :poster="$store.state.video.cover"></video>-->
                <!--</div>-->
                <!--<div class="v-icon pa" @click="videoStar" v-if="showIcon">-->
                <!--</div>-->
            <!--</div>-->
        <!--</section>-->
    </div>
</template>
<script>
export default {
    data(){
        return {
            showMask:true
        }
    },
    methods:{
        cancelMask(){
            this.showMask = false
        }
    }
}
</script>