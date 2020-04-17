const storage = require("./storage")
/**
 * token 凭证名称
 */
const TOKEN_KEY = "X-Token"
/**
 * 基本的URL
 */
const BASE_URL = "http://206190z0u7.iask.in"

const http = (url, method = "GET", data) => {
  wx.showLoading({
    title: '加载中',
  })
  /**
   * 用Promise封装，异步转同步
   */
  let promise = new Promise(function (resolve, reject) {
    let header = {
      'content-type': 'application/json'
    }
    let token = storage.getToken();
    // 如果有token缓存，加入请求头信息
    if (token) {
      header[TOKEN_KEY] = token;
    }

    wx.request({
      url: BASE_URL + url,
      data: data,
      method: method,
      header: header,
      success(res) {
        let {
          statusCode,
          data
        } = res;
        if (statusCode == "200") {
          let {
            code
          } = data;
          if (code == "2000") {
            resolve(data)
          }
          reject(data)
        }
        reject(res)
      },
      fail(res) {
        reject(res)
      },
      complete(res) {
        wx.hideLoading()
      }
    })
  })
  // 发生异常
  promise.catch(function (error) {
    console.log(error)
    // 没有网络
    if (error.errMsg) {
      wx.navigateTo({
        url: '/pages/error/index'
      })
    }

    // console.log(error)
    let {
      code,
      msg
    } = error;
    // 未登录
    if (code || code == "4015") {
      wx.navigateTo({
        url: '/pages/login/index'
      })
    }
  })
  return promise;
}



module.exports = {
  http
}