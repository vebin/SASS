<template>
    <div class="fl-pop-box flex-wrap col-flex">
        <div class="fl-pop-head"
            @click="$emit('hides')">类别</div>
        <div class="page flex-wrap row-flex">
            <ul class="page page-box">
                <li class="fl-pop-txt flpopactive">自卸车</li>
            </ul>
            <ul class="page page-box fl-pop-right">
                <li class="fl-pop-txt flpopactive">自卸车</li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            
        }
    }
</script>

<style lang="less" scoped>
    
</style>
