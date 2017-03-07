<template>
  <div id="app">
    <router-view class="view"></router-view>

    <footerNav :showNav="showNav"></footerNav>
  </div>
</template>
<script>
import footerNav from './component/layout/footerNav'
export default {
  name: 'app',
  data () {
    return {
      showNav:true
    }
  },
  components:{
    footerNav:footerNav
  },
  watch: {
    // 如果路由有变化，会执行该方法
    '$route': function() {
      this.routeChange()
    }
  },
  methods: {
    routeChange () {
      let path = this.$route.path
//      console.log("path: " + path.indexOf('/user/'));
//      if(path.indexOf('/user/')>=0){
//        if(!sessionStorage.userName){
//          redirect
//          window.location.href='/login';
//        }
//      }
      if (path === '/' || path === '/cinema' || path === '/user') {
        this.showNav = true
      } else {
        this.showNav = false
      }
    }
  },
  created () {
    this.routeChange()
  }
}
</script>

