<template>
    <div class="fl-pop-box flex-wrap col-flex">
        <div class="fl-pop-head"
            @click="$emit('hides')">类别</div>
        <div class="page flex-wrap row-flex PHT">
            <ul class="page page-box">
                <li v-for="em in DATA" 
                class="fl-pop-txt"
                @click="$emit('act',em.sn,em.nm)"
                :class="{'flpopactive':txt == em.sn}">{{em.nm}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            txt: [Number,String]
        },
        computed: {
          DATA () {return this.$store.state.carType}
        }
    }
</script>

<style lang="less" scoped>
    
</style>
