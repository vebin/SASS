<template>
    <div class="flex-wrap col-flex">
        <div class="scroll-wrap">
            <div class="ms-g-box">
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">意向车型</div>
                    <div class="page ms-g-rit">{{DATA.title}}</div>
                </div>
                
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">姓名</div>
                    <div class="page ms-g-rit">{{DATA.uname}}</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">联系方式</div>
                    <div class="page ms-g-rit">{{DATA.tel}}</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">提车地区</div>
                    <div class="page ms-g-rit">{{DATA.address}}</div>
                </div>
                <div v-if="DATA.tag.length > 0" class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">标签</div>
                    <div class="page ms-g-rit">
                        <em v-for="ems in DATA.tag">{{ems}}</em>
                    </div>
                </div>
                <div v-if="DATA.remark !== ''" class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">备注</div>
                    <div class="page ms-txt">{{DATA.remark}}</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">询价时间</div>
                    <div class="page ms-g-rit">{{DATA.cdatetime}}</div>
                </div>
                <!-- <div class="ms-g-item flex-wrap row-flex ms-g-nobor">
                    <div class="ms-g-lft">线索价值</div>
                    <div class="page flex-wrap row-flex">
                        <div class="v-now">{{DATA.salemoney}}</div>
                        <div v-if="false" class="v-txt">(当前账户剩余<i>34</i>卡豆)</div>
                        <div class="v-txt">(折扣前价值<i>{{DATA.salemoney_pre}}</i>卡豆)</div>
                    </div>
                </div> -->
            </div>
        </div>
        <div class="ms-g-ftbox flex-wrap row-flex">
            <div class="page ms-btns ms-buy-msg"
            :class="{'ms-btn-bk':DATA.salemoney_share == 0}"
            @click="altMsg(1,DATA.salemoney_share)">共享({{DATA.salenumber}}/{{DATA.salenumber_}})<i v-if="DATA.salemoney_share == 0 ? false : true" class="v-now">{{DATA.salemoney_share}}</i></div>

            <div  class="page ms-btns ms-btn-gue ms-buy-msg"
            :class="{'ms-btn-bk':DATA.salemoney == 0}"
            @click="altMsg(0,DATA.salemoney)">独享 <i v-if="DATA.salemoney == 0 ? false : true" class="v-now">{{DATA.salemoney}}</i></div>

            <div v-if="false" class="page ms-btns ms-btn-red" @click="back">卡豆不足，前去充值</div>
        </div>
    </div>
</template>
<script>
import XHR from '../../api/service'
    export default {
        data() {
            return {
                showAddr: false,
                showType: false,
                DATA:{
                    tag:[]
                }
            }
        },
        created () {
            this.$dialog.loading.open('数据加载中…')
            this.loadingS(this.$route.query.id)
        },
        methods: {
            loadingS (cid) {
                let self = this
                let json = {}
                json.id = cid
                XHR.getClueMsg(json)
                .then(function (res) {
                    // console.log(res)
                    if (res.data.state == '1') {
                        setTimeout(() => {
                            self.$dialog.loading.close()
                        }, 400)
                        
                        self.DATA = res.data.body
                        
                    } else {
                        XHR.isErr(res,self)
                    }
                })
                .catch(function (err) {
                    
                })
            },
            altMsg (types, money) {
                let self = this
                let json = {}
                if(money == 0){
                    return false
                }
                this.$dialog.loading.open('数据加载中…')
                XHR.getUSIF(json)
                .then(function (res) {
                    // console.log(res)
                    if (res.data.state == '1') {
                        setTimeout(() => {
                            self.$dialog.loading.close()
                        }, 300)
                        if ( res.data.body.money >= self.DATA.salemoney ) {

                            if(types == 0){
                                self.$dialog.confirm({
                                    title: self.DATA.title,
                                    mes: `独享线索价值：${self.DATA.salemoney}`,
                                    opts: [
                                        {
                                            txt: '取消',
                                            color: false,
                                            callback: () => {}
                                        },
                                        {
                                            txt: '确定购买',
                                            color: true,
                                            callback: () => {
                                                self.$dialog.loading.open('数据加载中…')
                                                self.buyClue(0)
                                            }
                                        }
                                    ]
                                })
                            } else {
                                self.$dialog.confirm({
                                    title: self.DATA.title,
                                    mes: `共享线索价值：${self.DATA.salemoney_share}`,
                                    opts: [
                                        {
                                            txt: '取消',
                                            color: false,
                                            callback: () => {}
                                        },
                                        {
                                            txt: '确定购买',
                                            color: true,
                                            callback: () => {
                                                self.$dialog.loading.open('数据加载中…')
                                                self.buyClue(1)
                                            }
                                        }
                                    ]
                                })
                            }
                        } else {

                            self.$dialog.confirm({
                                title: '卡豆不足，请先充值卡豆',
                                mes: `剩余卡豆：${res.data.body.money}`,
                                opts: [
                                    {
                                        txt: '取消',
                                        color: false,
                                        callback: () => {}
                                    },
                                    {
                                        txt: '前去充值',
                                        color: true,
                                        callback: () => {
                                            self.jump('/self/buy')
                                        }
                                    }
                                ]
                            })
                        }
                    } else {
                        XHR.isErr(res,self)
                    }
                })
                .catch(function (err) {
                    
                })
            },
            buyClue (typs) {
                let self = this
                let json = {}
                json.id = this.DATA.id
                if(typs == 1){
                    json.ishare = 1
                }
                XHR.getBuy(json)
                .then(function (res) {
                    // console.log(res)
                    if (res.data.state == '1') {
                        self.$store.commit("isBuy", true)
                        setTimeout(() => {
                            self.$dialog.loading.close()
                            self.$dialog.toast({
                                mes: '购买成功',
                                timeout: 800,
                                icon: 'success',
                                callback: () => {
                                    self.jump({
                                        path:'/clue/msg',
                                        query:{id: res.data.body}
                                    })
                                }
                            })
                        }, 300)

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
.v-now{font-size: 0.36rem; color: #fff; font-weight: 500; padding-right: 0.2rem;}
.v-now:before{ content: '\e602'; font-family:'iconfont'; margin-right: 0.1rem; color: #fff;}
.v-txt{font-size: 0.24rem;color: #666;}
.v-txt i{color: red;text-decoration: line-through;}
.ms-txt{line-height: 0.4rem; word-wrap:break-word;padding: 0.16rem 0;}
</style>
