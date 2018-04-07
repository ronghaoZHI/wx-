// pages/publish/car-list/car-list.js

var commont = require("../../../js/commont.js");
var app = getApp()
Page({
  data: {
    region: ['北京', '北京市', ''],
    customItem: '全部',
    imgUrls: [
      {
        link: '/pages/index/index',
        url: '../../images/index_banner.jpg'
      }, {
        link: '/pages/logs/logs',
        url: '../../images/index_banner.jpg'
      }, {
        link: '/pages/test/test',
        url: '../../images/index_banner.jpg'
      }
    ],
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
    new_list: [],
    car_id: 0,
    // https://wlgx.com/Api/Cargo/new_list
    // new_list
    // 数据:id信息编号, from出发地, to目的地, addtime发布时间, photo图片, address详细地址
  },

  onLoad: function () {
    var that = this
    var navigator_time = getApp().globalData.navigator_time
    wx.request({
      url: 'https://wlgx.com/Api/Car/new_list',
      success: (res) => {
        console.log(res.data)
        that.setData({
          new_list: res.data.new_list.concat()
        })
        console.log(this.data.new_list)
      },
      complete: () => {
      }
    })
  },

  scrollTop: function () {
    wx.pageScrollTo({
      scrollTop: 0
    })
  },
  set_car_id: function (e) {
    console.log(e)
    this.data.car_id = e.currentTarget.dataset.carId
    commont.car_id(this, e)
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }
})
