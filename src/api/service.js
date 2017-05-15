import axios from 'axios'
import qs from 'qs'
import API from './api'
import { DEV_URL, PRO_URL, DEBUG } from './config'

var SEID,SEVC

function QueryStringByName(name){
   var result=window.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"))
   if(result == null || result.length < 0)
     {
        return false
     }
    return result[1]
}


if (QueryStringByName('vc') && !DEBUG) {
  SEVC = QueryStringByName('vc')
} else {
  SEVC = 'va2ejbbtl4ig58u7c9gwsjv575moa87m'
}
if (QueryStringByName('uc') && !DEBUG) {
  SEID = QueryStringByName('uc')
} else {
  SEID = 'va2ejbbtl4ig58u7c9gwsjv575moa87m'
}



var config = {
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}

class XHR {
/*---------------------VC------------------------*/
  getWxConfig (json) {
    json.vc = SEVC
    json.url = window.location.href.split('#')[0]
    return axios.get(API.getWxConfig(),{params:json})
  }

// 注册发送验证码
  getRsend (json) {
    json.vc = SEVC
    return  axios.get(API.getRsend(),{params:json})
  }
// 注册校验验证码
  getRirst (json) {
    json.vc = SEVC
    return  axios.get(API.getRirst(),{params:json})
  }
// 帐号绑定 发送验证码
  getBinds (json) {
    json.vc = SEVC
    return  axios.get(API.getBinds(),{params:json})
  }

// 帐号绑定 校验验证码
  getBindSend (json) {
    json.vc = SEVC
    return  axios.get(API.getBindSend(),{params:json})
  }
// 提交注册信息
  saveRsecond (json) {
    json.vc = SEVC
    return  axios.post(API.saveRsecond(),qs.stringify(json),config)
  }

/*---------------------UC------------------------*/
// 获取省份
  getSF () {
    return  axios.get(API.getSF())
  }
// 获取省市
  getCity () {
    return  axios.get(API.getCity())
  }

// 获取挂车类型
  getCarType () {
    return  axios.get(API.getCarType())
  }

// 固定资产
  getAST () {
    return  axios.all([this.getSF(), this.getCarType(),this.getCity()])
  }

// 线索池列表
  getAllClues (json) {
    json.uc = SEID
    return  axios.get(API.getAllClues(),{params:json})
  }
// 线索池线索详细
  getClueMsg (json) {
    json.uc = SEID
    return  axios.get(API.getClueMsg(),{params:json})
  }
// 购买线索
  getBuy (json) {
    json.uc = SEID
    return  axios.get(API.getBuy(),{params:json})
  }
// 已购线索列表
  getBuyList (json) {
    json.uc = SEID
    return  axios.get(API.getBuyList(),{params:json})
  }
// 已购线索详细
  getListMsg (json) {
    json.uc = SEID
    return  axios.get(API.getListMsg(),{params:json})
  }
// 添加跟进
  getFoll (json) {
    json.uc = SEID
    return  axios.post(API.getFoll(),qs.stringify(json),config)
  }
// 编辑线索
  postClues (json) {
    json.uc = SEID
    return  axios.post(API.postClues(),qs.stringify(json),config)
  }
// 最新售卖列表
  soldList (json) {
    json.uc = SEID
    return  axios.get(API.soldList(),{params:json})
  }
// 新消息提醒
  noticeHot (json) {
    json.uc = SEID
    return  axios.get(API.noticeHot(),{params:json})
  }
// 推荐线索列表
  recommList (json) {
    json.uc = SEID
    return  axios.get(API.recommList(),{params:json})
  }
// 获取最后一条系统消息的主键id
  sysmsgId (json) {
    json.uc = SEID
    return  axios.get(API.sysmsgId(),{params:json})
  }
// 系统消息列表
  sysmsgList (json) {
    json.uc = SEID
    return  axios.get(API.sysmsgList(),{params:json})
  }
// 系统消息详情
  sysmsgMsg (json) {
    json.uc = SEID
    return  axios.get(API.sysmsgMsg(),{params:json})
  }

// 获取卡豆列表
  getBeanList (json) {
    json.uc = SEID
    return  axios.get(API.getBeanList(),{params:json})
  }
// 联系人列表
  getPopList (json) {
    json.uc = SEID
    return  axios.get(API.getPopList(),{params:json})
  }
// 联系人详细
  getPopMsg (json) {
    json.uc = SEID
    return  axios.get(API.getPopMsg(),{params:json})
  }

// 添加/修改联系人资料
  editPop (json) {
    json.uc = SEID
    return  axios.post(API.editPop(),qs.stringify(json),config)
  }

// 获取个人信息
  getUSIF (json) {
    json.uc = SEID
    return  axios.get(API.getUSIF(),{params:json})
  }
// 微信支付接口
  wxPays (json) {
    json.uc = SEID
    return  axios.get(API.wxPays(),{params:json})
  }
// 获取充值记录
  payOrder (json) {
    json.uc = SEID
    return  axios.get(API.payOrder(),{params:json})
  }
// 获取最后一条系统消息
  lastNot (json) {
    json.uc = SEID
    return  axios.get(API.lastNot(),{params:json})
  }
  
  isErr (res,self) {
    if (res.data.errcode == '4001' || res.data.errcode == '4002' || res.data.errcode == '4003') {
        self.jump({path:'/iserr',query:{err:res.data.errcode}})
    }else{
      setTimeout(() => {
          self.$dialog.loading.close()
          self.$dialog.toast({
              mes: res.data.errmsg,
              timeout: 2000,
              icon: 'error'
          })
      }, 400)
    }
  }
}

// 实例化后再导出
export default new XHR()





