import Vue from 'vue'
import Vuex from 'vuex'

// import * as actions from './actions'
import mutations from "./mutations"


Vue.use(Vuex)

const state = {
    isbuy: false,          // 是否购买成功
    clueNav: 0,         // 切换线索池和我的线索
    typeid:'',          // 线索池列表－筛选挂车类型id
    psn: '',            // 线索池列表－省份区位码

    addrs: [],          // 地址
    allAddrs: [],          // 省市地址
    carType: [],        // 挂车类型

    myMsg:{             // 线索详情
        followup:[],
        tag:[]
    },

    myCrm:{             // 联系人详情
        clueslist:[]
    },

    USIF:{},            // 个人信息

    UTEL:'',            // 用户手机号


    
    currentPageName: "微信", //用于在wx-header组件中显示当前页标题

    newMsgCount: 0, //新消息
    headerStatus: false, //显示（true）/隐藏（false）wx-header组件
    
}
export default new Vuex.Store({
    state,
    mutations
})
