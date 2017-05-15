<template>
    <div class="flex-wrap col-flex">
        <div class="weui-search-bar weui-search-bar_focusing">
          <form class="weui-search-bar__form">
            <div class="weui-search-bar__box">
              <i class="weui-icon-search"></i>
              <input type="text" v-model.trim="searchIpt" class="weui-search-bar__input"placeholder="搜索姓名或手机号" ref="sipt"/>
              <a class="weui-icon-clear" @click="searchIpt = ''">x</a>
            </div>

          </form>
          <a class="weui-search-bar__cancel-btn" @click="serBtn">搜索</a>
        </div>

        <v-nus v-if="isNull" txt="没有搜索到哦～"></v-nus>
        <yd-infinitescroll v-if="!isNull" :on-infinite="loadList" class="scroll-wrap">
            <div slot="list" class="all-item-box">


                <div v-for="em in DATA"
                    class="crm-item-box"
                    @click="jump({path:'/crm/msg',query:{id: em.id}})">
                    <div class="crm-item-txt">{{em.realname}}<i>{{em.tel}}</i></div>
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

                DATA:[],

                searchIpt: ''
            }
        },
        mounted (){
            this.$refs.sipt.focus()
        },
        methods: {
            serBtn(){
                if(this.searchIpt == ''){
                    this.$dialog.toast({
                        mes: '搜索不能为空',
                        timeout: 2000,
                        icon: 'error',
                        callback: () => {
                            this.$refs.sipt.focus()
                        }
                    })
                    return false
                }
                this.DATA = []
                this.$dialog.loading.open('搜索中…')
                this.loadList()
            },
            loadList() {
                let self = this
                let json = {}
                json.keyword = this.searchIpt
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
                        self.DATA.push(...res.data.body.contactslist)
                        window.$yduiBus.$emit('ydui.infinitescroll.finishLoad')
                        if(self.DATA.length == '0'){
                            self.isNull = true
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
.weui-search-bar{width: 100%; height: 0.88rem;}
.crm-item-box{background-color: #fff; padding: 0 0.3rem; height: 0.84rem; line-height: 0.84rem; border-bottom:0.02rem solid #eee;}
.crm-item-txt{ color: #333; font-size: 0.3rem;
    i{ color: #666; font-size: 0.26rem; padding-left: 0.2rem;}
}
</style>
