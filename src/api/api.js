
import { HTTP_DEV,HTTPS, DEBUG } from './config'

const HTTP = DEBUG ? HTTP_DEV : HTTPS
class API {
  getWxConfig () {
    return `${HTTP}saleassistant/u/wxjsdkconfig.aspx`
  }
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


// 注册发送验证码
  getRsend () {
    return  `${HTTP}saleassistant/u/rfirst_send.aspx`
  }
// 注册校验验证码
  getRirst () {
    return  `${HTTP}saleassistant/u/rfirst.aspx`
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

  
// 注册校验验证码
//   getCity () {
//     return  `${HTTP}saleassistant/u/rfirst.aspx`
//   }
// // 注册校验验证码
//   getCity () {
//     return  `${HTTP}saleassistant/u/rfirst.aspx`
//   }
// // 注册校验验证码
//   getCity () {
//     return  `${HTTP}saleassistant/u/rfirst.aspx`
//   }
// // 注册校验验证码
//   getCity () {
//     return  `${HTTP}saleassistant/u/rfirst.aspx`
//   }
// // 注册校验验证码
//   getCity () {
//     return  `${HTTP}saleassistant/u/rfirst.aspx`
//   }

}

// 实例化后再导出
export default new API()
