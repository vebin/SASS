<template>
    <div class="cl-box flex-wrap col-flex">
        <header class="app-header">
            <v-header></v-header>
        </header>
        <v-search :txt="allNumber" @go="jump('/clue/m/search')"></v-search>
        <div v-if="false" class="flex-wrap row-flex midCenter cl-nav">
            <div class="page midCenter">综合</div>
            <div class="page midCenter flex-wrap row-flex v-ud active">客户级别<i class=''></i></div>
            <div class="page midCenter flex-wrap row-flex v-ud">询价时间<i class='acs'></i></div>
            <div class="page midCenter v-sx active"
                @click="showSc = true">筛选</div>
        </div>
        <v-nus v-if="isNull" txt="没有线索哦～"></v-nus>
        <yd-infinitescroll v-if="!isNull" :on-infinite="loadList" class="scroll-wrap">
            <div slot="list" class="all-item-box">

                <div v-for="(em,index) in HOTS"
                    class="c-item-box flex-wrap col-flex"
                    @click="goMsg(em.id,index)">
                    <div class="flex-wrap row-flex mx-Center">
                        <div v-if="em.mark !== ''" class="c-strblue">{{em.mark}}</div>
                        <div class="page c-title">{{em.title}}</div>
                    </div>
                    <div class="flex-wrap row-flex">
                        <div class="page c-txt">{{em.address}} &nbsp;&nbsp;&nbsp;{{em.uname}}</div>
                        <div class="page c-txt c-right-txt">{{em.showdatetime}}</div>
                    </div>
                    <div class="page flex-wrap row-flex" style="overflow:visible">
                        <div class="page flex-wrap row-flex">
                            <div class="page flex-wrap row-flex mx-Center">
                                <div v-for="ems in em.tag"
                                    class="v-names">{{ems}}</div>
                            </div>
                        </div>
                        <div class="page flex-wrap row-flex" style="overflow:visible">
                            <div class="page flex-wrap row-flex fx-end" style="overflow:visible">
                               <div class="v-name" :class="{'isRed': em.isread == 0}" style="margin:0">点击查看</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-for="em in DATA"
                    class="c-item-box flex-wrap row-flex mx-Center"
                    @click="jump({path:'/clue/msg',query:{id: em.id}})">
                    <div class="page flex-wrap col-flex">
                        <div class="flex-wrap row-flex mx-Center">
                            <div v-if="em.mark !== ''" :class="isStyle(em.mark)">{{em.mark}}</div>
                            <div class="c-title">{{em.uname}}</div>
                            <div class="c-old">{{em.address}}</div>
                        </div>
                        <div class="c-txt">{{em.title}}</div>
                        <div v-if="em.remark != ''" class="c-txt">{{em.remark}}</div>
                        <!-- <div class="page flex-wrap row-flex mx-Center">
                            <div v-for="ems in em.tag"
                                    class="v-names">{{ems}}</div>
                        </div> -->
                    </div>

                    <div class="ms-cell-arrow ms-rit"></div>
                </div>


            </div>

            <!-- 数据全部加载完毕显示 -->
            <span slot="doneTip">～我是有底线滴～</span>

            <!-- 加载中提示 -->
            <div slot="loadingTip" class="loading visible load-boxs">
                <span class="loading-ring"> </span>
            </div>
        </yd-infinitescroll>

        <yd-popup v-model="showSc" position="right" width="80%">
            <v-scnav @hides="hideSc"></v-scnav>
        </yd-popup>
    </div>
