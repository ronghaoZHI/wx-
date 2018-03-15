

var app = getApp()
Page({
  data: {
    region: ['北京', '北京市', ''],
    customItem: '全部',
    circular: true,
    vertical: true,
    userInfo: {}
  },

  onLoad: function () {
    var navigator_time = getApp().globalData.navigator_time
  },

  scrollTop: function () {
    wx.pageScrollTo({
      scrollTop: 0
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }
    
})
