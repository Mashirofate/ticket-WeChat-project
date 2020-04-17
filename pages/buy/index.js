const activity = require("../../api/activity")
const tickets = require("../../api/ticketing")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activity:Object,
    form:{
      tsRealName:'',
      tsIdentiycard:'',
      phone:''
    },
    disabled:false
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
  /**
   * 提交购买表单
   */
  async bindBuy() {
    this.setData({
      'form.tsVaId':this.data.activity.aId
    })
    await tickets.saveTicketing(this.data.form).then(res=>{
      console.log(res)
      let {code} = res;
      if (code == 2000){
        // 购买成功跳转成功页
        wx.redirectTo({
          url:'/pages/success/index'
        })
      }
    })

  },
  /**
   * 真实姓名改变回调函数
   * @param {}} e 
   */
  tsRealNameChage(e){
    let {value} = e.detail;
    this.setData({
      'form.tsRealName':value
    })
  },
  /**
   * 身份证号码改变回调函数
   * @param {} e 
   */
  tsIdentiycardChage(e){
    let {value} = e.detail;
    this.setData({
      'form.tsIdentiycard':value
    })
  },
  /**
   * 手机号码改变回调函数
   */
  phoneChage(e){
    let {value} = e.detail;
    this.setData({
      'form.phone':value
    })
  }
})