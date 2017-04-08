<template>
    <div class="cl-box flex-wrap col-flex">
        <header class="app-header">
            <v-header></v-header>
        </header>
        <v-search></v-search>
        <div class="flex-wrap row-flex midCenter cl-nav">
            <div class="page midCenter">综合</div>
            <div class="page midCenter flex-wrap row-flex v-ud active">客户级别<i class=''></i></div>
            <div class="page midCenter flex-wrap row-flex v-ud">询价时间<i class='acs'></i></div>
            <div class="page midCenter v-sx active"
                @click="showSc = true">筛选</div>
        </div>
        <yd-infinitescroll :on-infinite="loadList" class="page">
            <div slot="list">


                <div class="c-item-box flex-wrap row-flex mx-Center"
                    @click="jump('/clue/msg')">
                    <div class="page flex-wrap col-flex">
                        <div class="flex-wrap row-flex mx-Center">
                            <div class="c-title">雷诺</div>
                            <div class="c-old">雷诺</div>
                        </div>
                        <div class="c-txt">新疆新疆吐鲁番吐鲁番</div>
                        <div class="page flex-wrap row-flex mx-Center">
                            <div class="v-name">置换</div>
                            <div class="v-name">贷款</div>
                        </div>
                    </div>

                    <div class="c-str fil deo">A 精品</div>
                </div>


            </div>

            <!-- 数据全部加载完毕显示 -->
            <span slot="doneTip">～我是有底线滴～</span>

            <!-- 加载中提示 -->
            <div slot="loadingTip" class="loading visible load-boxs">
                <span class="loading-ring"> </span>
            </div>
        </yd-infinitescroll>

        <yd-popup v-model="showSc" position="right" width="80%">
            <v-scnav @hides="hideSc"></v-scnav>
        </yd-popup>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                showSc: false,
                page: 1,
                DATA:[]
            }
        },
        methods: {
            hideSc () { this.showSc = !this.showSc},
            // /* 所有数据加载完毕 */
            // window.$yduiBus.$emit('ydui.infinitescroll.loadedDone')
                  
            // /* 单次请求数据完毕 */
            // window.$yduiBus.$emit('ydui.infinitescroll.finishLoad')
            loadList() {},
            loist() {
                window.$yduiBus.$emit('ydui.infinitescroll.loadedDone')
            }
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

.c-item-box{
    padding: 0.12rem 0.3rem 0.2rem;
    border-bottom: 0.02rem solid #eee;
    background-color: #fff;
}
.c-str{height: 0.6rem; line-height: 0.6rem; border:0.02rem solid #00b800; color: #00b800; border-radius: 4px; font-size: 0.28rem; padding: 0 0.1rem; text-align: center;}
.c-title,.c-txt{font-size:0.33rem; color: #333;height: 0.6rem; line-height: 0.6rem;overflow: hidden; text-overflow:ellipsis; white-space:nowrap;}
.c-txt{font-size: 0.24rem; color:#666; height: 0.5rem; line-height: 0.5rem;}
.v-name{height: 0.4rem; line-height: 0.4rem; padding: 0 0.08rem;border:0.02rem solid #ccc; color: #666; border-radius: 4px; margin-right: 0.1rem; font-size: 0.24rem;}
.c-old{padding-left: 0.2rem; font-size: 0.26rem; color: #666;}

.fil{color: #666; border-color: #666;}
.deo{color: #ff6500; border-color: #ff6500;}
</style>