</template>
<script>
import XHR from '../../api/service'
    export default {
        data() {
            return {
                showSc: false,
                page: 1,
                isNull: false,

                DATA:[],
                HOTS:[],
                allNumber: 0
            }
        },
        created () {
            this.$dialog.loading.open('数据加载中…')
            this.hotList()
            this.loadList()
        },
        watch: {
            "$route" (to, from) {
                if( to.path == '/clue' && this.$store.state.clueNav == '1') {
                    this.$dialog.loading.open('数据加载中…')
                    this.DATA = []
                    this.loadList()
                }
            }
        },
        methods: {
            hideSc () { this.showSc = !this.showSc},
            isStyle (typ) {
                if( typ == 'O 成功'){
                    return 'c-str deo'
                }
                if( typ == 'F 战败'){
                    return 'c-str fil'
                }
                return 'c-str'
            },
            goMsg(ids,index){
                this.inx = index
                this.$set(this.HOTS[index],'isread',1)
                this.jump({path:'/clue/buy',query:{id: ids}})
            },
            hotList() {
                let self = this
                let json = {}
                json.pg = this.page
                XHR.recommList(json)
                .then(function (res) {
                    // console.log(res)
                    if (res.data.state == '1') {
                        self.HOTS.push(...res.data.body)
                    } else {
                        XHR.isErr(res,self)
                    }
                })
                .catch(function (err) {
                    
                })

            },
            // /* 所有数据加载完毕 */
            // window.$yduiBus.$emit('ydui.infinitescroll.loadedDone')
                  
            // /* 单次请求数据完毕 */
            // window.$yduiBus.$emit('ydui.infinitescroll.finishLoad')
            loadList() {
                let self = this
                let json = {}
                json.pg = this.page
                XHR.getBuyList(json)
                .then(function (res) {
                    // console.log(res)
                    if (res.data.state == '1') {
                        setTimeout(() => {
                            self.$dialog.loading.close()
                        }, 400)
                        self.allNumber = res.data.body.recordtotal
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
                            if( self.HOTS.length == 0){
                                self.isNull = true
                            }
                        }
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
.v-sx:after{content:'\e61b'; font-family: 'iconfont'; color: #9e9e9e; margin-left: 0.1rem;}
.v-sx.active:after{color:#00b800;}

.v-ud{
    i{
      margin-left: 0.1rem;
      &:before{
         content:' ';
         width: 0;
         height: 0;
         display: block;
         border-left: 0.08rem solid transparent;
         border-right: 0.08rem solid transparent;
         border-bottom: 0.12rem solid #9e9e9e;
         margin-bottom: 0.06rem;
      }
      &:after{
        content:' ';
        width: 0;
        height: 0;
        display: block;
        border-left: 0.08rem solid transparent;
        border-right: 0.08rem solid transparent;
        border-top: 0.12rem solid #9e9e9e;
      }
    }
  }
.active{
    color: #00b800;
    i:before{}
    i:after{border-top: 0.12rem solid #00b800;}
    .acs:before{border-bottom: 0.12rem solid #00b800;}
    .acs:after{border-top: 0.12rem solid #ccc;}
}

.c-item-box{
    padding: 0.12rem 0.3rem;
    border-bottom: 0.02rem solid #eee;
    background-color: #fff;
}
.c-strblue{height: 0.4rem; line-height: 0.4rem; border:0.02rem solid #2196f3; color: #2196f3; border-radius: 4px; margin-right: 0.1rem; font-size: 0.26rem; width: 0.76rem; text-align: center;}
.c-str{height: 0.4rem; line-height: 0.4rem; border:0.02rem solid #00b800; color: #00b800; border-radius: 4px; font-size: 0.26rem; padding: 0 0.1rem; text-align: center; margin-right: 8px;}
.c-title,.c-txt{font-size:0.33rem; color: #333;height: 0.6rem; line-height: 0.6rem;overflow: hidden; text-overflow:ellipsis; white-space:nowrap;}
.c-txt{font-size: 0.26rem; color:#666; height: 0.5rem; line-height: 0.5rem;}
.c-right-txt{text-align: right;}
.fx-end{ justify-content:flex-end; padding-bottom: 0.08rem;}
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
.ms-rit:after{font-size: 0.4rem;}
.c-old{padding-left: 0.2rem; font-size: 0.26rem; color: #666;}

.fil{color: #666; border-color: #666;}
.deo{color: #ff6500; border-color: #ff6500;}
</style>
