<template>
    <div class="pure-g" id="hotEvaluation">
        <div class="pure-u-1 m_comment">热门评价<span>({{lists.length}}条)</span></div>
        <div class="pure-u-1 m_records" v-for="item in lists">
            <div class="pure-g">
                <div class="pure-u-1-8">
                    <img class="small_pic" src="https://gw.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_100x100.jpg" alt="">
                </div>
                <div class="pure-u-7-8">
                    <div class="pure-g m_title">
                        <div class="pure-u-1-2 m_name" >{{ item.nickName }}</div>
                        <div class="pure-u-1-2 m_time" :style="{'text-align' : 'right'}">{{ item.commentTime | convertTime }}</div>
                    </div>
                    <div class="pure-g">
                        <div class="pure-u-1" :style="{'font-size':'0.8rem','line-height':'1.2rem'}">
                            {{ item.content }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
    },
    filters:{
        convertTime:function(val){
            console.log(val);
            var   date = new Date(parseInt(val));
            let   Y = date.getFullYear() + '-';
            let   M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
            let   D = date.getDate() + ' ';
            let   h = date.getHours() + ':';
            let   m = date.getMinutes()<10 ?'0'+(date.getMinutes()):date.getMinutes() ;
            let   s =  ':'+date.getSeconds();
            return M+D+h+m
            //this.changeTime(val);
        }
    },
    computed:{
    },
    methods:{
        changeTime:function(val){
            var   date = new Date(val);
            let   Y = date.getFullYear() + '-';
            let   M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
            let   D = date.getDate() + ' ';
            let   h = date.getHours() + ':';
            let   m = date.getMinutes() + ':';
            let   s = date.getSeconds();
            return Y+M+D+h+m+s
        }
    },
    created(){
    }
}
</script>