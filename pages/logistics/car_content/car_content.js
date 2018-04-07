//index.js
var commont = require("../../../js/commont.js");

//获取应用实例


var app = getApp()
Page({
  data: {
    car_id: 0,
    // content: '',
    person: '',
    phone: '',
    addtime: '',

    carLong: '',
    carLongIndex: 0,
    carClass: '',
    carClassIndex: 0,
    goodsNum: 0,
    unitsNum: '',
    unitsNumIndex: 0,
    goodsClass: '',
    goodsClassIndex: 0,
    info: '',
    infoIndex: 0,
    carLong_d: '',
    carClass_d: '',
    unitsNum_d: '',
    goodsClass_d: '',
    info_d: '',
    // https://wlgx.com/Api/Car/detail
    // id信息编号, 
    // content 信息详情, 
    // person 发布人, 
    // phone 手机号, 
    // addtime 发布时间
  },

  onLoad: function () {
    var that = this
    var navigator_time = getApp().globalData.navigator_time
    wx.request({
      url: 'https://wlgx.com/Api/Car/release',

      success: (res) => {
        console.log(res.data)
        var carLong = ['车长']
        var carClass = ['车型']
        //  var goodsNum = ['货量']
        var unitsNum = ["单位"]
        var goodsClass = ["货型"]
        var info = ["请选择"]
        this .objarr_copyto_arr(res.data.carlength, carLong)
        this .objarr_copyto_arr(res.data.cartype, carClass)

        this .objarr_copyto_arr(res.data.cargounits, unitsNum)
        this .objarr_copyto_arr(res.data.cargotype, goodsClass)
        this .objarr_copyto_arr(res.data.remark, info)

        that.setData({
          carLong: carLong,
          carClass: carClass,
          unitsNum: unitsNum,
          goodsClass: goodsClass,
          info: info,
        })
      },
      complete: () => {
        this.get_car_id()
        wx.request({
          url: 'https://wlgx.com/Api/Car/detail?id=' + this.data.car_id,
          method: "GET",
          header: { 'content-type': 'application/x-www-form-urlencoded' },
          success: (res) => {
            console.log(res.data)
            that.setData({
              carLong_d: this.data.carLong[res.data.cargo_info.carlength_id],
              carClass_d: this.data.carClass[res.data.cargo_info.cartype_id],
              unitsNum_d: this.data.unitsNum[res.data.cargo_info.cargounits_id],
              goodsClass_d: this.data.goodsClass[res.data.cargo_info.cargotype_id],
              info_d: this.data.info[res.data.cargo_info.type],
              // content: res.data.car_info.content,
              person: res.data.car_info.person,
              phone: res.data.car_info.phone,
              addtime: res.data.car_info.addtime
            })
          }
        })
      },
    })
  },
      //
      get_car_id: function (e) {
        commont.get_car_id(this, e)
      },
      // 拨打电话
      bindPhone: function (e) {
        wx.makePhoneCall({
          phoneNumber: e.currentTarget.dataset.phone
        })
      },
      objarr_copyto_arr: function (a, b) {
        a.forEach(function (v, i) {
          b.push(v.title)
        })
      },

})
