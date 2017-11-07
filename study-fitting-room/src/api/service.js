import axios from 'axios'
import signature from '../utils/sign'
import queryString2object from '../utils/queryString2object'

// 公共参数
let authorization = JSON.parse(window.sessionStorage.getItem('authorization'))
// console.log('authorization什么时候运行到' + window.sessionStorage.getItem('authorization'))
if (!authorization) {
  console.log('authorization为空')
  let v = '1.0'
  let platform = 'weixin'
  let timestamp = +new Date()
  let query = queryString2object()
  let sign = signature(timestamp, v)
  authorization = {
    v,
    sign,
    platform,
    token: query.token, // token: '1a2059988b294a0d8a24',
    timestamp: timestamp,
    sex: parseInt(query.sex), // sex: 1,
    store_id: parseInt(query.store_id) // store_id: 173688020
  }
  window.sessionStorage.setItem('authorization', JSON.stringify(authorization))
}

// 设置请求公共参数
axios.defaults.timeout = 10000 // 响应时间
axios.defaults.headers.post['Content-Type'] = 'application/json' // 配置请求头
axios.defaults.data = {...JSON.parse(window.sessionStorage.getItem('authorization'))} // 配置接口地址

// 将响应状态和数据取出
function parseResponse (response) {
  // console.log('后台响应返回的数据response.data：' + JSON.stringify(response.data))
  return Promise.all([response.status, response.statusText, response.data])
  // 三个都是fulfilled(已成功），Promise.all结果才是fulfilled
}
// 检查状态
function checkStatus ([status, statusText, data]) {
  if (status >= 200 && status < 300) {
    return data
  } else {
    let error = new Error(statusText)
    error.status = status
    error.error_message = data
    return Promise.reject(error)
    // 等同于 return new Promise((resolve, reject) => reject(error))
  }
}

function handleError (error) {
  console.log('error msg:' + error)
}
export default {
  post (url, params = {}) {
    // console.log(params)
    return axios.post(url, params).then(parseResponse).then(checkStatus).catch(error => handleError(error))
  }
}
