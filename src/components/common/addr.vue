<template>
    <div class="fl-pop-box flex-wrap col-flex">
        <div class="fl-pop-head"
            @click="$emit('hides')">地区</div>
        <ul class="scroll-wrap page-box">
            <li v-for="em in DATA" 
                class="fl-pop-txt"
                @click="onAdd(em.sn)"
                :class="isArray(em.sn)">{{em.nm}}</li>
        </ul>
        <div class="ms-g-ftbox flex-wrap row-flex">
            <div class="page ms-btns ms-btn-bk" @click="onNull">重置</div>
            <div class="page ms-btns"
                @click="onSH">确定</div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                txt:[]
            }
        },
        created () {
            this.txt = this.$store.state.psn.length > 0 ? this.$store.state.psn.split(',') : []
        },
        computed: {
          DATA () {return this.$store.state.addrs}
        },
        methods:{
            isTrue(id,obj){
              for (let i in obj) {
                if (obj[i] == id) return i
              }
              return false
            },
            isArray(id){
              let tt = this.txt.join(",")
                return tt.indexOf(id) !== -1 ? 'flpopactive' : ''
            },
            onAdd(id){
                if(this.isTrue(id,this.txt)){
                    this.txt.splice(this.isTrue(id,this.txt),1)
                } else {
                    this.txt.push(id)
                }
            },
            onSH(){
                this.$store.commit("setPsn", this.txt.join(","))
                this.$emit('act')
            },
            onNull(){
                this.txt = []
            }
        }
    }
</script>

<style lang="less" scoped>
    .page-box{padding-bottom: 40px;}
    .ms-btn-bk{background-color: #f5f5f5; color: #666;}
</style>
