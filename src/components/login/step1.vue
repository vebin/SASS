<template>
    <div class="page flex-wrap col-flex">
        <div class="scroll-wrap flex-wrap col-flex mx-Center">
            <div class="step-box">
                <div class="step-min flex-wrap row-flex">
                    <div class="step-item step-active">注册</div>
                    <div class="step-item">身份认证</div>
                    <div class="step-item">审核</div>
                </div>
            </div>
            <div class="step-input-box scroll-wrap">
                <div class="ms-g-box">
                    <div class="ms-g-item flex-wrap row-flex">
                        <div class="ms-g-lft">手机号</div>
                        <div class="page ms-g-rit">
                            <input type="tel" class="page fr-input" placeholder="请输入手机号" v-model="tel" @focus="hideFoot" @blur="hideFoot"/>
                        </div>
                    </div>
                </div>
                <div class="ms-g-box">
                    <div class="ms-g-item flex-wrap row-flex">
                        <div class="ms-g-lft">验证码</div>
                        <div class="page ms-g-rit">
                            <input type="tel" class="page fr-input" placeholder="请输入验证码" v-model="code" @focus="hideFoot" @blur="hideFoot"/>
                        </div>
                        <yd-sendcode slot="right" 
                            v-model="sendBtn" 
                            @click.native="sendCode" 
                            :type="isSend ? 'warning' : 'disabled'"
                            :disabled="!isSend"
                            second="60"
                            initStr="获取验证码"
                            runStr="{%s}秒后获取"
                            resetStr="重获验证码"
                        ></yd-sendcode>
                    </div>
                </div>
                <yd-button size="large" 
                    :disabled="!isNext"  
                    :type="isNext ? 'primary' : 'disabled'" 
                    @click.native="nextAC">下一步</yd-button>
                <div class="bind-user" @click="jump('/m/app/login')">绑定已有帐号</div>
            </div>
        </div>
        <div v-if="isFoot" class="step-fooot flex-wrap row-flex">
            <a href="tel:13041097429" class="wel-fooot">联系客服</a>
            <a class="wel-fooot" href="http://a.xiumi.us/stage/v5/36Pll/41269030#/">使用帮助</a>
        </div>
    </div>
</template>
<script>
import XHR from '../../api/service'
    export default {
        data() {
            return {
                isFoot:true,
                tel:'',
                code:'',
                sendBtn: false,
                isSend: false,
                isNext: false
            }
        },
        created (){
            this.tel = this.$store.state.UTEL
        },
        watch:{
            tel: 'changTel',
            code: 'changCode'
        },
        methods: {
            hideFoot(){
                this.isFoot = !this.isFoot
            },
            changTel(curVal,oldVal){
                if(curVal.length == 11){
                    if(this.seek(curVal)){
                        this.isSend = true
                    }
                }
                if(curVal.length > 11){
                    this.isSend = false
                    this.$dialog.notify({
                        mes: '仅支持中国境内11位号码',
                        timeout: 4000,
                        // callback: () => {}
                    })
                }
            },
            changCode(curVal,oldVal){
                if(curVal.length > 3){
                    this.isNext = true
                }
            },
            sendCode() {
                let self = this
                let json = {}
                this.$dialog.loading.open('发送中...')
                json.tel = this.tel
                XHR.getRsend(json)
                .then(function (res) {
                    // console.log(res)
                    if (res.data.state == '1') {
                        setTimeout(() => {
                            self.sendBtn = true
                            self.$dialog.loading.close()
                            self.$dialog.toast({
                                mes: '已发送',
                                icon: 'success',
                                timeout: 1500
                            })
                        }, 400)
                    } else {
                        self.$dialog.loading.close()
                        XHR.isErr(res,self)
                    }
                })
                .catch(function (err) {
                    
                })
            },
            nextAC (){
                let self = this
                let json = {}
                this.$dialog.loading.open('验证中...')
                json.tel = this.tel
                json.code = this.code
                XHR.getRirst(json)
                .then(function (res) {
                    // console.log(res)
                    if (res.data.state == '1') {
                        setTimeout(() => {
                            self.$dialog.loading.close()
                            self.$store.commit("setUTEL",self.tel)
                            self.jump('/m/app/step2')
                        }, 400)
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
.ms-g-box{width: 100%;padding: 0;}
.step-input-box{padding: 0 0.3rem; width: 100%;}

.fr-input{
    height: 100%;
    width: 100%;
    background: none;
    border: 0;
}



.step-fooot{ height: 1rem; line-height: 1rem;font-size: 0.28rem;color: #0037ff;justify-content:space-between; padding: 0 0.3rem;}
</style>
