<template>
    <div class="fl-pop-box flex-wrap col-flex">
        <div class="fl-pop-head"
            @click="$emit('hides')">客户级别</div>
        <ul class="page page-box">
            <li class="fl-pop-txt"
            @click="$emit('act',1,'A 重点')"
            :class="{'flpopactive':txt == '1'}">A 重点</li>
            <li class="fl-pop-txt"
            @click="$emit('act',2,'B 一般')"
            :class="{'flpopactive':txt == '2'}">B 一般</li>
            <li class="fl-pop-txt"
            @click="$emit('act',3,'C 潜在')"
            :class="{'flpopactive':txt == '3'}">C 潜在</li>
            <li class="fl-pop-txt"
            @click="$emit('act',4,'F 战败')"
            :class="{'flpopactive':txt == '4'}">F 战败</li>
            <li class="fl-pop-txt"
            @click="$emit('act',5,'O 成功')"
            :class="{'flpopactive':txt == '5'}">O 成功</li>
        </ul>
    </div>
</template>
<script>
    export default {
        props:{
            txt: Number
        },
    }
</script>

<style lang="less" scoped>
    
</style>
