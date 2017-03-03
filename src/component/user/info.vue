<template>
    <div id="user">
        <div class="pure-g">
            <div class="pure-u-1 img">
                <div class="m_p2">
                    <img class="face_img" src="../../assets/default_img.png" alt="pic">
                </div>
                <div class="m_padtop">
                    <div  v-model="username"></div>
                    <router-link  to="/login">请点击登录</router-link>
                </div>
                <div >
                    <ul class="share">
                        <li>修改资料</li>
                        <li>修改密码</li>
                        <li>退出登录</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="pure-g">
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            isLogin:false,
            username:'zhangqin'
        }
    }
}
</script>