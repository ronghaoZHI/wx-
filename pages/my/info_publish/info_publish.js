

var app = getApp()
Page({
  data: {
    list:[],  

  },

  onLoad: function () {
    var that = this
    var navigator_time = getApp().globalData.navigator_time
    var id = app.globalData.userInfo.id
    wx.request({
      url: 'https://wlgx.com/Api/User/collect_message',
      method: 'get',
      header: { 'Content-Type': 'application/json' },
      data: {
        id: id,
      },
      success: function (res) {
        console.log(res + "数组数组")
        that.setData({
          list: res.data.demand.concat(),          

        })
      },
      fail: function (e) {
        wx.showToast({
          title: '网络异常！err:getsessionkeys',
          duration: 2000
        });
      },

    });   
  },

  // 拨打电话
  bindPhone: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone
    })
  },
  
})
