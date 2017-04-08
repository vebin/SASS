<template>
    <div class="flex-wrap col-flex">
        <div class="scroll-wrap">
            <div class="ms-g-box">
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">姓名</div>
                    <div class="page ms-g-rit">雷诺</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">联系方式</div>
                    <div class="page flex-wrap row-flex">
                        <div class="page">1232324343</div>
                    </div>
                </div>
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">地区</div>
                    <div class="page ms-g-rit flex-wrap row-flex ms-cell-arrow"
                        @click="showSc = true">{{levelTxt}}</div>
                </div>
            </div>
            <div class="ms-g-box">
                
                <div class="ms-g-item flex-wrap row-flex ms-g-nobor">
                    <div class="ms-g-lft">备注</div>
                    <div class="page">
                        <yd-textarea slot="right" placeholder="请填写备注" maxlength="300"></yd-textarea>
                    </div>
                </div>
            </div>
        </div>
        <div class="ms-g-ftbox flex-wrap row-flex">
            <div class="page ms-btns ms-btn-bk" @click="back">取消</div>
            <div class="page ms-btns" @click="back">保存</div>
        </div>

        <yd-popup v-model="showSc" position="right" width="60%">
            <v-addr @hides="hideSc"></v-addr>
        </yd-popup>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                showSc: false,
                time: '',
                levelTxt: '请选择地区'
            }
        },
        methods: {
            hideSc () { this.showSc = !this.showSc},
            
        }
    }
</script>
<style lang="less" scoped>
.fr-input{
    height: 100%;
    width: 100%;
    background: none;
    border: 0;
}
input[type="datetime-local"]{}
.ms-txt{line-height: 0.4rem; word-wrap:break-word;padding: 0.16rem 0;}
</style>
