import Vue from 'vue'
import Vuex from 'vuex'


import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

Vue.use(Vuex)

const state = {
    clueNav: 0,
    newMsgCount: 0, //新消息数量
    allContacts: [{
        "wxid": "wxid_baiqian",
        "initial": 'b',
        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/baiqian.jpg",
        "nickname": "白浅",
        "sex": 0,
        "remark": "",
        "signature": "青丘女帝，天族天妃",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian01.jpeg",
            date: 182625262
        }, {
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg",
            date: 182625262
        }],
        "area": ["青丘", "狐狸洞"],
        "from": "通过扫一扫",
        "tag": "女帝",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    }], //所有联系人
    OfficialAccounts: [{
                        wxid: "Google_Developers",
                        name: "谷歌开发者",
                        headerUrl: "http://cdn.sinacloud.net/vue-wechat/images/OfficialAccount/google-dev.JPG",
                        desc: "",
                        owner: "谷歌信息技术有限公司",
                        initial: "G"
                    }], //所有关注的公众号
    currentPageName: "微信", //用于在wx-header组件中显示当前页标题
    headerStatus: true, //显示（true）/隐藏（false）wx-header组件
    tipsStatus: false, //控制首页右上角菜单的显示(true)/隐藏(false)

    msgList: {
        stickMsg: [], //置顶消息列表 后期需要
        baseMsg: [{ //普通消息列表
                "mid": 1, //消息的id 唯一标识，重要
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": true, //true；已读 false：未读
                "newMsgCount": 1,
                "quiet": false, // true：消息免打扰 false：提示此好友/群的新消息
                "msg": [{ //对话框的聊天记录 新消息 push 进
                    "text": "点击这些白色框消息，唤醒消息操作菜单，点击这些白色框消息，唤醒消息操作菜单",
                    "date": 1488117964495,
                    "name": "阿荡",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
                }, {
                    "text": '点击空白处，操作菜单消失',
                    "date": 1488117964495,
                    "name": "阿荡",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
                }, {
                    "text": '来呀 快活啊',
                    "date": 1488117964495,
                    "name": "阿荡",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
                }],
                "user": [] // 此消息的用户数组 长度为1则为私聊 长度大于1则为群聊
            }
        ]
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
