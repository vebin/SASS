<template>
    <div class="flex-wrap col-flex">
        <div class="scroll-wrap">
            <div class="ms-g-box">
                <!-- <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">类别</div>
                    <div class="page ms-g-rit flex-wrap row-flex ms-cell-arrow"
                        @click="showType = true">q</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">品牌</div>
                    <div class="page ms-g-rit flex-wrap row-flex ms-cell-arrow">雷诺</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">系列</div>
                    <div class="page ms-g-rit flex-wrap row-flex ms-cell-arrow">雷诺</div>
                </div> -->

                <div class="ms-g-item flex-wrap row-flex ms-g-nobor">
                    <div class="ms-g-lft">意向车型</div>
                    <div @click="showTYPE"
                        class="page ms-g-rit flex-wrap row-flex ms-cell-arrow">{{carType}}</div>
                </div>
            </div>
            <div class="ms-g-box">
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">姓名</div>
                    <div class="page ms-g-rit">
                        <input type="text" placeholder="请填写姓名" v-model="name" class="page fr-input"/>
                    </div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">联系方式</div>
                    <div class="page flex-wrap row-flex">
                        <div class="page ms-g-rit">
                            <input type="tel" placeholder="请填写手机号" v-model="tel" class="page fr-input"/>
                        </div>
                        <!-- <div class="v-now"></div> -->
                    </div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">提车地区</div>
                    <div class="page ms-g-rit flex-wrap row-flex ms-cell-arrow"
                        @click="showADDR">{{address}}</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">购买台数</div>
                    <div class="">
                        <yd-spinner class="min-how" min="1" max="999" v-model="howmuch"></yd-spinner>
                    </div>
                </div>
                <!-- <div v-if="DATA.tag.length > 0" class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">标签</div>
                    <div class="page ms-g-rit">
                        <em v-for="ems in DATA.tag">{{ems}}</em>
                    </div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">客户级别</div>
                    <div class="page ms-g-rit">{{DATA.mark}}</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex ms-g-nobor">
                    <div class="ms-g-lft">备注</div>
                    <div class="page ms-txt">
                        {{DATA.remark}}
                        <yd-textarea slot="right" placeholder="请填写备注" maxlength="300"></yd-textarea>
                    </div>
                </div> -->
            </div>
            <!-- <div class="ms-g-box">
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">线索来源</div>
                    <div class="page ms-g-rit">卡车之家</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex ms-g-nobor">
                    <div class="ms-g-lft">询价时间</div>
                    <div class="page ms-g-rit">{{DATA.cdatetime}}</div>
                </div>
            </div> -->
        </div>
        <div class="ms-g-ftbox flex-wrap row-flex">
            <div class="page ms-btns ms-btn-bk" @click="back">取消</div>
            <div class="page ms-btns" 
            @click="saves">保存</div>
        </div>
        <yd-popup v-model="showAddr" position="right" width="60%">
            <v-addrs @hides="hideAddr" 
            @act="psnA" @prs="prsA" :pr="prov" :ci="city"></v-addrs>
        </yd-popup>
        <yd-popup v-model="showType" position="right" width="80%">
            <v-cartype @hides="hideType" @act="typeidA" :txt="typeid"></v-cartype>
        </yd-popup>
    </div>
</template>
<script>
import XHR from '../../api/service'
    export default {
        data() {
            return {
                showAddr: false,
                showType: false,

                prov: '',
                city: '',
                typeid:-1,

                address:'',
                carType:'',
                name:'',
                tel:'',
                howmuch: 1,

                // DATA:{
                //     followup:[],
                //     tag:[]
                // }
            }
        },
        created () {
            // this.DATA = this.$store.state.myMsg
            this.address = this.$store.state.myMsg.address
            this.carType = this.$store.state.myMsg.title
            this.name = this.$store.state.myMsg.uname
            this.tel = this.$store.state.myMsg.tel
            this.howmuch = this.$store.state.myMsg.howmuch
        },
        methods: {
            psnA (id,nm){
                this.city = id
                this.address = nm
                this.hideAddr()
            },
            prsA (id){this.prov = id},
            typeidA (id,nm){
                this.typeid = id
                this.carType = nm
                this.hideType()
            },
            hideAddr () { this.showAddr = !this.showAddr},
            hideType () { this.showType = !this.showType},
            showADDR () {
                if( this.$store.state.allAddrs.length == 0){
                    let ADDRS = JSON.parse(localStorage.getItem('WX_ADDRSALL')) || []
                    this.$store.commit("ALLADDRS", ADDRS)
                }
                this.showAddr = true
            },
            showTYPE () {
                if( this.$store.state.carType.length == 0){
                    let CARTYPE = JSON.parse(localStorage.getItem('WX_CARTYPE')) || []
                    this.$store.commit("CARTYPE", CARTYPE.body)
                }
                this.showType = true
            },
            saves (){
                let self = this
                let json = {}
                json.id = this.$store.state.myMsg.id
                json.typeid = this.typeid
                json.tel = this.tel
                json.realname = this.name
                json.address = this.address
                json.howmuch = this.howmuch

                this.$dialog.loading.open('数据保存中…')
                XHR.postClues(json)
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
.v-now{font-size: 0.36rem; color: #ff6500; padding-left: 0.4rem;}
.v-now:before{ content: '\e622'; font-family:'iconfont'; color: #0bb908; font-weight: bold;}
.fr-input{
    height: 100%;
    width: 100%;
    background: none;
    border: 0;
}
.min-how{ display: block; margin-top: 0.06rem;}
.ms-txt{line-height: 0.4rem; word-wrap:break-word;padding: 0.16rem 0;}

</style>
