<template>
    <div class="cl-box flex-wrap col-flex">
        <v-search></v-search>
        <div class="flex-wrap row-flex midCenter cl-nav">
            <div class="page midCenter">综合</div>
            <div class="page midCenter flex-wrap row-flex v-ud active">客户级别<i class=''></i></div>
            <div class="page midCenter flex-wrap row-flex v-ud">询价时间<i class='acs'></i></div>
            <div class="page midCenter v-sx active">筛选</div>
        </div>
        <yd-infinitescroll :on-infinite="loadList" class="page">
            <div slot="list">

                <div v-for="item in DATA">
                    
                </div>
            </div>

            <!-- 数据全部加载完毕显示 -->
            <span slot="doneTip">～我是有底线滴～</span>

            <!-- 加载中提示 -->
            <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>

        </yd-infinitescroll>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                page: 1,
                DATA:[]
            }
        },
        methods: {
            // /* 所有数据加载完毕 */
            // window.$yduiBus.$emit('ydui.infinitescroll.loadedDone')
                  
            // /* 单次请求数据完毕 */
            // window.$yduiBus.$emit('ydui.infinitescroll.finishLoad')
            loadList() {}
        }
    }
</script>
<style lang="less" scoped>
.cl-box{width: 100%; height: 100%;}
.cl-nav{
    background-color: #fff;
    border: 0.02rem solid #e6e6e6;
    border-left: 0;
    border-right: 0;
    height: 0.8rem;
    font-size:0.3rem; 
    div{
        text-align: center;
    }
}
.v-sx:after{content:'\e61b'; font-family: 'iconfont'; color: #9e9e9e; margin-left: 0.1rem;}
.v-sx.active:after{color:#00b800;}

.v-ud{
    i{
      margin-left: 0.1rem;
      &:before{
         content:' ';
         width: 0;
         height: 0;
         display: block;
         border-left: 0.08rem solid transparent;
         border-right: 0.08rem solid transparent;
         border-bottom: 0.12rem solid #9e9e9e;
         margin-bottom: 0.06rem;
      }
      &:after{
        content:' ';
        width: 0;
        height: 0;
        display: block;
        border-left: 0.08rem solid transparent;
        border-right: 0.08rem solid transparent;
        border-top: 0.12rem solid #9e9e9e;
      }
    }
  }
.active{
    color: #00b800;
    i:before{}
    i:after{border-top: 0.12rem solid #00b800;}
    .acs:before{border-bottom: 0.12rem solid #00b800;}
    .acs:after{border-top: 0.12rem solid #ccc;}
}

</style>
