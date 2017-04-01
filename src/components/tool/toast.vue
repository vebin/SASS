<style lang="less" scoped>
	.toast-box{
		min-height: 25px;
        width: 160px;
        padding: 4px 10px;
        background: rgba(0,0,0,.7);
        color: #fff;
        font-size: 15px;
        text-align:center;
        line-height: 25px;
        position: absolute;
        bottom: 120px;
        left: 50%;
        border-radius: 5px;
        margin-left: -80px;
        -webkit-transform: translateZ(0);
	}
</style>
<template>
    <transition name="fade">
	   <div v-if="show" class="toast-box">{{txt}}</div>
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
