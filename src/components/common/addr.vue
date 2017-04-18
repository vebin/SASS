<template>
    <div class="fl-pop-box flex-wrap col-flex">
        <div class="fl-pop-head"
            @click="$emit('hides')">地区</div>
        <ul class="scroll-wrap page-box">
            <li v-for="em in DATA" 
                class="fl-pop-txt"
                @click="$emit('act',em.sn)"
                :class="{'flpopactive':txt == em.sn}">{{em.nm}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        props:{
            txt: Number
        },
        computed: {
          DATA () {return this.$store.state.addrs}
        }
    }
</script>

<style lang="less" scoped>
    
</style>
