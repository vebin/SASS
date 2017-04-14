const mutations = {
    // 线索切换菜单
    clueNav(state, nb) {
        state.clueNav = nb
    },

    ADDRS (state, ac) { state.addrs = ac},
    ALLADDRS (state, ac) { state.allAddrs = ac},
    CARTYPE (state, ac) { state.carType = ac},

    setMyMsg (state, obj) { state.myMsg = obj},

    setMyCrm (state, obj) { state.myCrm = obj},

    setUSIF (state, obj) { state.USIF = obj},


    setUTEL (state, txt) { state.UTEL = txt},



    //设置当前页面名字
    setPageName(state, name) {
        state.currentPageName = name
    },
    
}
export default mutations
