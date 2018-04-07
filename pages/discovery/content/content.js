var commont = require("../../../js/commont.js")

var app = getApp()
Page({
  data: {
    goods_id:0,
    pub: {},

    // id编号, img发布人头像, person发布人, address详细地址, content信息详情, photo发布图片, addtime发布时间
  },

  onLoad: function () {
    var that = this
    this.get_goods_id()
    var navigator_time = getApp().globalData.navigator_time
    wx.request({
      url: 'https://wlgx.com/Api/Find/detail?id=' +that.data.goods_id,
      method: 'get',
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.log(res.data)
        that.setData({
          pub:res.data.info
        })
      }
      })
  },

  // 拨打电话
  bindPhone: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone
    })
  },
  get_goods_id: function (e) {
    commont.get_goods_id(this, e)
  }
    
})