<template>
    <div class="flex-wrap col-flex">
        <div class="scroll-wrap">
            <div class="ms-g-box">
                <div class="ms-g-item flex-wrap row-flex ms-g-nobor">
                    <div class="ms-g-lft">意向车型</div>
                    <div class="page ms-g-rit">{{DATA.title}}</div>
                </div>
            </div>
            <div class="ms-g-box">
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">姓名</div>
                    <div class="page ms-g-rit">{{DATA.uname}}</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">联系方式</div>
                    <div class="page flex-wrap row-flex">
                        <div class="page">{{DATA.tel}}</div>
                        <a :href="'tel:'+DATA.tel" class="v-now"></a>
                    </div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">提车地区</div>
                    <div class="page ms-g-rit">{{DATA.address}}</div>
                </div>
                <div v-if="DATA.howmuch > 1" class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">购买台数</div>
                    <div class="page ms-g-rit">{{DATA.howmuch}}</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
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
                    <div class="page ms-txt">{{DATA.remark}}</div>
                </div>
            </div>
            <div class="ms-g-box">
                <div class="ms-g-item flex-wrap row-flex ms-g-nobor">
                    <div class="ms-g-lft">询价时间</div>
                    <div class="page ms-g-rit">{{DATA.cdatetime}}</div>
                </div>
            </div>
            <dl v-if="DATA.followup.length > 0" class="m-gj-box">
                <dt>跟进记录</dt>
                <dd v-for="(ems, index) in DATA.followup"
                    @click="jump({path:'/clue/msg/fmsg',query:{id:index}})">
                    <div class="m-gj-time">{{ems.cdatetime}}</div>
                    <div class="m-gj-txt">备注：{{ems.remark}}</div>
                </dd>
                
            </dl>
        </div>
        <div class="ms-g-ftbox flex-wrap row-flex">
            <div v-if="DATA.mark == 'F 战败'" class="page ms-btns" @click="back">返回</div>

            <div v-if="DATA.mark !== 'F 战败'" class="ms-btns ms-btn-bk" @click="back">返回</div>
            <div v-if="DATA.mark !== 'F 战败'" class="ms-btns ms-btn-tt" 
                @click="jump('/clue/msg/form')">编辑</div>
            <div v-if="DATA.mark !== 'F 战败'" class="page ms-btns" 
                @click="jump({path:'/clue/msg/fm',query:{id:$route.query.id}})"
                >添加跟进记录</div>
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
                //     followup:[]
                // }
            }
        },
        computed: {
          DATA () {return this.$store.state.myMsg}
        },
        created () {
            this.$dialog.loading.open('数据加载中…')
            this.loadingS(this.$route.query.id)
        },
        beforeRouteLeave (to, from, next) {
            if(to.path == '/clue/buy'){
                return next('/clue')
            } else {
                return next()
            }
        },
        methods: {
            loadingS (cid) {
                let self = this
                let json = {}
                json.id = cid
                XHR.getListMsg(json)
                .then(function (res) {
                    // console.log(res)
                    if (res.data.state == '1') {
                        setTimeout(() => {
                            self.$dialog.loading.close()
                        }, 400)
                        // self.DATA = res.data.body

                        self.$store.commit("setMyMsg", res.data.body)
                        
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
    .m-gj-txt{font-size: 0.28rem;color: #333; line-height: 0.36rem; height: 0.5rem; overflow: hidden;text-overflow:ellipsis; white-space:nowrap;border-bottom:0.02rem solid #eee;}
    .m-gj-time{font-size: 0.24rem;color: #666; line-height: 0.5rem; height: 0.5rem;}
}
</style>
