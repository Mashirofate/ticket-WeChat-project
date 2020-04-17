const activity = require("../../api/activity")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aid:String,
    activity:Object
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   let {aid} = options;
   activity.getActitityById(aid).then(res=>{
    let {data} = res;
    console.log(data)
    this.setData({
      activity:data
    })
  })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },


  toBy(e){
    let {aid} = e.target.dataset;
    wx.navigateTo({
      url:'/pages/buy/index?aid='+aid
    })
  }

})