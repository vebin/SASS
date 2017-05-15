<template>
    <div class="page flex-wrap col-flex">
        <div class="logo-box page flex-wrap col-flex mx-Center">
            <img class="logo" :src="logo" />
            <div class="logo-txt">欢迎使用商机宝</div>

            <yd-button size="large" type="primary" @click.native="jump('/m/app/step1')">注册</yd-button>
            <yd-button size="large" type="hollow" @click.native="jump('/m/app/login')">绑定已有帐号</yd-button>
        </div>
        <div class="step-fooot flex-wrap row-flex">
            <a href="tel:13041097429" class="wel-fooot">联系客服</a>
            <a class="wel-fooot" href="http://a.xiumi.us/stage/v5/36Pll/41269030#/">使用帮助</a>
        </div>
    </div>
</template>
<script>
import logo from '../../assets/logo.png'
import XHR from '../../api/service'
    export default {
        data() {
            return {
               logo:logo, 
                
            }
        },
        created () {
            this.WXCODE()
        },
        methods: {
            WXCODE(){
                let self = this
                let json = {}
                XHR.getWxConfig(json)
                .then(function (res) {
                    // console.log(res)
                    if (res.data.state == '1') {
                        localStorage.setItem('WX_CONFIGXS',JSON.stringify(res.data.body))
                    } else {
                        XHR.isErr(res,self)
                    }
                })
                .catch(function (err) {
                    
                })
            }
            
        }
    }
</script>
<style lang="less" scoped>
.page{background-color: #fff;}
.logo-box{padding: 1.3rem 0.8rem 0;}
.logo-txt{color: #0f5489; font-size: 0.34rem; padding-top: 0.5rem;}

.logo{ width: 1.38rem; height: 1.4rem;}



.step-fooot{ height: 1rem; line-height: 1rem;font-size: 0.28rem;color: #0037ff;justify-content:space-between; padding: 0 0.3rem;}
</style>
