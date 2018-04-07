//index.js
var commont = require("../../../js/commont.js");

//获取应用实例


var app = getApp()
Page({
  data: {
    region_star: ['北京', '北京市', ''],
    region_to: ['北京', '北京市', ''],
    customItem: '全部',
    car_list: [],
    car_id: 0,
    // car_list:[car_obj,...,...]
    // car_obj:{id:0,from:'',to:'',address:'',photo:'',addtime:''},

    // https://wlgx.com/Api/Car/index
    // id信息编号,
    // from 出发地(可作为搜索条件), 
    // to 目的地(可作为搜索条件), 
    // address详细地址, 
    // photo图片, 
    // addtime发布时间
  },

  onLoad: function () {
    var navigator_time = getApp().globalData.navigator_time
    this.get_data()
  },

  bindRegionChange_star: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region_star: e.detail.value
    })
    this.get_data()
  },

  bindRegionChange_to: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region_to: e.detail.value
    })
    this.get_data()
  },
  // 绑定
  set_car_id: function (e) {
    console.log(e)
    this.data.car_id = e.currentTarget.dataset.carId   //获取点击选项的 car_id
    commont.set_car_id(this, e)
  },
  scrollTop: function () {
    wx.pageScrollTo({
      scrollTop: 0
    })
  },
  get_data: function () {
    var that = this
    var start = this.data.region_star[1]
    var to = this.data.region_to[1]
    wx.request({
      url: 'https://wlgx.com/Api/Car/index',
      formData: { from: start, to: to },
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: (res) => {
        console.log(res.data)
        that.setData({
          car_list : res.data.list.concat()
        })
      },
      complete: () => {

      }
    })
  }

})
