<style lang="less" scoped>
    .more-box{
        height: 60px;
        width: 100%;
        line-height: 60px;
        text-align: center;
        font-size: 15px;
        color: #949494;
    }
    .load-boxs{
            height: 60px;
            box-sizing: border-box;
    }
    .mtop{margin-top:50%;}
</style>
<template>
    <transition name="fade">
        <div v-if="no && show === false" class="more-box mtop">～没有数据～</div>
        <div v-else-if="show ? false : true" 
        class="more-box"
        :class="{ mtop: !top}">～我是有底线滴～</div>
        <div v-else-if="show ? true : false"
        class="loading visible load-boxs"
        :class="{ mtop: !top}">
            <span class="loading-ring"> </span>
        </div>
    </transition>
</template>
<script>
    export default {
        props: {
            show: Boolean,
            no: Boolean,
            top: Boolean
        }
    }
</script>
