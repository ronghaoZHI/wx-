// pages/e-card/cards/cards.js
var commont = require("../../../js/commont.js");
//获取应用实例
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cards1_list:[],
    cards2_list:[],
    

    car_id:0,
//     card,99 card2, 168
//     `name` ‘姓名’,
// ` mobile ` 手机号
//     `person_img` ‘个人形象照’
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var navigator_time = getApp().globalData.navigator_time
    wx.request({
      url: 'https://wlgx.com/Api/Card/allcard?id=' + app.globalData.userInfo.id,
      method:'GET',
      success:function(res){
        console.log(res.data)
        that.setData({
            cards1_list : res.data.card.concat(),
            cards2_list : res.data.card2.concat(),
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
  
  },
  // 绑定
  set_car_id: function (e) {
    console.log(e)
    this.data.car_id = e.currentTarget.dataset.carId   //获取点击选项的 car_id
    commont.set_car_id(this, e)
  },
})