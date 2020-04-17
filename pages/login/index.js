const user = require("../../api/user")
const storage = require("../../utils/storage")
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getUserInfo(e) {
    console.log(e)
    let {
      nickName,
      avatarUrl
    } = JSON.parse(e.detail.rawData);
    wx.login({
      success(res) {
        let {
          code
        } = res;
        let form = {};
        form.wcNick = nickName;
        form.wAvatarUrl = avatarUrl;
        form.code = code;
        user.login(form).then(res => {
          storage.setToken(res.data.token)
          wx.navigateBack({
            delta: 0
          })
        })
      },
      fail(res) {
        console.log("调用失败")
      }
    })
  }
})