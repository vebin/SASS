<template>
    <div class="page flex-wrap col-flex">
        <div class="logo-box page flex-wrap col-flex mx-Center">

            <div class="step-input-box flex-wrap col-flex">
                <div class="ms-g-box">
                    <div class="ms-g-item flex-wrap row-flex">
                        <div class="ms-g-lft">手机号</div>
                        <div class="page ms-g-rit">
                            <input type="number" class="page fr-input" placeholder="请输入手机号"/>
                        </div>
                    </div>
                </div>
                <div class="ms-g-box">
                    <div class="ms-g-item flex-wrap row-flex">
                        <div class="ms-g-lft">验证码</div>
                        <div class="page ms-g-rit">
                            <input type="number" class="page fr-input" placeholder="请输入验证码"/>
                        </div>
                        <yd-sendcode slot="right" 
                            v-model="start1" 
                            @click.native="sendCode1" 
                            type="warning"
                            second="60"
                            initStr="获取验证码"
                            runStr="{%s}秒后获取"
                            resetStr="重获验证码"
                        ></yd-sendcode>
                    </div>
                </div>
                <yd-button size="large" type="primary" @click.native="jump('/m/app/register')">绑定</yd-button>
            </div>
        </div>
        <div class="step-fooot flex-wrap row-flex">
            <div class="wel-fooot">联系客服</div>
            <div class="wel-fooot" @click="jump('/m/app/step1')">注册新帐号</div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                start1: false
            }
        },
        methods: {
            sendCode1() {
                this.$dialog.loading.open('发送中...')
                setTimeout(() => {
                    this.start1 = true
                    this.$dialog.loading.close()
                    this.$dialog.toast({
                        mes: '已发送',
                        icon: 'success',
                        timeout: 1500
                    })
                }, 1000)
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
