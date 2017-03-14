<template>
    <div class="pure-g" id="cinema">
        <ul class="pure-u-1">
           <li v-for="item in list">
               {{item.username}}
           </li>
        </ul>
        <div v-show="isAll" class="pure-u-1 m_data">没有记录了....</div>
    </div>
</template>
<script>
export default {
        name: 'app',
        data ()
            {
                return {
                    list:[],
                    pageObj:{
                        pageIndex:1,
                        limit:5
                    },
                    isAll:false
                }
            },
        created(){
            var self = this;
            self.getUserData();
            $(window).scroll(function () {
                let scrollTop = $(this).scrollTop();
                let scrollHeight = $(document).height();
                let windowHeight = $(this).height();
                if(scrollTop + windowHeight + 20 >= scrollHeight){
                    self.pageObj.pageIndex++;
                    self.getUserData();
                }
            })
        },
        methods:{
            getUserData:function(){
                var self = this;
                console.log("self.pageIndex: " + self.pageObj.pageIndex);
                this.$http.post('http://127.0.0.1:9999/getUsers',self.pageObj,
                    {emulateJSON: true})
                    .then(function (response) {
                        // 响应成功回调
                        if(response.body.code == 200){
                            $.each(response.body.data,function(index,user){
                                self.list.push(user);
                            })
                            if(response.body.data.length < self.pageObj.limit){
                                $(window).unbind();
                                self.isAll = true;
                                setTimeout(function () {
                                    self.isAll = false;
                                },3000)
                            }
                        }
                        else
                            alert('获取列表失败...');
                    }, function (response) {
                        console.log('error:' + JSON.stringify(response));
                        // 响应错误回调
                    });
            }
        }

}
</script>
