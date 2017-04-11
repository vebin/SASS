import Vue from 'vue'
import Vuex from 'vuex'


import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

Vue.use(Vuex)

const state = {
    clueNav: 0,         // 切换线索池和我的线索
    

    addrs: [],          // 地址
    allAddrs: [],          // 省市地址
    carType: [],        // 挂车类型

    myMsg:{
        followup:[]
    },



    newMsgCount: 0, //新消息数量
    currentPageName: "微信", //用于在wx-header组件中显示当前页标题
    headerStatus: true, //显示（true）/隐藏（false）wx-header组件
    
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
