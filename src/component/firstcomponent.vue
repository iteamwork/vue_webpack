<template>
  <div id="firstcomponent">
    <h1>I am a title.</h1>
    <a> written by {{ author }} </a>
    <ul>
      <li><router-link to="/first/tab1">tab1</router-link></li>
      <li><router-link to="/first/tab2">tab2</router-link></li>
    </ul>
    <router-view class="view">

    </router-view>
  </div>
</template>

<script type="text/javascript">

export default {
  data () {
    return {
      author: "测试中...."
    }
  }
}
</script>