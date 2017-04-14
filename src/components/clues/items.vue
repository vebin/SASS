<template>
    <div class="cl-box flex-wrap col-flex">
        <header class="app-header">
            <v-header></v-header>
        </header>
        <div v-if="false" class="flex-wrap row-flex midCenter cl-nav">
            <div class="page midCenter">综合</div>
            <div class="page midCenter">精品</div>
            <div class="page midCenter flex-wrap row-flex m-v"
                @click="showADDR">地区<i></i></div>
            <div class="page midCenter flex-wrap row-flex m-v"
                @click="showTYPE">类别<i></i></div>
        </div>
        <v-nus v-if="isNull" txt="没有线索哦～"></v-nus>
        <yd-infinitescroll v-if="!isNull" :on-infinite="loadList" class="scroll-wrap">
            <div slot="list" class="all-item-box">

                <div v-for="em in DATA"
                    class="c-item-box flex-wrap col-flex"
                    @click="jump({path:'/clue/buy',query:{id: em.id}})">
                    <div class="flex-wrap row-flex mx-Center">
                        <div v-if="em.mark !== ''" class="c-str">{{em.mark}}</div>
                        <div class="page c-title">{{em.title}}</div>
                    </div>
                    <div class="flex-wrap row-flex">
                        <div class="page c-txt">{{em.address}}</div>
                        <div class="page c-txt">{{em.uname}} &nbsp;&nbsp;&nbsp;&nbsp;{{em.showdatetime}}</div>
                    </div>
                    <div class="page flex-wrap row-flex">
                        <div class="page flex-wrap row-flex">
                            <div class="page flex-wrap row-flex mx-Center">
                                <div v-for="ems in em.tag"
                                    class="v-name">{{ems}}</div>
                            </div>
                        </div>
                        <div class="page flex-wrap row-flex">
                            <div class="page flex-wrap row-flex fx-end">
                                <div class="v-now">{{em.salemoney}}</div>
                                <div class="v-old">{{em.salemoney_pre}}</div>
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
        <yd-popup v-model="showAddr" position="right" width="60%">
            <v-addr @hides="hideAddr" @act="psnA" :txt="psn"></v-addr>
        </yd-popup>
        <yd-popup v-model="showType" position="right" width="60%">
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
                page: 1,
                isNull: false,

                psn:-1,
                typeid:-1,

                DATA:[]
            }
        },
        created () {
            this.$dialog.loading.open('数据加载中…')
            this.loadList()
            // this.WXCODE()
        },

        methods: {
            psnA (id){
                this.psn = id
                this.hideAddr()
            },
            typeidA (id){
                this.typeid = id
                this.hideType()
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
            loadList() {
                let self = this
                let json = {}
                json.pg = this.page
                json.psn = ''
                json.typeid = ''
                json.grade = ''
                XHR.getAllClues(json)
                .then(function (res) {
                    // console.log(res)
                    if (res.data.state == '1') {
                        setTimeout(() => {
                            self.$dialog.loading.close()
                        }, 400)
                        if(res.data.body.pagerecord >= 10 && res.data.body.pagerecord !== 0){
                            if( self.page == res.data.body.pagecount){
                                window.$yduiBus.$emit('ydui.infinitescroll.loadedDone')
                            } else {
                                self.page++
                            }
                        } else {
                            window.$yduiBus.$emit('ydui.infinitescroll.loadedDone')
                        }
                        self.DATA.push(...res.data.body.clueslist)
                        window.$yduiBus.$emit('ydui.infinitescroll.finishLoad')
                        if(self.DATA.length == '0'){
                            self.isNull = true
                        }
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
.c-title,.c-txt{font-size:0.33rem; color: #333;height: 0.6rem; line-height: 0.6rem;overflow: hidden; text-overflow:ellipsis; white-space:nowrap;}
.c-txt{font-size: 0.24rem; color:#666; height: 0.44rem; line-height: 0.44rem;}

.v-name{height: 0.4rem; line-height: 0.4rem; padding: 0 0.08rem;border:0.02rem solid #ccc; color: #666; border-radius: 4px; margin-right: 0.1rem; font-size: 0.24rem;}

.fx-end{ justify-content:flex-end; padding-bottom: 0.08rem;}
.v-now{font-size: 0.4rem; color: #ff6500; font-weight: 500; padding-right: 0.2rem;}
.v-now:before{ content: '\e602'; font-family:'iconfont'; margin-right: 0.1rem; color: #ff9800;}
.v-old{font-size: 0.3rem; color: #666;font-weight: 500;text-decoration:line-through;}
</style>
