<template>
    <div class="cl-box flex-wrap col-flex">
        <v-search></v-search>
        <v-nus v-if="false"></v-nus>
        <yd-infinitescroll v-if="true" :on-infinite="loadList" class="page">
            <div slot="list">


                <div class="crm-item-box"
                    @click="jump('/crm/msg')">
                    <div class="crm-item-txt">路飞<i>13232323</i></div>
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
.crm-item-box{background-color: #fff; padding: 0 0.3rem; height: 0.84rem; line-height: 0.84rem;}
.crm-item-txt{border-bottom:0.02rem solid #eee; color: #333; font-size: 0.3rem;
    i{ color: #666; font-size: 0.26rem; padding-left: 0.2rem;}
}
</style>
