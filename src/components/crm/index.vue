<template>
    <div class="cl-box flex-wrap col-flex">
        <v-search :txt="allNumber" @go="jump('/crm/m/search')"></v-search>
        <v-nus v-if="isNull"></v-nus>
        <yd-infinitescroll v-if="!isNull" :on-infinite="loadList" class="scroll-wrap">
            <div slot="list" class="all-item-box">


                <div v-for="em in DATA"
                    class="crm-item-box"
                    @click="jump({path:'/crm/msg',query:{id: em.id}})">
                    <div class="crm-item-txt">{{em.realname}}</div>
                    <div class="crm-item-txt"><i>{{em.tel}}</i></div>
                </div>


            </div>

            <!-- 数据全部加载完毕显示 -->
            <span slot="doneTip">～我是有底线滴～</span>

            <!-- 加载中提示 -->
            <div slot="loadingTip" class="loading visible load-boxs">
                <span class="loading-ring"> </span>
            </div>
        </yd-infinitescroll>
        <div class="addPep" @click="jump({path:'/crm/msg/form',query:{id: 'add'}})">+</div>
    </div>
</template>
<script>
import XHR from '../../api/service'
    export default {
        data() {
            return {
                isNull: false,
                page: 1,
                DATA:[],
                allNumber: 0
            }
        },
        // created () {
        //     this.DATA = []
        //     this.$dialog.loading.open('数据加载中…')
        //     this.loadList()
        // },
        activated (){
            this.DATA = []
            this.$dialog.loading.open('数据加载中…')
            this.loadList()
        },
        methods: {
            // /* 所有数据加载完毕 */
            // window.$yduiBus.$emit('ydui.infinitescroll.loadedDone')
                  
            // /* 单次请求数据完毕 */
            // window.$yduiBus.$emit('ydui.infinitescroll.finishLoad')
            loadList() {
                let self = this
                let json = {}
                json.pg = this.page
                XHR.getPopList(json)
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
                        self.allNumber = res.data.body.recordtotal
                        self.DATA.push(...res.data.body.contactslist)
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

            }
        }
    }
</script>
<style lang="less" scoped>
.cl-box{width: 100%; height: 100%;}
.crm-item-box{background-color: #fff; padding: 0 0.3rem; height: 1rem; line-height: 0.4rem; border-bottom:0.02rem solid #eee; padding-top: 0.1rem;}
.crm-item-txt{ color: #333; font-size: 0.3rem;
    i{ color: #666; font-size: 0.26rem;line-height: 0.25rem;}
}

.addPep{width: 0.88rem; height: 0.88rem; border-radius: 0.88rem; background-color: rgba(11,185,8,.8); color: #fff;font-size: 0.8rem;text-align: center; position: absolute; bottom: 2rem;right: 0.3rem; line-height: 0.88rem;z-index: 33;font-weight: 200;}
</style>
