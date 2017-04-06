<template>
  <div id="wx-nav">
	<nav>
        <router-link to="/clue" tag="dl" exact>
            <dt class="ffm ico-xs">
                <i class="new-msg-count" v-show="$store.state.newMsgCount">{{$store.state.newMsgCount}}</i>
            </dt>
            <dd>线索</dd>
        </router-link>
		<router-link to="/crm" tag="dl">
            <dt class="ffm ico-crm" >
                <!-- <i class="new-msg-count">2</i> -->
            </dt>
            <dd>联系人</dd>
        </router-link>

		<router-link to="/self" tag="dl">
            <dt class="ffm ico-me">
                <!-- <i class="new-msg-dot"></i> -->
            </dt>
            <dd>我的</dd>
        </router-link>
    </nav>
  </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        mounted() {
            for (var i in this.$store.state.msgList.baseMsg) {
                if (this.$store.state.msgList.baseMsg[i].read === false && this.$store.state.msgList.baseMsg[i].quiet === false) {
                    this.$store.commit('addNewMsg')
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    #wx-nav nav{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;width:100%;overflow:hidden;height:1rem;padding-top:0.12rem;background:#fff;font-size:0.3rem;}
    #wx-nav nav dl{cursor:pointer;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;-webkit-box-flex:1;-ms-flex-positive:1;-webkit-flex-grow:1;flex-grow:1;text-align:center;line-height:1}
    #wx-nav nav dl.router-link-active dd,#wx-nav nav dl.router-link-active dt{color:#0bb908}
    #wx-nav nav dt{position:relative;width:0.50rem;height:0.50rem;margin:0 auto;font-size:0.50rem;color:#888;margin-bottom:0.06rem;}
    #wx-nav nav dd{color:#888;-webkit-transform-origin:50% 0;-ms-transform-origin:50% 0;transform-origin:50% 0;-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9)}
</style>
