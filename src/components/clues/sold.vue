<template>
    <div class="cl-box flex-wrap col-flex">
        <div class="topTit">已售线索 TOP 100</div>
        <v-nus v-if="isNull" txt="已售列表为空～"></v-nus>
        <yd-infinitescroll v-if="!isNull" :on-infinite="loadList" class="scroll-wrap">
            <div slot="list" class="all-item-box">

                <div v-for="(em,index) in DATA"
                    class="c-item-box flex-wrap col-flex">
                    <div class="flex-wrap row-flex mx-Center">
                        <div v-if="em.mark !== ''" class="c-str">{{em.mark}}</div>
                        <div class="page c-title">{{em.title}}</div>
                    </div>
                    <div class="flex-wrap row-flex">
                        <div class="page c-txt">{{em.address}} &nbsp;&nbsp;&nbsp;{{em.uname}}</div>
                        <div class="page c-txt c-right-txt">{{em.showdatetime}}</div>
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
                               <div class="page c-txt" style="text-align: right;">{{em.buydescription}}</div>
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
    </div>
</template>
<script>
import XHR from '../../api/service'
    export default {
        data() {
            return {
                page: 1,
                isNull: false,
                DATA:[]
            }
        },
        created () {
            this.$dialog.loading.open('数据加载中…')
            this.loadList()
        },
        methods: {
            loadList() {
                let self = this
                let json = {}
                json.pg = this.page
                XHR.soldList(json)
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
        }
    }
</script>
<style lang="less" scoped>
.cl-box{width: 100%; height: 100%;}


.c-item-box{
    height: 1.9rem;
    padding: 0.12rem 0.3rem;
    border-bottom: 0.02rem solid #eee;
    background-color: #fff;
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
.v-name{height: 0.4rem; line-height: 0.4rem; padding: 0 0.08rem;border:0.02rem solid #ccc; color: #666; border-radius: 4px; margin-right: 0.1rem; font-size: 0.24rem;}

.topTit{height: 0.8rem; line-height: 0.8rem; border-bottom: 1px solid #f5f5f5;width: 100%; text-align: center; font-size: 0.3rem;}
</style>
