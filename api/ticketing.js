const request = require("../utils/request")

const saveTicketing = (data)=>{
  return request.http("/wechat/ts/add","POST",data);
}

const getTicketingList = (data)=>{
  return request.http("/wechat/ts/byWid","GET",null);
}

module.exports = {
  saveTicketing,
  getTicketingList
}