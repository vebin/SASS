<template>
    <div class="flex-wrap col-flex">
        <div class="scroll-wrap">
            <div class="ms-g-box">
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft"><i>*</i>姓名</div>
                    <div class="page ms-g-rit">
                        <input type="text" placeholder="请填写姓名" v-model="name" class="page fr-input"/>
                    </div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft"><i>*</i>联系方式</div>
                    <div class="page flex-wrap row-flex">
                        <div class="page">
                            <input type="tel" placeholder="请填写手机号" v-model="tel" class="page fr-input"/>
                        </div>
                    </div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">地区</div>
                    <div class="page ms-g-rit flex-wrap row-flex ms-cell-arrow"
                        @click="showADDR">{{levelTxt}}</div>
                </div>
            </div>
            <div class="ms-g-box">
                
                <div class="ms-g-item flex-wrap row-flex ms-g-nobor">
                    <div class="ms-g-lft">备注</div>
                    <div class="page">
                        <yd-textarea slot="right" v-model="remark" placeholder="请填写备注" maxlength="300"></yd-textarea>
                    </div>
                </div>
            </div>
        </div>
        <div class="ms-g-ftbox flex-wrap row-flex">
            <div class="page ms-btns ms-btn-bk" @click="back">取消</div>
            <div class="page ms-btns" @click="savePP">保存</div>
        </div>

        <yd-popup v-model="showSc" position="right" width="80%">
            <v-addrs @hides="hideSc"
            @act="psnA" @prs="prsA" :pr="prov" :ci="city"></v-addrs>
        </yd-popup>
    </div>
</template>
<script>
import XHR from '../../api/service'
    export default {
        data() {
            return {
                showSc: false,
                prov: '',
                city: '',

                name: '',
                tel: '',
                remark:'',

                levelTxt: '请选择地区'
            }
        },
        watch:{
            tel: 'changTel'
        },
        created () {
            let add = this.$route.query.id || ''
            if(add == ''){
                this.name = this.$store.state.myCrm.realname
                this.tel = this.$store.state.myCrm.tel
                this.remark = this.$store.state.myCrm.remark
                this.levelTxt = this.$store.state.myCrm.address
            }
        },
        methods: {
            changTel(curVal,oldVal){
                try{
                if(curVal.length == 11){
                    this.seek(curVal)
                }
                if(curVal.length > 11){
                    this.$dialog.notify({
                        mes: '仅支持中国境内11位号码',
                        timeout: 4000,
                        // callback: () => {}
                    })
                }
                } catch(err){}
            },
            nmIsNull(){
                if(this.name.trim() == ''){
                    this.$dialog.notify({
                        mes: '姓名为必填项',
                        timeout: 4000,
                        // callback: () => {}
                    })
                    return false
                }
                return true
            },
            hideSc () { this.showSc = !this.showSc},
            psnA (id,nm){
                this.city = id
                this.levelTxt = nm
                this.hideSc()
            },
            prsA (id){this.prov = id},
            showADDR () {
                if( this.$store.state.allAddrs.length == 0){
                    let ADDRS = JSON.parse(localStorage.getItem('WX_ADDRSALL')) || []
                    this.$store.commit("ALLADDRS", ADDRS)
                }
                this.showSc = true
            },
            savePP(){
                let self = this
                let json = {}
                if(this.nmIsNull() && this.seek(this.tel)){
                    this.$dialog.loading.open('数据保存中…')
                    json.id = this.$store.state.myCrm.id
                    if(this.$route.query.id == 'add'){
                        json.id = 0
                    }
                    json.realname = this.name
                    json.tel = this.tel
                    json.provincesn = this.prov
                    json.citysn = this.city
                    json.address = this.levelTxt
                    json.remark = this.remark
                    XHR.editPop(json)
                    .then(function (res) {
                        // console.log(res)
                        if (res.data.state == '1') {
                            setTimeout(() => {
                                self.$dialog.loading.close()
                                self.back()
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
    }
</script>
<style lang="less" scoped>
.fr-input{
    height: 100%;
    width: 100%;
    background: none;
    border: 0;
}
.ms-g-lft{width: 1.8rem; i{color: red;font-weight: bold;}}
input[type="datetime-local"]{}
.ms-txt{line-height: 0.4rem; word-wrap:break-word;padding: 0.16rem 0;}
</style>
