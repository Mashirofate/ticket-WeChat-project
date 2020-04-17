/**
 * 缓存 KEY
 */
const TOKEN_KEY = "TOKEN-KEY"

/**
 * token 放入缓存
 * @param {} value 
 */
const setToken = (value)=>{
  wx.setStorage({
    key: TOKEN_KEY,
    data:value
  })
}

/**
 * 获取token信息
 */
const getToken = ()=>{
  return wx.getStorageSync(TOKEN_KEY)
}

/**
 * 清除所有缓存
 */
const removeToken = ()=>{
  wx.removeStorageSync(TOKEN_KEY)
}

module.exports = {
  setToken,
  getToken,
  removeToken
}