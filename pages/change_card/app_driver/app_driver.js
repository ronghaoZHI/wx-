var commont = require("../../../js/commont.js");
var app = getApp()
Page({
  data: {
    region_star1: ['北京', '北京', ''],
    region_to1: ['北京', '北京', ''],
    region_star2: ['北京', '北京', ''],
    region_to2: ['北京', '北京', ''],
    region_form: ['', '', ''],
    customItem: '全部',
    files_rz: [],
    popup_book: false,
    popup_my: false,
    mask: false,
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
  // 展示
  chooseImage_show: function (e) {
    commont.chooseImage_show(this, e)
  },
  bind_deleteImg_show: function (e) {
    commont.bind_deleteImg_show(this, e)
  },

  // 认证
  chooseImage_rz: function (e) {
    commont.chooseImage_rz(this, e)
  },
  bind_deleteImg_rz: function (e) {
    commont.bind_deleteImg_rz(this, e)
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

  // 弹窗-同意书
  bind_popup_book: function (e) {
    commont.bind_popup_book(this, e)
  },
  // 弹窗-我的小程序
  bind_popup_my: function (e) {
    commont.bind_popup_my(this, e)
  },
  // 弹窗-我的小程序
  bind_popup_img: function (e) {
    commont.bind_popup_img(this, e)
  },
  // 弹窗-关闭
  bind_popup_close: function (e) {
    commont.bind_popup_close(this, e)
  },

  bindRegionChange_star1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region_star1: e.detail.value
    })
  },

  bindRegionChange_to1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region_to1: e.detail.value
    })
  },
  bindRegionChange_star2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region_star2: e.detail.value
    })
  },

  bindRegionChange_to2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region_to2: e.detail.value
    })
  },
  bindRegionChange_form: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region_form: e.detail.value
    })
  },

  
})
