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
                    class="c-item-box flex-wrap row-flex mx-Center"
                    @click="jump({path:'/clue/msg',query:{id: em.id}})">
                    <div class="page flex-wrap col-flex">
                        <div class="flex-wrap row-flex mx-Center">
                            <div class="c-title">{{em.uname}}</div>
                            <div class="c-old"></div>
                        </div>
                        <div class="c-txt">{{em.title}}</div>
                        <div class="page flex-wrap row-flex mx-Center">
                            <div v-for="ems in em.tag"
                                    class="v-name">{{ems}}</div>
                        </div>
                    </div>

                    <div v-if="em.mark !== ''" :class="isStyle(em.mark)">{{em.mark}}</div>
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
            isStyle (typ) {
                if( typ == 'O 成功'){
                    return 'c-str deo'
                }
                if( typ == 'F 战败'){
                    return 'c-str fil'
                }
                return 'c-str'
            },
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
                XHR.getBuyList(json)
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
.c-item-box{
    padding: 0.12rem 0.3rem 0.2rem;
    border-bottom: 0.02rem solid #eee;
    background-color: #fff;
}
.c-str{height: 0.6rem; line-height: 0.6rem; border:0.02rem solid #00b800; color: #00b800; border-radius: 4px; font-size: 0.28rem; padding: 0 0.1rem; text-align: center;}
.c-title,.c-txt{font-size:0.33rem; color: #333;height: 0.6rem; line-height: 0.6rem;overflow: hidden; text-overflow:ellipsis; white-space:nowrap;}
.c-txt{font-size: 0.24rem; color:#666; height: 0.5rem; line-height: 0.5rem;}
.v-name{height: 0.4rem; line-height: 0.4rem; padding: 0 0.08rem;border:0.02rem solid #ccc; color: #666; border-radius: 4px; margin-right: 0.1rem; font-size: 0.24rem;}
.c-old{padding-left: 0.2rem; font-size: 0.26rem; color: #666;}

.fil{color: #666; border-color: #666;}
.deo{color: #ff6500; border-color: #ff6500;}
</style>
