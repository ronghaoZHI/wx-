

var app = getApp()
Page({
  data: {
    
  },

  onLoad: function () {
    var navigator_time = getApp().globalData.navigator_time
  },

  // 拨打电话
  bindPhone: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone
    })
  }
    
})
