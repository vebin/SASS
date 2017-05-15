<template>
    <div id="app">
        <!-- <v-welcome></v-welcome> -->
        <div class="outter flex-wrap col-flex" :class="{'hideLeft':$route.path.split('/').length>2}">
            <!--门面页 “线索” “联系人” “我的”-->
            <section class="page PHT">
                <keep-alive>
                    <router-view name="default"></router-view>
                </keep-alive>
            </section>
            <!--底部导航 路由 -->
            <!-- <v-nus v-if="$route.path == '/'" txt="操作异常～"></v-nus> -->
            <footer v-if="$route.path !== '/'" class="app-footer">
                <v-nav></v-nav>
            </footer>
        </div>
        <!--其他店内页集合 有过渡效果-->
        <transition name="custom-classes-transition" :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
            <router-view name="subPage" class="sub-page"></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                "pageName": "",
                "routerAnimate": false,
                "enterAnimate": "", //页面进入动效
                "leaveAnimate": "" //页面离开动效
            }
        },
        watch: {
            // 监听 $route 为店内页设置不同的过渡效果
            "$route" (to, from) {
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                // if (toDepth === 2) {
                //     this.$store.commit("setPageName", to.name)
                // }
                //同一级页面无需设置过渡效果
                if (toDepth === fromDepth) {
                    return;
                }
                this.enterAnimate = toDepth > fromDepth ? "animated fadeInRight" : "animated fadeInLeft"
                this.leaveAnimate = toDepth > fromDepth ? "animated fadeOutLeft" : "animated fadeOutRight"
                if (toDepth === 3) {
                    this.leaveAnimate = "animated fadeOutRight"
                }
            }
        }
    }
</script>
<style>
    /*将公用的样式统一在此导入*/
    @import "assets/css/common.css";
    /*阿里 fonticon*/
    @import "assets/css/lib/iconfont.css";
    /*过渡效果需要的动画库*/
    @import "assets/css/lib/animate.css";
</style>
