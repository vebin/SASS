
import { HTTP_DEV,HTTPS, DEBUG } from './config'

const HTTP = DEBUG ? HTTP_DEV : HTTPS
class API {
  getWxConfig () {
    return  `${HTTP}/api/auth/WX/GetAuthorization`
  }


}

// 实例化后再导出
export default new API()
