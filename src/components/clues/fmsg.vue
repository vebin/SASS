<template>
    <div class="flex-wrap col-flex">
        <div class="scroll-wrap">
            <div class="ms-g-box">
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">跟进时间</div>
                    <div class="page ms-g-rit">{{DATA.cdatetime}}</div>
                </div>
            <!-- </div>
            <div class="ms-g-box">
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">客户级别</div>
                    <div class="page ms-g-rit">B 一般</div>
                </div> -->
                <div class="ms-g-item flex-wrap row-flex ms-g-nobor">
                    <div class="ms-g-lft">备注</div>
                    <div class="page ms-txt">{{DATA.remark}}</div>
                </div>
            </div>
        </div>
        <div class="ms-g-ftbox flex-wrap row-flex">
            <div class="page ms-btns" @click="back">返回</div>
        </div>
    </div>
</template>
<script>
    export default {
        computed: {
          DATA () {return this.$store.state.myMsg.followup[this.$route.query.id]}
        },
    }
</script>
<style lang="less" scoped>
.ms-txt{line-height: 0.4rem; word-wrap:break-word;padding: 0.16rem 0;}
</style>
