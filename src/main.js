import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes/routes'

// import {ActionSheet} from 'vue-ydui/dist/lib.rem/actionsheet'
// Vue.component(ActionSheet.name, ActionSheet)

import components from './components/' //加载公共组件


import 'vue-ydui/dist/ydui.base.css'
import './css/common.css'


Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    Vue.component(`v${name}`, components[key])
})

Vue.use(VueRouter)



const router = new VueRouter({
    routes
})

router.beforeEach(({meta, path}, from, next) => {
    // document.title = meta.pageTitle   // 动态更新页面标题
    next()
})

new Vue({ router }).$mount('#app')

