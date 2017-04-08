<template>
    <div class="cl-box flex-wrap col-flex">
        <header class="app-header">
            <v-header></v-header>
        </header>
        <div class="flex-wrap row-flex midCenter cl-nav">
            <div class="page midCenter">综合</div>
            <div class="page midCenter">精品</div>
            <div class="page midCenter flex-wrap row-flex m-v"
                @click="showAddr = true">地区<i></i></div>
            <div class="page midCenter flex-wrap row-flex m-v"
                @click="showType = true">类别<i></i></div>
        </div>
        <yd-infinitescroll :on-infinite="loadList" class="scroll-wrap flex-wrap col-flex">
            <div slot="list">



                <div class="c-item-box flex-wrap col-flex"
                    @click="jump('/clue/buy')">
                    <div class="flex-wrap row-flex mx-Center">
                        <div class="c-str">精品</div>
                        <div class="page c-title">雷诺等了色的课程 6X4 牵引车</div>
                    </div>
                    <div class="flex-wrap row-flex">
                        <div class="page c-txt">新疆 吐鲁番</div>
                        <div class="page c-txt">路飞 10分钟前</div>
                    </div>
                    <div class="page flex-wrap row-flex">
                        <div class="page flex-wrap row-flex">
                            <div class="page flex-wrap row-flex mx-Center">
                                <div class="v-name">置换</div>
                                <div class="v-name">贷款</div>
                            </div>
                        </div>
                        <div class="page flex-wrap row-flex">
                            <div class="page flex-wrap row-flex fx-end">
                                <div class="v-now">20</div>
                                <div class="v-old">30</div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

            <!-- 数据全部加载完毕显示 -->
            <span slot="doneTip">～我是有底线滴～</span>

            <!-- 加载中提示 -->
            <div slot="loadingTip" class="loading visible load-boxs">
                <span class="loading-ring"> </span>
            </div>

        </yd-infinitescroll>
        <yd-popup v-model="showAddr" position="right" width="60%">
            <v-addr @hides="hideAddr"></v-addr>
        </yd-popup>
        <yd-popup v-model="showType" position="right" width="80%">
            <v-cartype @hides="hideType"></v-cartype>
        </yd-popup>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                showAddr: false,
                showType: false,
                page: 1,
                DATA:[]
            }
        },
        methods: {
            hideAddr () { this.showAddr = !this.showAddr},
            hideType () { this.showType = !this.showType},
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
.m-v{
    i{ margin-left: 0.1rem;}
    i:after{
        content:' ';
        width: 0;
        height: 0;
        display: block;
        border-left: 0.08rem solid transparent;
        border-right: 0.08rem solid transparent;
        border-top: 0.12rem solid #9e9e9e;
    }
}

.c-item-box{
    height: 2rem;
    padding: 0.12rem 0.3rem;
    border-bottom: 0.02rem solid #eee;
    background-color: #fff;
}
.c-str{height: 0.4rem; line-height: 0.4rem; border:0.02rem solid #2196f3; color: #2196f3; border-radius: 4px; margin-right: 0.1rem; font-size: 0.26rem; width: 0.76rem; text-align: center;}
.c-title,.c-txt{font-size:0.33rem; color: #333;height: 0.6rem; line-height: 0.6rem;overflow: hidden; text-overflow:ellipsis; white-space:nowrap;}
.c-txt{font-size: 0.24rem; color:#666; height: 0.44rem; line-height: 0.44rem;}

.v-name{height: 0.4rem; line-height: 0.4rem; padding: 0 0.08rem;border:0.02rem solid #ccc; color: #666; border-radius: 4px; margin-right: 0.1rem; font-size: 0.24rem;}

.fx-end{ justify-content:flex-end; padding-bottom: 0.08rem;}
.v-now{font-size: 0.4rem; color: #ff6500; font-weight: 500; padding-right: 0.2rem;}
.v-now:before{ content: '\e602'; font-family:'iconfont'; margin-right: 0.1rem; color: #ff9800;}
.v-old{font-size: 0.3rem; color: #666;font-weight: 500;text-decoration:line-through;}
</style>
