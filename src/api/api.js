
import { HTTP_DEV,HTTPS, DEBUG } from './config'

const HTTP = DEBUG ? HTTP_DEV : HTTPS
class API {
  getWxConfig () {
    return `${HTTP}saleassistant/u/wxjsdkconfig.aspx`
  }
// 注册发送验证码
  getRsend () {
    return  `${HTTP}saleassistant/u/rfirst_send.aspx`
  }
// 注册校验验证码
  getRirst () {
    return  `${HTTP}saleassistant/u/rfirst.aspx`
  }
// 帐号绑定 发送验证码
  getBinds () {
    return  `${HTTP}saleassistant/u/u_binding_first.aspx`
  }

// 帐号绑定 校验验证码
  getBindSend () {
    return  `${HTTP}saleassistant/u/u_binding_second.aspx`
  }

// 提交注册信息
  saveRsecond () {
    return  `${HTTP}saleassistant/u/rsecond.aspx`
  }

/*---------------------UC------------------------*/
// 获取省份
  getSF () {
    return  `${HTTP}cm/province.aspx`
  }
// 获取省市
  getCity () {
    return  `${HTTP}cm/citys.aspx`
  }

// 获取挂车类型
  getCarType () {
    return  `${HTTP}cm/trailertypes.aspx`
  }
// 线索池列表
  getAllClues () {
    return  `${HTTP}saleassistant/clues/clues_list.aspx`
  }
// 线索池线索详细
  getClueMsg () {
    return  `${HTTP}saleassistant/clues/clues.aspx`
  }
// 购买线索
  getBuy () {
    return  `${HTTP}saleassistant/clues/buy.aspx`
  }
// 已购线索列表
  getBuyList () {
    return  `${HTTP}saleassistant/clues_u/clues_list.aspx`
  }
// 已购线索详细
  getListMsg () {
    return  `${HTTP}saleassistant/clues_u/clues.aspx`
  }
// 添加跟进
  getFoll () {
    return  `${HTTP}saleassistant/clues_u/followup.aspx`
  }
// 编辑线索
  postClues () {
    return  `${HTTP}saleassistant/clues_u/clues_edit.aspx`
  }
// 最新售卖列表
  soldList () {
    return  `${HTTP}saleassistant/clues/lastbuy/clues_list.aspx`
  }
// 新消息提醒
  noticeHot () {
    return  `${HTTP}saleassistant/clues/lastbuy/clues_last.aspx`
  }
// 获取最后一条系统消息的主键id
  sysmsgId () {
    return  `${HTTP}saleassistant/u/sysmsg/lastid.aspx`
  }
// 系统消息列表
  sysmsgList () {
    return  `${HTTP}saleassistant/u/sysmsg/msglist.aspx`
  }
// 系统消息详情
  sysmsgMsg () {
    return  `${HTTP}saleassistant/u/sysmsg/msgdetail.aspx`
  }
// 推荐线索列表
  recommList () {
    return  `${HTTP}saleassistant/clues/recommend.aspx`
  }



// 获取卡豆列表
  getBeanList () {
    return  `${HTTP}saleassistant/u/bean_list.aspx`
  }
// 联系人列表
  getPopList () {
    return  `${HTTP}saleassistant/contacts/contacts_list.aspx`
  }
// 联系人详细
  getPopMsg () {
    return  `${HTTP}saleassistant/contacts/contacts.aspx`
  }
// 添加/修改联系人资料
  editPop () {
    return  `${HTTP}saleassistant/contacts/contacts_edit.aspx`
  }

// 获取个人信息
  getUSIF () {
    return  `${HTTP}saleassistant/u/u.aspx`
  }

// 微信支付接口
  wxPays () {
    return  `${HTTP}saleassistant/u/wxpay/wxpayconfig.aspx`
  }

// 获取充值记录
  payOrder () {
    return  `${HTTP}saleassistant/u/payorder.aspx`
  }
// 获取最后一条系统消息
  lastNot () {
    return  `${HTTP}saleassistant/u/sysmsg/lastid.aspx`
  }
}

// 实例化后再导出
export default new API()
