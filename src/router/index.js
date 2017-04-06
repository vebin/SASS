import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
    //app整体由店面页和店内页组成 暂时并没有用到嵌套路由
const routes = [{
        path: '/',
        name: "微信",
        component: resolve => require(["../components/common/welcome.vue"], resolve)
    }, 
    {
        path: '/clue',
        name: "",
        component: resolve => require(["../components/items.vue"], resolve)
    },
    // {
    //     path: '/crm',
    //     name: "",
    //     component: resolve => require(["../components/lists/wechat.vue"], resolve)
    // },{
    //     path: '/wechat/dialogue',
    //     name: "",
    //     components: {
    //         "default": resolve => require(["../components/lists/wechat.vue"], resolve),
    //         "subPage": resolve => require(["../components/lists/dialogue.vue"], resolve)
    //     }
    // }

]
export default new Router({
    base: "/clue",
    routes,
    // scrollBehavior(to, from, savedPosition) {
    //     if (savedPosition) {
    //         return savedPosition
    //     } else {
    //         return { x: 0, y: 0 }
    //     }
    // }

})
