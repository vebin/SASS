<style lang="less" scoped>
	.head-rout {
		text-align: center;
        line-height: 44px;
        font-size: 15px;
	}
    .head-box .active{color: #DA242A; border-bottom: 2px solid #DA242A;}
</style>
<template>
	<header class="flex-wrap row-flex head-box">
		<div class="page head-rout" 
             :class="{ active: table === 1 }"
             @click="actions(1)">跟进中</div>
		<div class="page head-rout" 
             :class="{ active: table === 2 }"
             @click="actions(2)">已成交</div>
        <div class="page head-rout" 
             :class="{ active: table === 3 }"
             @click="actions(3)">已退款</div>
	</header>
</template>
<script>
    export default {
        props: {
            table: {
                type: Number,
                default: 1
            }
        },
        methods: {
            actions (url){
                switch (url) {
                    case 1:
                        return this.$router.push('follow')
                    case 2:
                        return this.$router.push('traded')
                    case 3:
                        return this.$router.push('refund')
                }
            }
        }
    }
</script>
