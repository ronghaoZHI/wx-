// pages/blank/blank.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ord99_list:[],
    ord69_list: [],
    ord168_list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var navigator_time = getApp().globalData.navigator_time;
    var id = app.globalData.userInfo.id
    var that = this
    wx.request({
      url: 'https://wlgx.com/Api/User/my_order',
      method:'get',
      data: {
        id: id,
      },
      header: { 'Content-Type': 'application/json' },
      success:function(res){
        that.setData({
          ord99_list: res.data.ord99.concat(),
          ord69_list: res.data.ord69.concat(),
          ord168_list: res.data.ord168.concat()
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