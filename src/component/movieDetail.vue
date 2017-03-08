<template>
    <div id="movie-detail">
        <h3>这里是电影详情</h3>
    </div>
</template>
<script>
export default {
    data () {
        return {
            author: "测试中...."
        }
    },
    created () {
        let id = this.$route.params.id;
        console.log(id);
    }
}
</script>