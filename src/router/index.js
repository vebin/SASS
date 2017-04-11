import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
    //app整体由店面页和店内页组成 暂时并没有用到嵌套路由
const routes = [
    {
        path: '/',
        component: resolve => require(["../components/common/welcome.vue"], resolve)
    },
    {
        path: '/m/app/welcome',
        components: { 
            "subPage": resolve => require(["../components/login/index.vue"], resolve)
        }
    },
    {
        path: '/m/app/login',
        components: {
            "subPage": resolve => require(["../components/login/login.vue"], resolve)
        }
    },
    {
        path: '/m/app/step1',
        components: {
            "subPage": resolve => require(["../components/login/step1.vue"], resolve)
        }
    },
    {
        path: '/m/app/step2',
        components: {
            "subPage": resolve => require(["../components/login/step2.vue"], resolve)
        }
    },
    {
        path: '/m/app/step3',
        components: {
            "subPage": resolve => require(["../components/login/step3.vue"], resolve)
        }
    },
    {
        path: '/isok',
        components: { 
            "subPage": resolve => require(["../components/isok.vue"], resolve)
        }
    },


    {
        path: '/clue',
        name: "",
        component: resolve => require(["../components/items.vue"], resolve)
    },
    {
        path: '/clue/buy',
        name: "",
        components: {
            "default": resolve => require(["../components/items.vue"], resolve),
            "subPage": resolve => require(["../components/clues/msg.vue"], resolve)
        }
    },
    {
        path: '/clue/msg',
        name: "",
        components: {
            "default": resolve => require(["../components/items.vue"], resolve),
            "subPage": resolve => require(["../components/clues/mymsg.vue"], resolve)
        }
    },
    {
        path: '/clue/msg/fmsg',
        components: { 
            "subPage": resolve => require(["../components/clues/fmsg.vue"], resolve)
        }
    },
    {
        path: '/clue/msg/fm',
        components: { 
            "subPage": resolve => require(["../components/clues/fm.vue"], resolve)
        }
    },
    {
        path: '/clue/msg/form',
        components: { 
            "subPage": resolve => require(["../components/clues/form.vue"], resolve)
        }
    }, 



    {
        path: '/crm',
        name: "",
        component: resolve => require(["../components/crm/index.vue"], resolve)
    },
    {
        path: '/crm/msg',
        name: "",
        components: {
            "default": resolve => require(["../components/crm/index.vue"], resolve),
            "subPage": resolve => require(["../components/crm/msg.vue"], resolve)
        }
    },
    {
        path: '/crm/msg/form',
        components: { 
            "subPage": resolve => require(["../components/crm/form.vue"], resolve)
        }
    }, 



    {
        path: '/self',
        name: "",
        component: resolve => require(["../components/self/index.vue"], resolve)
    },
    {
        path: '/self/buy',
        name: "",
        components: {
            "default": resolve => require(["../components/self/index.vue"], resolve),
            "subPage": resolve => require(["../components/self/buy.vue"], resolve)
        }
    },
    {
        path: '/self/buy/record',
        components: { 
            "subPage": resolve => require(["../components/self/items.vue"], resolve)
        }
    }, 

]
export default new Router({
    base: "/",
    routes,
    // scrollBehavior(to, from, savedPosition) {
    //     if (savedPosition) {
    //         return savedPosition
    //     } else {
    //         return { x: 0, y: 0 }
    //     }
    // }

})
