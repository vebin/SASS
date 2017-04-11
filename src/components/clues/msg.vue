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
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">标签</div>
                    <div class="page ms-g-rit">
                        <em v-for="ems in DATA.tag">{{ems}}</em>
                    </div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">备注</div>
                    <div class="page ms-txt">{{DATA.remark}}</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">询价时间</div>
                    <div class="page ms-g-rit">{{DATA.cdatetime}}</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex ms-g-nobor">
                    <div class="ms-g-lft">线索价值</div>
                    <div class="page flex-wrap row-flex">
                        <div class="v-now">{{DATA.salemoney}}</div>
                        <div v-if="false" class="v-txt">(当前账户剩余<i>34</i>卡豆)</div>
                        <div class="v-txt">(折扣前价值<i>{{DATA.salemoney_pre}}</i>卡豆)</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ms-g-ftbox flex-wrap row-flex">
            <div class="ms-btns ms-btn-bk" @click="back">返回</div>
            <div  class="page ms-btns" @click="altMsg">立即购买</div>

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
                DATA:{}
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
                        
                    }
                })
                .catch(function (err) {
                    
                })
            },
            altMsg () {

                if ( true ) {
                    this.$dialog.confirm({
                        title: this.DATA.title,
                        mes: `线索价值：${this.DATA.salemoney}`,
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
                                    this.$dialog.loading.open('数据加载中…')
                                    this.buyClue()
                                }
                            }
                        ]
                    })

                } else {

                    this.$dialog.confirm({
                        title: '当前剩余卡豆不足！',
                        mes: `线索价值：${this.DATA.salemoney}`,
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
                                    this.jump('/self/buy')
                                }
                            }
                        ]
                    })

                }

            },
            buyClue () {
                let self = this
                let json = {}
                json.id = this.DATA.id
                XHR.getBuy(json)
                .then(function (res) {
                    // console.log(res)
                    if (res.data.state == '1') {

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
                        self.$dialog.alert({mes: res.data.errmsg})
                    }
                })
                .catch(function (err) {
                    
                })
                
            }
        }
    }
</script>
<style lang="less" scoped>
.v-now{font-size: 0.36rem; color: #ff6500; font-weight: 500; padding-right: 0.2rem;}
.v-now:before{ content: '\e602'; font-family:'iconfont'; margin-right: 0.1rem; color: #ff9800;}
.v-txt{font-size: 0.24rem;color: #666;}
.v-txt i{color: red;text-decoration: line-through;}
.ms-txt{line-height: 0.4rem; word-wrap:break-word;padding: 0.16rem 0;}
</style>
