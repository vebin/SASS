<template>
    <div class="flex-wrap col-flex">
        <div class="scroll-wrap">
            <div class="ms-g-box">
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">姓名</div>
                    <div class="page ms-g-rit">{{DATA.realname}}</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">联系方式</div>
                    <div class="page flex-wrap row-flex">
                        <div class="page">{{DATA.tel}}</div>
                        <a :href="'tel:'+DATA.tel" class="v-now"></a>
                    </div>
                </div>
                <div v-if="DATA.address !== ''" class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">地区</div>
                    <div class="page ms-g-rit">{{DATA.address}}</div>
                </div>
            </div>

            <div v-if="DATA.remark !== ''" class="ms-g-box">
                <div class="ms-g-item flex-wrap row-flex ms-g-nobor">
                    <div class="ms-g-lft">备注</div>
                    <div class="page ms-txt">{{DATA.remark}}</div>
                </div>
            </div>

            <dl v-if="DATA.clueslist.length > 0" class="m-gj-box">
                <dt>询价线索</dt>

                <dd v-for="ems in DATA.clueslist"
                    @click="jump({path:'/clue/msg',query:{id: ems.id}})">
                    <div class="m-gj-txt">{{ems.nm}}</div>
                    <div class="m-gj-time">{{ems.cdatetime}}</div>
                </dd>

            </dl>
        </div>
        <div class="ms-g-ftbox flex-wrap row-flex">
            <div class="page ms-btns ms-btn-bk" @click="back">返回</div>
            <div class="page ms-btns"
                @click="jump('/crm/msg/form')">编辑</div>
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
                // DATA:{
                //     clueslist:[]
                // }
            }
        },
        computed: {
          DATA () {return this.$store.state.myCrm}
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
                XHR.getPopMsg(json)
                .then(function (res) {
                    // console.log(res)
                    if (res.data.state == '1') {
                        setTimeout(() => {
                            self.$dialog.loading.close()
                        }, 400)
                        
                        // self.DATA = res.data.body
                        self.$store.commit("setMyCrm", res.data.body)
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
            },
        }
    }
</script>
<style lang="less" scoped>
.v-now{font-size: 0.36rem; color: #ff6500; padding-left: 0.4rem;}
.v-now:before{ content: '\e622'; font-family:'iconfont'; color: #0bb908; font-weight: bold;}

.ms-txt{line-height: 0.4rem; word-wrap:break-word;padding: 0.16rem 0;}

.m-gj-box{width: 100%; box-sizing:border-box;height: auto;
    dt{padding: 0 0.3rem; height: 0.6rem; line-height: 0.6rem;font-size: 0.24rem; color: #666;}
    dd{background-color: #fff; padding: 0 0.3rem; height: 1rem; }
    .m-gj-txt{font-size: 0.28rem;color: #333; line-height: 0.56rem; height: 0.56rem; overflow: hidden;text-overflow:ellipsis; white-space:nowrap;}
    .m-gj-time{font-size: 0.24rem;color: #666; border-bottom:0.02rem solid #eee;line-height: 0.36rem; height: 0.44rem;}
}
</style>
