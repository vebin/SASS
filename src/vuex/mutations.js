const mutations = {
    // 线索切换菜单
    clueNav(state, nb) {
        state.clueNav = nb
    },
    hideAddr (state, ac) { state.showAddr = ac},
    hideType (state, ac) { state.showType = ac},




    //设置当前页面名字
    setPageName(state, name) {
        state.currentPageName = name
    },
    
}
export default mutations
