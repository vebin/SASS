const mutations = {
    // 线索切换菜单
    clueNav(state, nb) {
        state.clueNav = nb
    },
    isBuy(state, nb){
        state.isbuy = nb
    },
    ADDRS (state, ac) { state.addrs = ac},
    ALLADDRS (state, ac) { state.allAddrs = ac},
    CARTYPE (state, ac) { state.carType = ac},

    setMyMsg (state, obj) { state.myMsg = obj},

    setMyCrm (state, obj) { state.myCrm = obj},

    setUSIF (state, obj) { state.USIF = obj},


    setUTEL (state, txt) { state.UTEL = txt},

    setTypeId (state, txt) { state.typeid = txt},
    setPsn (state, txt) { state.psn = txt},

    // 设置当前页面名字
    setPageName(state, name) {
        state.currentPageName = name
    },
    // 是否有新消息
    setDOT (state, txt) { state.newMsgCount = txt},
    isRED (state, txt) { state.headerStatus = txt},
}
export default mutations
