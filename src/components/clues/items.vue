<template>
    <div class="cl-box flex-wrap col-flex">
        <header class="app-header">
            <v-header></v-header>
        </header>
        <div class="flex-wrap row-flex midCenter cl-nav">
            <div v-if="false" class="page midCenter">综合</div>
            <div v-if="false" class="page midCenter">精品</div>
            <div class="page midCenter flex-wrap row-flex m-v"
                @click="showADDR">地区<i></i></div>
            <div class="page midCenter flex-wrap row-flex m-v"
                @click="showTYPE">类别<i></i></div>
        </div>
        <v-nus v-if="isNull" txt="没有线索哦～"></v-nus>
        <yd-infinitescroll v-if="!isNull" :on-infinite="loadList" class="scroll-wrap">
            <div slot="list" class="all-item-box">

                <div v-for="(em,index) in DATA"
                    class="c-item-box flex-wrap col-flex"
                    @click="goMsg(em.id,index)">
                    <div class="flex-wrap row-flex mx-Center">
                        <div v-if="em.mark !== ''" class="c-str">{{em.mark}}</div>
                        <div class="page c-title">{{em.title}}</div>
                    </div>
                    <div class="flex-wrap row-flex">
                        <div class="page c-txt">{{em.address}} &nbsp;&nbsp;&nbsp;{{em.uname}}</div>
                        <div class="page c-txt c-right-txt">{{em.showdatetime}}</div>
                    </div>
                    <div class="page flex-wrap row-flex"  style="overflow:visible">
                        <div class="page flex-wrap row-flex">
                            <div class="page flex-wrap row-flex mx-Center">
                                <div v-for="ems in em.tag"
                                    class="v-names">{{ems}}</div>
                            </div>
                        </div>
                        <div class="page flex-wrap row-flex" style="overflow:visible">
                            <div class="page flex-wrap row-flex fx-end" style="overflow:visible">
                                <!-- <div class="v-now">{{em.salemoney}}</div>
                                <div class="v-old">{{em.salemoney_pre}}</div> -->
                               <div class="v-name" :class="{'isRed': em.isread == 0}" style="margin:0">点击查看</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- 数据全部加载完毕显示 -->
            <span slot="doneTip">～我是有底线滴～</span>

            <!-- 加载中提示 -->
            <div slot="loadingTip" class="loading visible load-boxs">
                <span class="loading-ring"> </span>
            </div>

        </yd-infinitescroll>
        <div class="addPep" @click="jump('/clue/sold')">已售</div>
        <yd-popup v-model="showAddr" position="right" width="66%">
            <v-addr @hides="hideAddr" @act="psnA"></v-addr>
        </yd-popup>
        <yd-popup v-model="showType" position="right" width="66%">
            <v-shtype @hides="hideType" @act="typeidA"></v-shtype>
        </yd-popup>
    </div>
