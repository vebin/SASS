<template>
    <div class="page flex-wrap col-flex PHT">
        <div class="scroll-wrap mx-Center PHT">
            <div class="step-box">
                <div class="step-min flex-wrap row-flex">
                    <div class="step-item step-active">注册</div>
                    <div class="step-item step-active">身份认证</div>
                    <div class="step-item">审核</div>
                </div>
            </div>
            <div class="step-input-box">
                <div class="ms-g-box">
                    <div class="ms-g-item flex-wrap row-flex">
                        <div class="ms-g-lft"><i>*</i>真实姓名</div>
                        <div class="page ms-g-rit">
                            <input type="text" class="page fr-input" placeholder="与身份证一致" v-model="name" @focus="hideFoot" @blur="hideFoot"/>
                        </div>
                    </div>
                </div>
                <div class="ms-g-box">
                    <div class="ms-g-item flex-wrap row-flex">
                        <div class="ms-g-lft"><i>*</i>身份证号</div>
                        <div class="page ms-g-rit">
                            <input type="text" class="page fr-input" placeholder="与身份证一致" v-model="code" @focus="hideFoot" @blur="hideFoot"/>
                        </div>
                    </div>
                </div>
                <!-- <div class="ms-g-box">
                    <div class="ms-g-item flex-wrap row-flex">
                        <div class="ms-g-lft">商家名称</div>
                        <div class="page ms-g-rit">
                            <input type="text" class="page fr-input" placeholder="可填写您所在公司名称" v-model="sallName"/>
                        </div>
                    </div>
                </div> -->
                <div class="ms-g-box">
                    <div class="ms-g-item flex-wrap row-flex ms-g-nobor">
                        <div class="ms-g-lft">上传身份证</div>
                        <div class="page flex-wrap row-flex upImgs">
                            <img v-for="em in img"
                                :src="em" class="pics"/>
                            <div v-if="isAdd" class="addPic" @click="addImage">上传图片</div>
                        </div>
                    </div>
                </div>
                <yd-button size="large" 
                :disabled="!saveBtn"  
                :type="saveBtn ? 'primary' : 'disabled'" 
                @click.native="saveAC">提交信息，等待审核</yd-button>
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
                name:'',
                sallName:'',
                code:'',
                img:[],

                imgUrl:[],
                saveBtn: false,
                isAdd: true
                
            }
        },
        watch:{
            name: 'changCode',
            code: 'changCode',
            img: 'changCode'
        },
        methods: {
            hideFoot(){
                this.isFoot = !this.isFoot
            },
            changCode(curVal,oldVal){
                if(this.code.length > 18){
                    this.saveBtn = false
                    this.$dialog.notify({
                        mes: '仅支持中国境内18位号码',
                        timeout: 4000,
                        // callback: () => {}
                    })
                }
                if(this.img.length == 2){
                    this.isAdd = false
                }
                if(this.code.length == 18 && this.name !== ''){
                    this.saveBtn = true
                }
            },
            saveAC (){
                let self = this
                let json = {}
                this.$dialog.loading.open('提交中...')
                json.realname = this.name
                json.identitysn = this.code
                json.wxmediaid1 = this.imgUrl[0] || ''
                json.wxmediaid2 = this.imgUrl[1] || ''
                XHR.saveRsecond(json)
                .then(function (res) {
                    // console.log(res)
                    if (res.data.state == '1') {
                        setTimeout(() => {
                            self.$dialog.loading.close()
                            // self.$store.commit("setUTEL",self.tel)
                            self.jump({path:'/m/app/step3',query:{id:1}})
                        }, 400)
                    } else {
                        XHR.isErr(res,self)
                    }
                })
                .catch(function (err) {
                    
                })
            },
            addImage(){
                let self = this
                wx.chooseImage({
                    count: 1,
                    sizeType: ['original', 'compressed'],
                    sourceType: ['album', 'camera'],
                    success: function (res) {
                        self.img.push(res.localIds[0])
                        wx.uploadImage({
                            localId: res.localIds[0],
                            isShowProgressTips: 1,
                            success: function (ores) {
                                self.imgUrl.push(ores.serverId)
                            }
                        })
                    }
                })

            }
            
        }
    }
</script>
<style lang="less" scoped>
.page{background-color: #fff;}
.ms-g-box{width: 100%;padding: 0; min-height: 0.76rem; height: auto;}
.step-input-box{padding: 0 0.3rem; width: 100%;}
.ms-g-nobor{height: auto;}
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
.addPic{font-size: 0.28rem; color: #333; width: 1.8rem; height: 1.8rem; line-height: 0.7rem; background-color: #f5f5f5; border: 0.02rem dashed #ccc; text-align: center;}
.addPic:before{ content: '\e601'; font-family: 'iconfont'; font-size: 0.48rem; color: #ccc; display: block; height: 0.7rem; line-height: 0.7rem; margin-top: 0.2rem;}
.pics{width: 1.8rem; height: 1.8rem;}
.pics:nth-child(1){margin-right: 0.2rem;}
.upImgs{}
.step-fooot{ height: 1rem; line-height: 1rem;font-size: 0.28rem;color: #0037ff;justify-content:space-between; padding: 0 0.3rem;}
</style>
