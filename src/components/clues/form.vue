<template>
    <div class="flex-wrap col-flex">
        <div class="scroll-wrap">
            <div class="ms-g-box">
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">类别</div>
                    <div class="page ms-g-rit flex-wrap row-flex ms-cell-arrow"
                        @click="showType = true">q</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">品牌</div>
                    <div class="page ms-g-rit flex-wrap row-flex ms-cell-arrow">雷诺</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">系列</div>
                    <div class="page ms-g-rit flex-wrap row-flex ms-cell-arrow">雷诺</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex ms-g-nobor">
                    <div class="ms-g-lft">意向车型</div>
                    <div class="page ms-g-rit flex-wrap row-flex ms-cell-arrow">雷诺 Premium系列重卡 380马力 </div>
                </div>
            </div>
            <div class="ms-g-box">
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">姓名</div>
                    <div class="page ms-g-rit">雷诺</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">联系方式</div>
                    <div class="page flex-wrap row-flex">
                        <div class="page">1232324343</div>
                        <div class="v-now"></div>
                    </div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">提车地区</div>
                    <div class="page ms-g-rit flex-wrap row-flex ms-cell-arrow"
                        @click="showAddr = true">新疆 xxxx</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">标签</div>
                    <div class="page ms-g-rit">二手车</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">客户级别</div>
                    <div class="page ms-g-rit">B 一般</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex ms-g-nobor">
                    <div class="ms-g-lft">备注</div>
                    <div class="page ms-txt">
                        <yd-textarea slot="right" placeholder="请填写备注" maxlength="300"></yd-textarea>
                    </div>
                </div>
            </div>
            <div class="ms-g-box">
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">线索来源</div>
                    <div class="page ms-g-rit">卡车之家</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex ms-g-nobor">
                    <div class="ms-g-lft">询价时间</div>
                    <div class="page ms-g-rit">2017-03-26 </div>
                </div>
            </div>
        </div>
        <div class="ms-g-ftbox flex-wrap row-flex">
            <div class="page ms-btns ms-btn-bk" @click="back">取消</div>
            <div class="page ms-btns" 
            @click="back">保存</div>
        </div>
        <yd-popup v-model="showAddr" position="right" width="60%">
            <v-addr @hides="hideAddr"></v-addr>
        </yd-popup>
        <yd-popup v-model="showType" position="right" width="80%">
            <v-cartype @hides="hideType"></v-cartype>
        </yd-popup>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                showAddr: false,
                showType: false,
                
            }
        },
        methods: {
            hideAddr () { this.showAddr = !this.showAddr},
            hideType () { this.showType = !this.showType},
            
        }
    }
</script>
<style lang="less" scoped>
.v-now{font-size: 0.36rem; color: #ff6500; padding-left: 0.4rem;}
.v-now:before{ content: '\e622'; font-family:'iconfont'; color: #0bb908; font-weight: bold;}

.ms-txt{line-height: 0.4rem; word-wrap:break-word;padding: 0.16rem 0;}

</style>
