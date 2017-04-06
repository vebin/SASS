<template>
  <div id="wx-header">
    <div class="active">线索池</div>
    <div class="">我的线索</div>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                // 暂且用不到
                chatCount: true
            }
        },
        methods: {
            // 暂且用不到 先留着
            goBack() {
                this.$router.go(-1)
                    //保证返回操作后正确显示页面名称
                    // this.$store.commit("setPageName", this.$store.state.backPageName)
            }
        }
    }
</script>
<style lang="less" scoped>
    #wx-header{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;width:100%;overflow:hidden;height:1rem;background:#fff;font-size:0.33rem;}
    #wx-header div{cursor:pointer;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;-webkit-box-flex:1;-ms-flex-positive:1;-webkit-flex-grow:1;flex-grow:1;text-align:center;line-height:1rem;color: #333;}
    #wx-header .active {color:#0bb908;border-bottom: 0.05rem solid #0bb908;}
</style>