</template>
<script>
import XHR from '../../api/service'
    export default {
        data() {
            return {
                inx:-1,         // 记录是否被购买成功
                showAddr: false,
                showType: false,
                page: 1,
                isNull: false,

                psn: [],
                typeid:[],

                DATA:[]
            }
        },
        watch: {
            "$route" (to, from) {
                if( to.path == '/clue' && this.$store.state.clueNav == '0' && this.$store.state.isbuy) {
                    this.DATA.splice(this.inx,1)
                    this.$store.commit("isBuy", false)
                }
            }
        },
        created () {
            this.$dialog.loading.open('数据加载中…')
            this.loadList()
            // this.WXCODE()
        },

        methods: {
            psnA (){
                let json = {}
                json.pg = 1
                json.psn = this.$store.state.psn
                json.typeid = this.$store.state.typeid
                this.hideAddr()
                this.loadList(json)
            },
            typeidA (){
                let json = {}
                json.pg = 1
                json.psn = this.$store.state.psn
                json.typeid = this.$store.state.typeid
                this.hideType()
                this.loadList(json)
            },
            showADDR () {
                let ADDRS = JSON.parse(localStorage.getItem('WX_ADDRS')) || []
                this.$store.commit("ADDRS", ADDRS.body)
                this.showAddr = true
            },
            showTYPE () {
                let CARTYPE = JSON.parse(localStorage.getItem('WX_CARTYPE')) || []
                this.$store.commit("CARTYPE", CARTYPE.body)
                this.showType = true
            },
            hideAddr () { this.showAddr = !this.showAddr},
            hideType () { this.showType = !this.showType},
            // /* 所有数据加载完毕 */
            // window.$yduiBus.$emit('ydui.infinitescroll.loadedDone')
                  
            // /* 单次请求数据完毕 */
            // window.$yduiBus.$emit('ydui.infinitescroll.finishLoad')
            loadList(objs) {
                let self = this
                let json = {}
                json.pg = this.page
                json.psn = this.$store.state.psn
                json.typeid = this.$store.state.typeid
                // json.grade = ''
                if(objs){
                    json = objs
                    this.page = 1
                    this.DATA = []
                }
                XHR.getAllClues(json)
                .then(function (res) {
                    // console.log(res)
                    if (res.data.state == '1') {
                        setTimeout(() => {
                            self.$dialog.loading.close()
                        }, 400)
                        if(res.data.body.pagerecord > 0){
                            self.isNull = false
                            if( self.page == res.data.body.pagecount){
                                window.$yduiBus.$emit('ydui.infinitescroll.loadedDone')
                                self.DATA.push(...res.data.body.clueslist)
                            } else {
                                window.$yduiBus.$emit('ydui.infinitescroll.finishLoad')
                                self.page++
                                self.DATA.push(...res.data.body.clueslist)
                            }
                        } else {
                            window.$yduiBus.$emit('ydui.infinitescroll.loadedDone')
                            self.isNull = true
                        }
                    } else {
                        XHR.isErr(res,self)
                    }
                })
                .catch(function (err) {
                    
                })

            },
            goMsg(ids,index){
                this.inx = parseInt(index)
                this.$set(this.DATA[index],'isread',1)
                this.jump({path:'/clue/buy',query:{id: ids}})
            },
            WXCODE(){
                let self = this
                let json = {}
                json.url = `https://${window.location.host}/${window.location.pathname}`
                XHR.getWxConfig(json)
                .then(function (res) {
                    // console.log(res)
                    if (res.data.state == '1') {
                        localStorage.setItem('WX_CONFIGXS',JSON.stringify(res.data.body))
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
.cl-box{width: 100%; height: 100%;}
.cl-nav{
    background-color: #fff;
    border: 0.02rem solid #e6e6e6;
    border-left: 0;
    border-right: 0;
    height: 0.8rem;
    font-size:0.3rem; 
    div{
        text-align: center;
    }
}
.m-v{
    i{ margin-left: 0.1rem;}
    i:after{
        content:' ';
        width: 0;
        height: 0;
        display: block;
        border-left: 0.08rem solid transparent;
        border-right: 0.08rem solid transparent;
        border-top: 0.12rem solid #9e9e9e;
    }
}

.c-item-box{
    height: 2rem;
    padding: 0.12rem 0.3rem;
    border-bottom: 0.02rem solid #eee;
    background-color: #fff;
}
.c-str{height: 0.4rem; line-height: 0.4rem; border:0.02rem solid #2196f3; color: #2196f3; border-radius: 4px; margin-right: 0.1rem; font-size: 0.26rem; width: 0.76rem; text-align: center;}
.c-title,.c-txt{font-size:0.34rem; color: #333;height: 0.6rem; line-height: 0.6rem;overflow: hidden; text-overflow:ellipsis; white-space:nowrap;}
.c-txt{font-size: 0.26rem; color:#666; height: 0.44rem; line-height: 0.44rem;}
.c-right-txt{text-align: right;}
.v-names{height: 0.4rem; line-height: 0.4rem; padding: 0 0.08rem;border:0.02rem solid #ccc; color: #666; border-radius: 4px; margin-right: 0.1rem; font-size: 0.24rem;}
.v-name{height: 0.5rem; line-height: 0.5rem; padding: 0 0.16rem;border:0.02rem solid #ccc; color: #444; border-radius: 4px; margin-right: 0.1rem; font-size: 0.24rem; position: relative;}
.isRed:after{
    content: ' ';
    width: 6px;
    height: 6px;
    border-radius: 6px;
    background-color: red;
    display: inline-block;
    position: absolute;
    top: -2px;
    right: -2px;
    z-index: 55;
}
.fx-end{ justify-content:flex-end; padding-bottom: 0.08rem;}
.v-now{font-size: 0.4rem; color: #ff6500; font-weight: 500;}
.v-now:before{ content: '\e602'; font-family:'iconfont'; margin-right: 0.1rem; color: #ff9800;}
.v-old{font-size: 0.3rem; color: #666;font-weight: 500;text-decoration:line-through;}

.addPep{width: 0.88rem; height: 0.88rem; border-radius: 0.88rem; background-color: rgba(255,152,0,.85); color: #fff;font-size: 0.26rem;text-align: center; position: absolute; bottom: 2rem;right: 0.3rem; line-height: 0.8rem;z-index: 33;font-weight: 400;-webkit-transform: translateZ(0); border-width: 3px;border-style: solid; border-color: rgba(255,106,0,.2);}
</style>
