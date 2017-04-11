<template>
    <div class="page flex-wrap col-flex">
        <div class="logo-box page flex-wrap col-flex mx-Center">
            <img class="logo" :src="logo" />
            <div class="logo-txt">欢迎使用卡销宝</div>

            <yd-button size="large" type="primary" @click.native="jump('/m/app/step1')">注册</yd-button>
            <yd-button size="large" type="hollow" @click.native="jump('/m/app/login')">绑定已有帐号</yd-button>
        </div>
        <div class="wel-fooot">联系客服</div>
    </div>
</template>
<script>
import logo from '../../assets/logo.png'
    export default {
        data() {
            return {
               logo:logo, 
                
            }
        },
        methods: {
            cao(){
                console.log(232323)
            }
            
        }
    }
</script>
<style lang="less" scoped>
.page{background-color: #fff;}
.logo-box{padding: 1.3rem 0.8rem 0;}
.logo-txt{color: #0f5489; font-size: 0.34rem; padding-top: 0.5rem;}

.logo{ width: 1.38rem; height: 1.4rem;}



.wel-fooot{ height: 1rem; line-height: 1rem;text-align: center;font-size: 0.28rem;color: #0037ff;}
</style>
