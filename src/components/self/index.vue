<template>
    <div class="cl-box flex-wrap col-flex">
        <div class="se-mx-box flex-wrap row-flex mx-Center">
            <img src="https://s.kcimg.cn/m/images/home/login.png" class="se-mx-ico"/>
            <div class="page flex-wrap col-flex ms-mx-pox">
                <div class="ms-mx-txt">乌拉山</div>
                <div class="ms-mx-do">我的卡豆：<i class="v-now">20</i></div>
            </div>
        </div>
        <div class="ms-g-box">
            <div class="ms-g-item flex-wrap row-flex ms-g-nobor">
                <div class="ms-gx-lft ico-dou"></div>
                <div class="page ms-g-rit flex-wrap row-flex ms-cell-arrow"
                    @click="jump('/self/buy')">卡豆充值</div>
            </div>
        </div>
        <div class="ms-g-box">
            <div class="ms-g-item flex-wrap row-flex ms-g-nobor">
                <div class="ms-gx-lft ico-why"></div>
                <div class="page ms-g-rit flex-wrap row-flex ms-cell-arrow"
                    @click="showType = true">使用帮助</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        mounted() {

        }
    }
</script>
<style lang="less" scoped>
    .cl-box{width: 100%; height: 100%;}
    .se-mx-box{background-color: #fff; height: 2.5rem; padding:0 0.3rem;}
    .se-mx-ico{width: 1.7rem; height: 1.7rem; border-radius: 100%; border:0.02rem solid #eee; display: block;}

    .ms-mx-pox{ padding-left: 0.3rem;}
    .ms-mx-txt{padding-bottom: 0.4rem; font-size: 0.34rem; color: #333;}
    .ms-mx-do{font-size: 0.3rem; color: #666;}

    .v-now{font-size: 0.4rem; color: #ff6500; font-weight: 500; padding-right: 0.2rem;}
    .v-now:before{ content: '\e602'; font-family:'iconfont'; margin-right: 0.1rem; color: #ff9800;}
</style>
