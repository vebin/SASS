<template>
    <div class="page flex-wrap col-flex">
        <div class="page flex-wrap col-flex mx-Center">

            <div class="step-input-box flex-wrap col-flex">
                <div class="ms-g-box">
                    <div class="ms-g-item flex-wrap row-flex">
                        <div class="ms-g-lft">手机号</div>
                        <div class="page ms-g-rit">
                            <input type="tel" class="page fr-input" placeholder="请输入手机号" v-model="tel"/>
                        </div>
                    </div>
                </div>
                <div class="ms-g-box">
                    <div class="ms-g-item flex-wrap row-flex">
                        <div class="ms-g-lft">验证码</div>
                        <div class="page ms-g-rit">
                            <input type="tel" class="page fr-input" placeholder="请输入验证码" v-model="code"/>
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
                    @click.native="nextAC">绑定</yd-button>
            </div>
        </div>
        <div class="step-fooot flex-wrap row-flex">
            <div class="wel-fooot">联系客服</div>
            <div class="wel-fooot" @click="jump('/m/app/step1')">注册新帐号</div>
        </div>
    </div>
</template>
<script>
    import XHR from '../../api/service'
    export default {
        data() {
            return {
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
                XHR.getBinds(json)
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
                        setTimeout(() => {
                            self.$dialog.toast({
                                mes: res.data.errmsg,
                                timeout: 2000,
                                icon: 'error'
                            })
                        }, 400)
                    }
                })
                .catch(function (err) {
                    
                })
            },
            nextAC (){
                let self = this
                let urls
                let json = {}
                this.$dialog.loading.open('验证中...')
                json.tel = this.tel
                json.code = this.code
                XHR.getBindSend(json)
                .then(function (res) {
                    // console.log(res)
                    if (res.data.state == '1') {
                        setTimeout(() => {
                            self.$dialog.loading.close()
                            self.$store.commit("setUTEL",self.tel)
                            urls = window.location.href.split('?')[0]
                            window.location.href = `${urls}?uc=${res.data.body}#/clue`
                            // self.jump('/')
                        }, 400)
                    } else {
                        setTimeout(() => {
                            self.$dialog.loading.close()
                            self.$dialog.toast({
                                mes: res.data.errmsg,
                                timeout: 2000,
                                icon: 'error'
                            })
                        }, 400)
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
.step-input-box{padding: 0 0.3rem; width: 100%; border-top: 0.25rem solid #eee;}

.fr-input{
    height: 100%;
    width: 100%;
    background: none;
    border: 0;
}



.step-fooot{ height: 1rem; line-height: 1rem;font-size: 0.28rem;color: #0037ff;justify-content:space-between; padding: 0 0.3rem;}
</style>
