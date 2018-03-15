

var app = getApp()
Page({
  data: {
    img_go_1: '../../../images/icon_change_logistics_0.png',
    img_go_2: '../../../images/icon_change_driver_0.png',
    img_go_3: '../../../images/icon_change_merchant_0.png',
  },

  onLoad: function () {
    var navigator_time = getApp().globalData.navigator_time
  },

  // 拨打电话
  bindPhone: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone
    })
  },
  go_1: function () {
    this.setData({
      img_go_1: '../../../images/icon_change_logistics_1.png',
    })
  },
  out_1: function () {
    this.setData({
      img_go_1: '../../../images/icon_change_logistics_0.png',
    })
  },

  go_2: function () {
    this.setData({
      img_go_2: '../../../images/icon_change_driver_1.png',
    })
  },
  out_2: function () {
    this.setData({
      img_go_2: '../../../images/icon_change_driver_0.png',
    })
  },
  go_3: function () {
    this.setData({
      img_go_3: '../../../images/icon_change_merchant_1.png',
    })
  },
  out_3: function () {
    this.setData({
      img_go_3: '../../../images/icon_change_merchant_0.png',
    })
  }

})
