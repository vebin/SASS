<template>
    <div class="cl-box flex-wrap col-flex">
        <v-nus txt="您还没有购买过卡豆～"></v-nus>
        <yd-infinitescroll v-if="false" :on-infinite="loadList" class="scroll-wrap flex-wrap col-flex">
            <div slot="list">


                <div class="c-item-box flex-wrap col-flex">
                    <div class="se-title">T345434534545</div>
                    <div class="flex-wrap row-flex">
                        <div class="page se-txt">购买卡豆：<i class="v-now">20</i></div>
                        <div class="page se-txt">实付金额：<i class="se-red">¥ 300</i></div>
                    </div>
                    <div class="se-foot">2017-03-04</div>
                </div>


            </div>

            <!-- 数据全部加载完毕显示 -->
            <span slot="doneTip">～我是有底线滴～</span>

            <!-- 加载中提示 -->
            <div slot="loadingTip" class="loading visible load-boxs">
                <span class="loading-ring"> </span>
            </div>

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
            loadList() {},
            loist() {
                window.$yduiBus.$emit('ydui.infinitescroll.loadedDone')
            }
        }
    }
</script>
<style lang="less" scoped>
.cl-box{width: 100%; height: 100%;}


.c-item-box{
    height: 1.9rem;
    padding: 0.12rem 0.3rem;
    border-bottom: 0.02rem solid #eee;
    background-color: #fff;
}

.se-title,.se-txt,.se-foot{font-size:0.24rem; color: #666;height: 0.6rem; line-height: 0.6rem;overflow: hidden; text-overflow:ellipsis; white-space:nowrap; border-bottom: 0.02rem solid #eee;}
.se-txt{color:#333;font-size:0.26rem;  border-bottom: 0; padding-top: 0.04rem;}
.se-foot{border-bottom: 0; height: 0.4rem; line-height: 0.4rem;}
.se-red{color: red;}
.v-now{color: #ff6500; font-weight: 500; padding-right: 0.2rem;}
.v-now:before{ content: '\e602'; font-family:'iconfont'; margin-right: 0.1rem; color: #ff9800;}

</style>
