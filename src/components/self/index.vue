<template>
    <div class="cl-box flex-wrap col-flex">
        <div class="se-mx-box flex-wrap row-flex mx-Center">
            <img :src="DATA.photo" class="se-mx-ico"/>
            <div class="page flex-wrap col-flex ms-mx-pox">
                <div class="ms-mx-txt">{{DATA.nike}}</div>
                <div class="ms-mx-do">我的卡豆：<i class="v-now">{{DATA.money}}</i></div>
            </div>
        </div>
        <div class="ms-g-box">
            <div class="ms-g-item flex-wrap row-flex ms-g-nobor">
                <div class="ms-gx-lft ico-dou"></div>
                <div class="page ms-g-rit flex-wrap row-flex ms-cell-arrow"
                    @click="jump('/self/buy')">卡豆充值</div>
            </div>
        </div>
        <div class="ms-g-box">
            <div class="ms-g-item flex-wrap row-flex ms-g-nobor">
                <div class="ms-gx-lft ico-notice"></div>
                <div class="page ms-g-rit flex-wrap row-flex ms-cell-arrow" style="position:relative; overflow:visible"
                    @click="jump('/self/notice')">系统消息<i class="new-msgdot" v-show="$store.state.headerStatus"></i></div>
            </div>
        </div>
        <div class="ms-g-box">
            <div class="ms-g-item flex-wrap row-flex ms-g-nobor">
                <div class="ms-gx-lft ico-why"></div>
                <a class="page ms-g-rit flex-wrap row-flex ms-cell-arrow"
                    href="http://a.xiumi.us/stage/v5/36Pll/41269030#/">使用帮助</a>
            </div>
        </div>
    </div>
</template>
<script>
import XHR from '../../api/service'
    export default {
        computed: {
          DATA () {return this.$store.state.USIF}
        },
        created () {
            this.$dialog.loading.open('数据加载中…')
            this.loadingS()
        },
        activated (){
            // this.$dialog.loading.open('数据加载中…')
            this.loadingS()
        },
        methods: {
            loadingS () {
                let self = this
                let json = {}
                XHR.getUSIF(json)
                .then(function (res) {
                    // console.log(res)
                    if (res.data.state == '1') {
                        setTimeout(() => {
                            self.$dialog.loading.close()
                        }, 400)
                        // self.DATA = res.data.body

                        self.$store.commit("setUSIF", res.data.body)
                        
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
    .se-mx-box{background-color: #fff; height: 2.5rem; padding:0 0.3rem;}
    .se-mx-ico{width: 1.7rem; height: 1.7rem; border-radius: 100%; border:0.02rem solid #eee; display: block;}

    .ms-mx-pox{ padding-left: 0.3rem;}
    .ms-mx-txt{padding-bottom: 0.4rem; font-size: 0.34rem; color: #333;}
    .ms-mx-do{font-size: 0.3rem; color: #666;}

    .v-now{font-size: 0.4rem; color: #ff6500; font-weight: 500; padding-right: 0.2rem;}
    .v-now:before{ content: '\e602'; font-family:'iconfont'; margin-right: 0.1rem; color: #ff9800;}

    .new-msgdot{
        position: absolute;
        top: 7px;
        right: -7px;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: red;
    }
</style>
