var commont = require("../../../js/commont.js");
var app = getApp()
Page({
  data: {
    region_star: ['北京', '北京', ''],
    region_to: ['北京', '北京', ''],
    region_form: ['', '', ''],
    customItem: '全部',
    car: ["挂车", "低底盘", "单桥车", "棉被车", "双桥车", "高栏车", "保温车", "罐车"],
    carIndex: 0,
    carLength: ["4.2m", "6.8m", "9.6m", "5.2m", "7.2m车", "6.2m", "8.8m", "10.2m"],
    carLengthIndex: 0,
  },
  //车型
  bindcar: function (e) {
    this.setData({
      carIndex: e.detail.value
    })
  },
  //车长
  bindcarLength: function (e) {
    this.setData({
      carLengthIndex: e.detail.value
    })
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

  bindRegionChange_form: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region_form: e.detail.value
    })
  },
  // 手机号码验证
  bind_validatemobile: function (e) {
    commont.bind_validatemobile(this, e)
  },
  // 电话号码验证
  bind_checkTel: function (e) {
    commont.bind_checkTel(this, e)
  },
  // 邮箱验证
  bind_isEmail: function (e) {
    commont.bind_isEmail(this, e)
  },
  // QQ验证
  bind_isQQ: function (e) {
    commont.bind_isQQ(this, e)
  },
})
