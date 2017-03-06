<template>
    <div class="footer pure-g m_center">
        <div @click='getUrl' class="pure-u-1-3 active"><router-link to="/">电影</router-link></div>
        <div @click='getUrl' class="pure-u-1-3"><router-link to="/register">影院</router-link></div>
        <div @click='getUrl' class="pure-u-1-3"><router-link to="/user">我的</router-link></div>
    </div>
</template>
<script>
export default{
    data(){
        return {
        }
    },
   methods: {
        getUrl:function() {
            console.log(this.$route.path)
        }
   },
}
</script>
<style>

</style>
