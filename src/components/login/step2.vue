<template>
    <div class="page flex-wrap col-flex">
        <div class="logo-box flex-wrap col-flex page mx-Center">
            <div class="step-box">
                <div class="step-min flex-wrap row-flex">
                    <div class="step-item step-active">注册</div>
                    <div class="step-item step-active">身份认证</div>
                    <div class="step-item">审核</div>
                </div>
            </div>
            <div class="step-input-box scroll-wrap">
                <div class="ms-g-box">
                    <div class="ms-g-item flex-wrap row-flex">
                        <div class="ms-g-lft"><i>*</i>真是姓名</div>
                        <div class="page ms-g-rit">
                            <input type="number" class="page fr-input" placeholder="与身份证一致"/>
                        </div>
                    </div>
                </div>
                <div class="ms-g-box">
                    <div class="ms-g-item flex-wrap row-flex">
                        <div class="ms-g-lft"><i>*</i>身份证号</div>
                        <div class="page ms-g-rit">
                            <input type="number" class="page fr-input" placeholder="与身份证一致"/>
                        </div>
                    </div>
                </div>
                <div class="ms-g-box">
                    <div class="ms-g-item flex-wrap row-flex">
                        <div class="ms-g-lft">商家名称</div>
                        <div class="page ms-g-rit">
                            <input type="number" class="page fr-input" placeholder="可填写您所在公司名称"/>
                        </div>
                    </div>
                </div>
                <div class="ms-g-box">
                    <div class="ms-g-item flex-wrap row-flex ms-g-nobor">
                        <div class="ms-g-lft"><i>*</i>上传身份证</div>
                        <div class="page flex-wrap col-flex">
                            <img v-if="false" src="https://s.kcimg.cn/m/images/home/login.png" class="stepPic"/>
                            <div class="addPic">上传图片</div>
                        </div>
                    </div>
                </div>
                <yd-button size="large" type="primary" @click.native="jump('/m/app/step3')">提交信息，等待审核</yd-button>
            </div>
        </div>
        <div class="step-fooot flex-wrap row-flex">
            <div class="wel-fooot">联系客服</div>
            <div class="wel-fooot" @click="jump('/m/app/login')">绑定已有帐号</div>
        </div>
    </div>
</template>
<script>
import logo from '../../assets/logo.png'
    export default {
        data() {
            return {
                logo:logo, 
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
.step-input-box{padding: 0 0.3rem; width: 100%;}

.fr-input{
    height: 100%;
    width: 100%;
    background: none;
    border: 0;
}
.ms-g-lft{width: 2rem; i{color: red;font-weight: bold;}}
.stepPic{
    display: block;
    background-color: #eee;
    width: 100%;
    height: auto;
}
.addPic{font-size: 0.28rem; color: #333; width: 100%; height: 1rem; line-height: 0.9rem; background-color: #f5f5f5; border: 0.02rem dashed #ccc;  margin-top: 0.3rem; text-align: center;}
.addPic:before{ content: '\e601'; font-family: 'iconfont'; font-size: 0.38rem; margin-right: 0.3rem; color: #ccc;}

.step-fooot{ height: 1rem; line-height: 1rem;font-size: 0.28rem;color: #0037ff;justify-content:space-between; padding: 0 0.3rem;}
</style>
