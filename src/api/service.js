import axios from 'axios'
import qs from 'qs'
import API from './api'
import { DEV_URL, PRO_URL, DEBUG } from './config'

var SEID
let hase = window.location.search
if (hase.length > 9) {
  SEID = hase.substring(8,hase.length)
} else {
  SEID = 'oCAQ0szOUWhNtcyYzATotEFYacEo'
}

var config = {
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
}

class XHR {
  getWxConfig () {
    return axios.get(API.getWxConfig(),{params:{'openid':SEID}})
  }

// 读取文章列表
  getArticleList (json) {
    json.openid = SEID
    return axios.get(API.getArticleList(),{params:json})
  }

  isPublish (json) {
    json.openid = SEID
    return axios.post(API.isPublish(),qs.stringify(json),config)
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





