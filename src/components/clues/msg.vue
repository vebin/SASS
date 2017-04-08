<template>
    <div class="flex-wrap col-flex">
        <div class="scroll-wrap">
            <div class="ms-g-box">
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">意向车型</div>
                    <div class="page ms-g-rit">雷诺 Premium系列重卡 380马力 6X4 牵引车</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex ms-g-nobor">
                    <div class="ms-g-lft">线索价值</div>
                    <div class="page flex-wrap row-flex">
                        <div class="v-now">20</div>
                        <div class="v-txt">(当前账户剩余<i>34</i>卡豆)</div>
                    </div>
                </div>
            </div>
            <div class="ms-g-box">
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">姓名</div>
                    <div class="page ms-g-rit">雷诺</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">联系方式</div>
                    <div class="page ms-g-rit">1233545</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">提车地区</div>
                    <div class="page ms-g-rit">新疆 xxxx</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">标签</div>
                    <div class="page ms-g-rit">二手车</div>
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
        </div>
        <div class="ms-g-ftbox flex-wrap row-flex">
            <div class="ms-btns ms-btn-bk" @click="back">返回</div>
            <div class="page ms-btns ms-btn-red" @click="back">卡豆不足，前去充值</div>
            <div v-if="false" class="page ms-btns" @click="back">立即购买</div>
        </div>
    </div>
</template>
<script>
    export default {}
</script>
<style lang="less" scoped>
.v-now{font-size: 0.36rem; color: #ff6500; font-weight: 500; padding-right: 0.2rem;}
.v-now:before{ content: '\e602'; font-family:'iconfont'; margin-right: 0.1rem; color: #ff9800;}
.v-txt{font-size: 0.24rem;color: #666;}
.v-txt i{color: red;}
.ms-txt{line-height: 0.4rem; word-wrap:break-word;padding: 0.16rem 0;}
</style>
