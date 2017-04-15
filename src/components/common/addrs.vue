<template>
    <div class="fl-pop-box flex-wrap col-flex">
        <div class="fl-pop-head"
            @click="$emit('hides')">地区</div>
        <div class="page flex-wrap row-flex PHT">
            <ul class="scroll-wrap">
                <li v-for="em in DATA" 
                    class="fl-pop-txt"
                    @click="prA(em.cs,em.sn,em.nm)"
                    :class="{'flpopactive': pr == em.sn}">{{em.nm}}</li>
            </ul>
            <ul v-if="SALL.length>0" class="scroll-wrap fl-pop-right">
                <li v-for="em in SALL"
                    class="fl-pop-txt"
                    @click="ciA(em.sn,em.nm)"
                    :class="{'flpopactive':ci == em.sn}">{{em.nm}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                SALL: [],
                prnm:'',
            }
        },
        props:{
            pr: String,
            ci: String,
        },
        computed: {
          DATA () {return this.$store.state.allAddrs}
        },
        methods: {
            prA (obj,id,nm){
                this.SALL = obj
                this.prnm = nm
                this.$emit('prs',id)
            },
            ciA (id,nm){
                let txt = `${this.prnm} ${nm}`
                this.$emit('act',id,txt)
            }
        }
    }
</script>

<style lang="less" scoped>
    
</style>
