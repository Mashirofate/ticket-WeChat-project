const request = require("../utils/request")

const login = (data)=>{
  return request.http("/wechat/user/login","POST",data);
}
const getInfo = ()=>{
  return request.http("/wechat/user/userInfo","GET",null);
}

module.exports = {
  login,
  getInfo
}