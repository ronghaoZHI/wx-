var commont = require("../../../js/commont.js");
var app = getApp()
Page({
  data: {


  },

  onLoad: function () {
    var navigator_time = getApp().globalData.navigator_time
  },
  // 电话号码验证
  bind_validatemobile: function (e) {
    commont.bind_validatemobile(this, e)
  },
})
