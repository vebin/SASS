<template>
    <div class="page flex-wrap col-flex midCenter PHT">
        <div class="nul-icos"></div>
        <div class="nul-txt">{{txt}}</div>
    </div>
</template>
<script>
    export default {
        props:{
            txt:{
                type: String,
                default: '您还没有添加联系人～'
            }
        }
    }
</script>
<style lang="less" scoped>
.nul-icos:before{content: '\e619'; font-family:'iconfont'; color: #c1c1c1; font-size: 1.4rem;}
.nul-txt{ font-size: 0.32rem; color: #c1c1c1;margin-top: 0.2rem; font-weight: 500;}
</style>
