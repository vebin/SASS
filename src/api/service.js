import axios from 'axios'
import qs from 'qs'
import API from './api'
import { DEV_URL, PRO_URL, DEBUG } from './config'

var SEID
let hase = window.location.search
if (hase.length > 9) {
  SEID = hase.substring(8,hase.length)
} else {
  SEID = 'bruvkj7ir9wfrpk91rv2f44yd9g2oshe'
}

var config = {
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}

class XHR {
  getWxConfig () {
    return axios.get(API.getWxConfig(),{params:{'openid':SEID}})
  }

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




  isErr (res) {
    if (res.data.status === 0) {
        alert(`${res.data.message}或者登录过期`)
          // return window.location.href = `${DEV_URL}`
          // return window.location.href = `${PRO_URL}`
    } else {
      alert(res.data.message)
    }
  }
  
}

// 实例化后再导出
export default new XHR()





