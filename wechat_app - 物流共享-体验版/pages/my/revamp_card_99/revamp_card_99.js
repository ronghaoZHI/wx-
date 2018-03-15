var commont = require("../../../js/commont.js");
var app = getApp()
Page({
  data: {
    region_star: ['北京', '北京', ''],
    region_to: ['北京', '北京', ''],
    region_form: ['', '', ''],
    customItem: '全部',
    files_me: [],
  },

  onLoad: function () {
    var navigator_time = getApp().globalData.navigator_time
  },
  chooseImage_me: function (e) {
    commont.chooseImage_me(this, e)
  },
  bind_deleteImg_me: function (e) {
    commont.bind_deleteImg_me(this, e)
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
