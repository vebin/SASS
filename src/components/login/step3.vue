<template>
    <div class="page flex-wrap col-flex">
        <div class="page flex-wrap col-flex mx-Center">
            <div class="step-box">
                <div class="step-min flex-wrap row-flex">
                    <div class="step-item step-active">注册</div>
                    <div class="step-item step-active">身份认证</div>
                    <div class="step-item step-active">审核</div>
                </div>
            </div>


            <div v-if="step == '1'" class="step-input-box page flex-wrap col-flex midCenter">
                <div class="nul-icos"></div>
                <div class="nul-txt">您的注册申请提交成功，请耐心等待</div>
                <div class="nul-txt">如有疑问，请<i>联系客服</i>咨询</div>
            </div>


            <div v-if="step == '2'" class="step-input-box page flex-wrap col-flex midCenter">
                <div class="ffm ico-sell"></div>
                <div class="nul-txt">您的注册申请正在审核中，请耐心等待</div>
                <div class="nul-txt">如有疑问，请<i>联系客服</i>咨询</div>
            </div>


            <div v-if="step == '3'" class="step-input-box page flex-wrap col-flex midCenter">
                <div class="ffm ico-nulls"></div>
                <div class="nul-txt">您的注册申请审核未通过，请<i>重新提交</i>信息</div>
                <div class="nul-txt">如有疑问，请<i>联系客服</i>咨询</div>
            </div>
        </div>
        <div class="step-fooot flex-wrap row-flex">
            <div class="wel-fooot">联系客服</div>
            <div class="wel-fooot" @click="jump('/m/app/login')">绑定已有帐号</div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                step: 1
            }
        },
        created () {
            this.step = this.$route.query.id
        },
        methods: {
            
        }
    }
</script>
<style lang="less" scoped>
.page{background-color: #fff;}
.ms-g-box{width: 100%;padding: 0;}
.step-input-box{padding: 0 0.3rem; width: 100%;}


.nul-icos:before{content: "\E601"; font-family:YDUI-INLAY; color: #0bb908; font-size: 1.4rem;}
.nul-txt{ font-size: 0.32rem; color: #666;margin-top: 0.2rem; font-weight: 500; i{color: #2196f3;}}

.ico-sell,.ico-nulls{font-size: 1.4rem; color: #999;}

.step-fooot{ height: 1rem; line-height: 1rem;font-size: 0.28rem;color: #0037ff;justify-content:space-between; padding: 0 0.3rem;}
</style>
