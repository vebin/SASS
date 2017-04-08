<template>
    <div class="fl-pop-box flex-wrap col-flex">
        <div class="fl-pop-head"
            @click="$emit('hides')">筛选菜单</div>
        <div class="page page-box">
            <div class="sn-title">客户级别</div>
            <div class="sn-fl-box flex-wrap row-flex">
                <div class="sn-item snactive">A 重点</div>
                <div class="sn-item">A 重点</div>
                <div class="sn-item">A 重点</div>
                <div class="sn-item">A 重点</div>
                <div class="sn-item">A 重点</div>
            </div>
            <div class="sn-title">线索来源</div>
            <div class="sn-fl-box flex-wrap row-flex">
                <div class="sn-item snactive">卡车之家</div>
                <div class="sn-item">A 重点</div>
            </div>
        </div>
        <div class="fl-btns flex-wrap row-flex">
            <div class="page">重置</div>
            <div class="page fl-btn-rt">确定</div>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>

<style lang="less" scoped>
    .fl-btns{ height: 0.9rem;line-height: 0.9rem; font-size: 0.28rem; color: #333; text-align: center;background-color: #eee;}
    .fl-btn-rt{ background-color:#00b800;color: #fff; }
    .sn-title{font-size: 0.3rem;padding-left: 0.3rem; height: 0.8rem;line-height: 0.8rem;color: #333;}
    .sn-fl-box{padding-left: 0.3rem; border-bottom: 0.02rem solid #eee;}
    .sn-item{width: 30%; height: 0.5rem; line-height: 0.5rem; text-align: center;font-size: 0.26rem; color: #333;border:0.02rem solid #666; border-radius: 4px; margin-right: 2.4%; margin-bottom: 0.16rem;overflow: hidden; text-overflow:ellipsis; white-space: nowrap;}


    .snactive{border-color: #00b800; color: #fff; background-color: #00b800;}
</style>
