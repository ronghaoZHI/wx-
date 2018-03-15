var commont = require("../../../js/commont.js");
var app = getApp()
Page({
  data: {
    region_star: ['北京', '北京', ''],
    region_to: ['北京', '北京', ''],
    region_form: ['', '', ''],
    customItem: '全部',
    files_show: []

  },

  onLoad: function () {
    var navigator_time = getApp().globalData.navigator_time
  },

  // 展示
  chooseImage_show: function (e) {
    commont.chooseImage_show(this, e)
  },
  bind_deleteImg_show: function (e) {
    commont.bind_deleteImg_show(this, e)
  },

  bindRegionChange_star: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region_star: e.detail.value
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

})
