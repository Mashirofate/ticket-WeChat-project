const activity = require("../../api/activity")

Page({
  /**
   * 页面的初始数据
   */
  data: {
    activityList:[]
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.startPullDownRefresh()
    this.getActivityList()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.getActivityList();
  },

  /**
   * 获取启用的活动列表
   */
  async getActivityList(){
     await  activity.actitityList().then(res=>{
      let {data} = res;
      this.setData({
        activityList:data
      })
      wx.stopPullDownRefresh()
    })
  },
  toDetails(e){
    let {aid} = e.currentTarget.dataset;
    wx.navigateTo({
      url:"/pages/details/index?aid=" + aid
    })
  }
})