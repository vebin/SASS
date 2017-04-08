<template>
    <div class="flex-wrap col-flex">
        <div class="scroll-wrap">
            <div class="ms-g-box">
                <div class="ms-g-item flex-wrap row-flex ms-g-nobor">
                    <div class="ms-g-lft">意向车型</div>
                    <div class="page ms-g-rit">雷诺 Premium系列重卡 380马力 6X4 牵引车</div>
                </div>
            </div>
            <div class="ms-g-box">
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">姓名</div>
                    <div class="page ms-g-rit">雷诺</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">联系方式</div>
                    <div class="page flex-wrap row-flex">
                        <div class="page">1232324343</div>
                        <div class="v-now"></div>
                    </div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">提车地区</div>
                    <div class="page ms-g-rit">新疆 xxxx</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">标签</div>
                    <div class="page ms-g-rit">二手车</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">客户级别</div>
                    <div class="page ms-g-rit">B 一般</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex ms-g-nobor">
                    <div class="ms-g-lft">备注</div>
                    <div class="page ms-txt">asdsfsdsdsdfsdasdsfsdsdsdfsdsdfsdfsdfsdffdfdfdfdfdfdfdfsdfsdfsdfsdffdfdfdfdfdfdfdf</div>
                </div>
            </div>
            <div class="ms-g-box">
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">线索来源</div>
                    <div class="page ms-g-rit">卡车之家</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex ms-g-nobor">
                    <div class="ms-g-lft">询价时间</div>
                    <div class="page ms-g-rit">2017-03-26 </div>
                </div>
            </div>
            <dl class="m-gj-box">
                <dt>跟进记录</dt>
                <dd @click="jump('/clue/msg/fmsg')">
                    <div class="m-gj-txt">设置客户级别为  B 一般</div>
                    <div class="m-gj-time">2017-03-23</div>
                </dd>
                <dd>
                    <div class="m-gj-txt">设置客户级别为  B 一般</div>
                    <div class="m-gj-time">2017-03-23</div>
                </dd>

            </dl>
        </div>
        <div class="ms-g-ftbox flex-wrap row-flex">
            <div v-if="false" class="page ms-btns" @click="back">返回</div>

            <div class="ms-btns ms-btn-bk" @click="back">返回</div>
            <div class="ms-btns ms-btn-tt" 
                @click="jump('/clue/msg/form')">编辑</div>
            <div class="page ms-btns" 
                @click="jump('/clue/msg/fm')">添加跟进记录</div>
        </div>
    </div>
</template>
<script>
    export default {}
</script>
<style lang="less" scoped>
.v-now{font-size: 0.36rem; color: #ff6500; padding-left: 0.4rem;}
.v-now:before{ content: '\e622'; font-family:'iconfont'; color: #0bb908; font-weight: bold;}

.ms-txt{line-height: 0.4rem; word-wrap:break-word;padding: 0.16rem 0;}

.m-gj-box{width: 100%; box-sizing:border-box;height: auto;
    dt{padding: 0 0.3rem; height: 0.6rem; line-height: 0.6rem;font-size: 0.24rem; color: #666;}
    dd{background-color: #fff; padding: 0 0.3rem; height: 1rem; }
    .m-gj-txt{font-size: 0.28rem;color: #333; line-height: 0.56rem; height: 0.56rem; overflow: hidden;text-overflow:ellipsis; white-space:nowrap;}
    .m-gj-time{font-size: 0.24rem;color: #666; border-bottom:0.02rem solid #eee;line-height: 0.36rem; height: 0.44rem;}
}
</style>
