<template>
    <div class="cl-box flex-wrap col-flex">
        <div class="flex-wrap row-flex midCenter cl-nav">
            <div class="page midCenter">综合</div>
            <div class="page midCenter">精品</div>
            <div class="page midCenter flex-wrap row-flex m-v">地区<i></i></div>
            <div class="page midCenter flex-wrap row-flex m-v">类别<i></i></div>
        </div>
        <yd-infinitescroll :on-infinite="loadList" class="scroll-wrap flex-wrap col-flex">
            <div slot="list">

                <div class="c-item-box flex-wrap col-flex"
                @click="loist">
                    <div class="c-title">雷诺等了色的课程 6X4 牵引车</div>
                    <div class="c-addr">新疆 吐鲁番</div>
                    <div class="c-name">大棚 10分钟前</div>
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
    padding: 0.2rem 0.3rem;
    border-bottom: 0.02rem solid #ccc;
    background-color: #fff;
}
</style>
