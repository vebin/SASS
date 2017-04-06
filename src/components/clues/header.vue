<template>
  <div id="wx-header">
    <div :class="{'active': clueNav == '0'}"
    @click="navs(0)">线索池</div>
    <div :class="{'active': clueNav == '1'}"
    @click="navs(1)">我的线索</div>
  </div>
</template>
<script>
    export default {
        computed: {
          clueNav () {return this.$store.state.clueNav}
        },
        methods: {
            navs (nb) {
                this.$store.commit("clueNav", nb)
            }
        }
    }
</script>
<style lang="less" scoped>
    #wx-header{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;width:100%;overflow:hidden;height:1rem;background:#fff;font-size:0.33rem;}
    #wx-header div{cursor:pointer;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;-webkit-box-flex:1;-ms-flex-positive:1;-webkit-flex-grow:1;flex-grow:1;text-align:center;line-height:1rem;color: #333;}
    #wx-header .active {color:#0bb908;border-bottom: 0.05rem solid #0bb908;}
</style>

<!-- 新的写法```局部 -->
<!-- <div id="wx-header">
    <div :class="{'active': $route.query.nav == '0'}"
    @click="jump({path:'clues',query:{nav:'0'}})">线索池</div>
    <div :class="{'active': $route.query.nav == '1'}"
    @click="jump({path:'clues',query:{nav:'1'}})">我的线索</div>
  </div> -->
