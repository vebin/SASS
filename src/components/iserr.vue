<template>
    <div class="page flex-wrap col-flex">
        <div v-if="!err" class="page flex-wrap col-flex midCenter">
            <div class="ffm nul-icos"></div>
            <div class="nul-txt">帐号异常</div>
            <div class="nul-txt">请联系客服咨询详情</div>
        </div>
        <div v-if="err" class="page flex-wrap col-flex midCenter">
            <div class="ffm nul-errs"></div>
            <div class="nul-txt">微信登录异常</div>
            <div class="nul-txt">请联系客服咨询详情</div>
        </div>
        <div class="step-fooot flex-wrap row-flex">
            <a href="tel:13041097429" class="wel-fooot">联系客服</a>
            <div class="wel-fooot" @click="jump('/m/app/login')">绑定已有帐号</div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                err: false
            }
        },
        created () {
            if(this.$route.query.err == '4001'){
                this.err = true
            }
        },
    }
</script>
<style lang="less" scoped>
.nul-icos:before{content: "\e615"; color: #888; font-size: 1.4rem;}
.nul-errs:before{content: "\e632"; color: red; font-size: 1.4rem;}
.nul-txt{ font-size: 0.32rem; color: #666;margin-top: 0.2rem; font-weight: 500; i{color: #2196f3;}}

.step-fooot{ height: 1rem; line-height: 1rem;font-size: 0.28rem;color: #0037ff;justify-content:space-between; padding: 0 0.3rem;}
</style>
