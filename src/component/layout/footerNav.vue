<template>
    <div class="footer pure-g m_center" v-show='showNav'>
        <router-link class='pure-u-1-3' :class="{'active': route === '/'}" to="/">
            <div @click='getUrl'>
                <img v-show="route === '/' " src="../../assets/imgs/hok.svg" alt="">
                <img v-show="route !== '/' " src="../../assets/imgs/hno.svg" alt="">
                <div class="m_size">电影</div>
            </div>
        </router-link>
        <router-link class=' pure-u-1-3' :class="{'active': route === '/register'}" to="/register">
            <div @click='getUrl'>
                <img v-show="route !== '/register'" src="../../assets/imgs/mno.svg" alt="">
                <img v-show="route === '/register'" src="../../assets/imgs/mok.svg" alt="">
                <div class="m_size">影院</div>
            </div>
        </router-link>

        <router-link class=' pure-u-1-3' :class="{'active': route === '/user'}" to="/user">
            <div @click='getUrl'>
                <img v-show="route !== '/user'" src="../../assets/imgs/eno.svg" alt="">
                <img v-show="route === '/user'" src="../../assets/imgs/eok.svg" alt="">
                <div class="m_size">我的</div>
            </div>
        </router-link>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return {
        }
    },
    props:{
        'showNav': {
            type: Boolean,
            default: true
        }
    },
    computed:{
        route () {
            return this.$route.path
        }
    },
    methods: {
        getUrl:function() {
            console.log(this.$route.path)
        }
   },
}
</script>

