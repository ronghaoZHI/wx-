// pages/my/enter-system/enter-system.js
var app = new getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      website:'',
      user:'',
      password:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this
    wx.request({
      url: 'https://wlgx.com/Api/Enteruser/login',
      method: "POST",
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: { id: app.globalData.userInfo.id },
      success: function (res) {
        console.log(res.data)
        that.setData({
          website: res.data.array.http,
          password: res.data.array.pwd,
          user: res.data.array.name,
        })
      }
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
  
  }
})