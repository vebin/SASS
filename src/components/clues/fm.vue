<template>
    <div class="flex-wrap col-flex">
        <div class="scroll-wrap">
            <!-- <div class="ms-g-box">
                <div class="ms-g-item flex-wrap row-flex ms-g-nobor">
                    <div class="ms-g-lft">跟进时间</div>
                    <div class="page ms-g-rit">
                        <input type="datetime-local" v-model="time" class="page fr-input"/>
                    </div>
                </div>
            </div> -->
            <div class="ms-g-box">
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">客户级别</div>
                    <div class="page ms-g-rit flex-wrap row-flex ms-cell-arrow"
                        @click="showSc = true">{{levelTxt}}</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex ms-g-nobor">
                    <div class="ms-g-lft">备注</div>
                    <div class="page">
                        <yd-textarea slot="right" placeholder="请填写备注" maxlength="300" v-model="remark"></yd-textarea>
                    </div>
                </div>
            </div>
        </div>
        <div class="ms-g-ftbox flex-wrap row-flex">
            <div class="page ms-btns ms-btn-bk" @click="back">取消</div>
            <div class="page ms-btns" @click="saves">保存</div>
        </div>

        <yd-popup v-model="showSc" position="right" width="60%">
            <v-level @hides="hideSc" @act="leveNBA" :txt="leveNB"></v-level>
        </yd-popup>
    </div>
</template>
<script>
import XHR from '../../api/service'
    export default {
        data() {
            return {
                showSc: false,
                time: '',
                leveNB: -1,
                levelTxt: '请选择客户级别',
                remark:''
            }
        },
        methods: {
            leveNBA (id,name){
                this.leveNB = id
                this.levelTxt = name
                this.hideSc()
            },
            hideSc () { this.showSc = !this.showSc},
            saves (){
                
                let self = this
                let json = {}

                json.id = this.$route.query.id
                if(this.leveNB !== -1){
                    json.mark = this.leveNB
                }
                json.remark = this.remark
                this.$dialog.loading.open('数据保存中…')
                XHR.getFoll(json)
                .then(function (res) {
                    // console.log(res)
                    if (res.data.state == '1') {

                        setTimeout(() => {
                            self.$dialog.loading.close()
                            self.$dialog.toast({
                                mes: '保存成功',
                                timeout: 800,
                                icon: 'success',
                                callback: () => {
                                    self.back()
                                }
                            })
                        }, 300)

                    } else {
                        self.$dialog.alert({mes: res.data.errmsg})
                        self.$dialog.loading.close()
                    }
                })
                .catch(function (err) {
                    
                })
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
input[type="datetime-local"]{}
.ms-txt{line-height: 0.4rem; word-wrap:break-word;padding: 0.16rem 0;}
</style>
