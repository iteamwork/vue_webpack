<template>
    <div id="hotEvaluation">
        <ul>
            <li v-for="item in lists">
                <div>{{ item.nickName }}</div>
            </li>
        </ul>
    </div>
</template>
<script>
export default{
        data:function () {
        return {
        }
    },
    props: {
        lists: {
            type: Array,
            default: function(){
                return []
            }
        }
    }
}
</script>