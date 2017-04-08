<template>
    <div class="flex-wrap col-flex">
        <div class="scroll-wrap">
            <div class="ms-g-box">
                <div class="ms-g-item flex-wrap row-flex ms-g-nobor">
                    <div class="ms-g-lft">跟进时间</div>
                    <div class="page ms-g-rit">2017-03-23 23:00:00</div>
                </div>
            </div>
            <div class="ms-g-box">
                <div class="ms-g-item flex-wrap row-flex">
                    <div class="ms-g-lft">客户级别</div>
                    <div class="page ms-g-rit">B 一般</div>
                </div>
                <div class="ms-g-item flex-wrap row-flex ms-g-nobor">
                    <div class="ms-g-lft">备注</div>
                    <div class="page ms-txt">asdsfsdsdsdfsdasdsfsdsdsdfsdsdfsdfsdfsdffdfdfdfdfdfdfdfsdfsdfsdfsdffdfdfdfdfdfdfdf</div>
                </div>
            </div>
        </div>
        <div class="ms-g-ftbox flex-wrap row-flex">
            <div class="page ms-btns" @click="back">返回</div>
        </div>
    </div>
</template>
<script>
    export default {}
</script>
<style lang="less" scoped>
.ms-txt{line-height: 0.4rem; word-wrap:break-word;padding: 0.16rem 0;}
</style>
