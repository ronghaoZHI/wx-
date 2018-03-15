var commont = require("../../../js/commont.js");
var app = getApp()
Page({
  data: {
    region_star: ['北京', '北京市', ''],
    region_to: ['北京', '北京市', ''],
    customItem: '全部'
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  onLoad: function () {
    var navigator_time = getApp().globalData.navigator_time
  },

  bindRegionChange_star: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region_star: e.detail.value
    })
  },

  bindRegionChange_to: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region_to: e.detail.value
    })
  },

  scrollTop: function () {
    wx.pageScrollTo({
      scrollTop: 0
    })
  },
  // 拨打电话
  bind_phone: function (e) {
    commont.bind_phone(this, e)
  },
  // 导航
  bind_getlocation: function (e) {
    commont.bind_getlocation(this, e)
  },
  // 收藏
  bind_love: function (e) {
    commont.bind_love(this, e)
  },
})
