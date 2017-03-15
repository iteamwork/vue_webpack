<template>
    <div id="coming" class="pure-u-1">
        <div class="pure-u-1 m_divide"></div>
        <ul class="pure-u-1">
            <li class="pure-g b_bottom" v-for="item in comingLists">
                <div class="pure-u-1-4 m_center" :style="{'position':'relative'}">
                    <img  :src="item.poster | addPrefix">
                </div>
                <div class="pure-u-7-12">
                    <router-link :to="{ path:'/movie/detail', query:{id:item.id,city:'上海'}}">
                        <span>{{ item.showName }}</span>
                        <span class="vm type-3dimax" v-if="item.showMark == 'IMAX3D'">
                            {{item.showMark}}
                        </span>
                        <span class="vm type-imax" v-if="item.showMark == 'IMAX'">
                            {{item.showMark}}
                        </span>
                        <span class="vm type-3d" v-if="item.showMark == '3D'">
                            {{item.showMark}}
                        </span>
                        <p class="m_color">{{ item.wantCount }}人想看</p>
                        <p>导演:{{item.director}}</p>
                        <p>主演:{{ item.leadingRole }}</p>
                        <p>上映时间:{{ item.openTime | addYear }}</p>
                    </router-link>
                </div>
                <div class="pure-u-1-6 m_center">
                    <input  type="button" value="预售" class="btn forward_buy">
                </div>
            </li>

        </ul>
    </div>

</template>
<script>
    export default{
        data(){
            return{}
        },
        props:{
            'comingLists':{
                type:Array,
                default:() =>[]
            }
        },
        filters:{
            addPrefix:function(val){
                return  "https://gw.alicdn.com/" + val;
            },
            addYear(val){
                return (parseInt(val.substring(0,4))+1).toString()+val.substring(4);
            }
        },
    }
</script>
<style>

    #coming{
        background: #fff;
    }

    #coming .m_divide{
        height: 1rem;
        background-color: #e1e1e1;
    }


    #coming li a{
        color: #333333;
        display: inline-block;
        width: 100%;
    }

    #coming .b_bottom{
        border-bottom: 1px solid #d9d9d9;
        padding: 0.7rem 0rem;
    }


    #coming .b_bottom .m_color{
        color:rgb(254, 165, 76);
    }

    #coming .b_bottom .m_pos{
        position: absolute;
        left: 7.5%;
        width: 85%;
        bottom: 0;
        top: 0;
    }
    #coming .b_bottom .m_pos img{
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 0.75rem;
        padding-top: 2.75rem;
    }

    #coming .b_bottom img{
        width: 85%;
        height: 7rem;
    }

    #coming .b_bottom .btn{
        padding: 0.25rem 0.5rem;
        background-color: #fff;
        border-radius: 0.2rem;
        font-size: 0.8rem;
    }

    #coming .b_bottom .forward_buy{
        border: 1px solid #37b7ff;
        color: #37b7ff;
    }
    #coming .b_bottom .btn_buy{
        border: 1px solid #ff4d64;
        color: #ff4d64;
        padding-left: 0.5rem;
    }

    #coming .b_bottom .vm{
        border: 1px solid #f1f1f1;
        color: #c1c1c1;
        display: inline-block;
        font-size: 0.7rem;
        padding: 0.1rem 0.2rem;
        border-radius: 0.2rem;
    }

    #coming .b_bottom .full-star {
        position: relative;
        margin-top: 0.4rem;
        width: 4rem;
        height: 0.8rem;
        background-size: auto 100%;
        background-image: url('../../assets/imgs/nostart.svg');
    }
    #coming .b_bottom .score-start {
        width: 100%;
        height: 100%;
        background-size: auto 100%;
        background-image: url('../../assets/imgs/star.svg');
    }

    #coming .b_bottom .score{
        position: absolute;
        top: 0;
        left: 4.5rem;
        font-size: 0.8rem;
    }

    #coming .b_bottom p{
        font-size: 0.8rem;
        padding-top: 0.6rem;
        color: #9c9c9c;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    #coming .b_bottom .m_act{
        border-top: 1px solid #e1e1e1;
        /*border-bottom: 1px solid #e1e1e1;*/
        padding: 0.5rem 0rem;
        margin-top: 0.4rem;
    }

    #coming .b_bottom .m_act .m_left{
        border-right: 1px solid #e1e1e1;
    }

    #coming .b_bottom .m_act .m_title{
        width: 49%;
        float: left;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
</style>