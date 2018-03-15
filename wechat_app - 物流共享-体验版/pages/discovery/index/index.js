

var app = getApp()
Page({
  data: {
    region: ['北京', '北京市', ''],
    customItem: '全部',
    imgUrls: [],
    // 是否出现焦点
    indicatorDots_banner: true,
    indicatorDots_new: false,
    // 是否自动播放
    autoplay: true,
    // 自动播放间隔时间
    interval_banner: 3000,
    interval_new: 4000,
    // 滑动动画时间
    duration: 500,
    circular: true,
    vertical: true,
    userInfo: {},
    tab_hd:1
  },

  onLoad: function () {
    //var navigator_time = getApp().globalData.navigator_time
    var that = this;
    wx.request({
      url: 'https://wlgx.com/Api/Index/index1',
      method: 'get',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        // console.log(res.data.ggtop);
        that.setData({ imgUrls: res.data.ggtop })

      },
      fail: function (e) {
        wx.showToast({
          title: '网络异常！err:getsessionkeys',
          duration: 2000
        });
      },
    });
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
  },
  // 拨打电话
  bindPhone: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone
    })
  },
  // 选项卡
  bind_tab_hd: function (e) {
    this.setData({
      tab_hd: e.currentTarget.dataset.tab_hd
    })
  } 
    
})
