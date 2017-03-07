<template>
    <div class="info">
        <h3 class="m_center"> here is {{ msg }} </h3>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                msg: "咨询服务",
            }
        }
//    ,
//        created () {
//            if(sessionStorage.getItem('userName')==""){
////                console.log(this.$route.path);
//                window.location.href='/login';
//            }
//        }
    }
</script>