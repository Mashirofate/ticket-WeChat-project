const request = require("../utils/request")

const actitityList = () =>{
  return request.http("/wechat/activity/open","GET",null)
}

const getActitityById = (aid)=>{
  return request.http("/wechat/activity/","GET",{
    aId:aid
  });
}


const save = (data)=>{
  return request.http("/wechat/activity/add","POST",data);
}


module.exports = {
  actitityList,
  getActitityById
}