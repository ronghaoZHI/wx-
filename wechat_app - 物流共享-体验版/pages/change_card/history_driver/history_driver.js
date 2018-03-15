

var app = getApp()
Page({
  data: {
    img_li_hd: '../../../images/discovery_index_img4.png'
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
