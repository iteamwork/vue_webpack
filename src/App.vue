<template>
  <div id="app">
    <!--<ul>-->
      <!--<li><router-link to="/first">第一页</router-link></li>-->
      <!--<li><router-link to="/second">第二页</router-link></li>-->
      <!--<li><router-link to="/login">登录</router-link></li>-->
      <!--<li><router-link to="/register">注册</router-link></li>-->
    <!--</ul>-->

    <router-view class="view"></router-view>

    <footerNav></footerNav>
  </div>

</template>
<script>
import footerNav from './component/layout/footerNav'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components:{
    footerNav:footerNav
  }
}
</script>

