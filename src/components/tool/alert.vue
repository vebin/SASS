<style lang="less" scoped>
    .alert-box{
        min-height: 25px;
        width: 100%;
        box-sizing:border-box;
        padding: 6px 15px;
        background: rgba(247,0,0,.7);
        color: #fff;
        font-size: 15px;
        text-align:center;
        line-height: 25px;
        position: absolute;
        top: 0;
        left: 0;
        -webkit-transform: translateZ(0);
    }
</style>
<template>
    <transition name="alert-fade">
       <div v-if="show" class="alert-box">{{txt}}</div>
    </transition>
</template>
<script>
    export default {
        props: {
            show: Boolean,
            txt: String
        }
    }
</script>
