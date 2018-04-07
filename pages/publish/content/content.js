//index.js
var commont = require("../../../js/commont.js");
//获取应用实例
var app = getApp()
Page({
  data: {
    goods_id: 0,
    addtime:'',
    person:'',
    phone:'',
    carlength:'',
    cargotype:'',
    cargounits:'',
    remark:'',
    cartype:''
    // content: '',
    // person: '',
    // phone: '',
    // addtime: '',
    // current_id:0,
    // count_num:0,
    // carLong: '',
    // carLongIndex: 0,
    // carClass: '',
    // carClassIndex: 0,
    // goodsNum: 0,
    // unitsNum: '',
    // unitsNumIndex: 0,
    // goodsClass: '',
    // goodsClassIndex: 0,
    // info: '',
    // infoIndex: 0,
    // carLong_d: '',
    // carClass_d: '',
    // unitsNum_d: '',
    // goodsClass_d: '',
    // info_d: '',
    // id:'',
    // addtime:'',
    // phone:'',
    // person:'',
    // https://wlgx.com/Api/Cargo/new_detail
    // id信息编号, 
    // content 信息详情, 
    // person 发布人, 
    // phone 手机号, 
    // addtime 发布时间
  },
  onLoad:function(){
    var that = this
    var navigator_time = getApp().globalData.navigator_time
    this.get_goods_id()
    wx.request({
      url: 'https://wlgx.com/Api/Cargo/new_detail?id=' + this.data.goods_id,
      method: "GET",
      // header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: (res) => {
        console.log(res.data)
        that.setData({
          current_id: res.data.did, //当前条数
          count_num: res.data.count_num, //总条数
          id: res.data.info.id,
          person: res.data.info.person,
          phone: res.data.info.phone,
          addtime: res.data.info.addtime,
          carlength: res.data.info.carlength,
          cargotype: res.data.info.cargotype,
          cargounits: res.data.info.cargounits,
          remark: res.data.info.remark,
          cartype: res.data.info.cartype,
      })
      }
    })

  },
//   onLoad: function () {
//     var that = this
//     var navigator_time = getApp().globalData.navigator_time
//     wx.request({
//       url: 'https://wlgx.com/Api/Car/release',
//       success: (res) => {
//         console.log(res.data)
//         var carLong = ['车长']
//         var carClass = ['车型']
//         //  var goodsNum = ['货量']
//         var unitsNum = ["单位"]
//         var goodsClass = ["货型"]
//         var info = ["请选择"]
//         this.objarr_copyto_arr(res.data.carlength, carLong)
//         this.objarr_copyto_arr(res.data.cartype, carClass)
//         this.objarr_copyto_arr(res.data.cargounits, unitsNum)
//         this.objarr_copyto_arr(res.data.cargotype, goodsClass)
//         this.objarr_copyto_arr(res.data.remark, info)
//         that.setData({
//           carLong: carLong,
//           carClass: carClass,
//           unitsNum: unitsNum,
//           goodsClass: goodsClass,
//           info: info,
//         })
//       },
//       complete: () => {
//     this.get_goods_id()
//     wx.request({
//       url: 'https://wlgx.com/Api/Cargo/new_detail?=' + this.data.goods_id,
//       method: "GET",
//       // header: { 'content-type': 'application/x-www-form-urlencoded' },
//       success: (res) => {
//         console.log(res.data)
//         that.setData({
//           current_id: res.data.did, //当前条数
//           count_num: res.data.count_num, //总条数
//           content: res.data.content,
//           person: res.data.person,
//           phone: res.data.phone,
//           addtime: res.data.addtime
//       })
//       }
//     })
//   }
// })
//   },
  //
  get_goods_id: function (e) {
    commont.get_goods_id(this, e)
  },
  // 拨打电话
  bindPhone: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone
    })
  },
  up:function(e){
    var that = this
    if (this.data.did>0)
    {this.data.did--}
    wx.request({
      url: 'https://wlgx.com/Api/Cargo/new_detail?=' + this.data.did,
      method: "GET",
      // header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: (res) => {
        console.log(res.data)
        that.setData({
          current_id: res.data.did,
          // count_num: res.data.count_num,
          content: res.data.content,
          person: res.data.person,
          phone: res.data.phone,
          addtime: res.data.addtime
        })
      }
    })
  },
  down:function(e){
    var that = this
    if (this.data.did < this.data.count_num)
    {++this.data.did}
    wx.request({
      url: 'https://wlgx.com/Api/Cargo/new_detail?=' + this.data.did,
      method: "GET",
      // header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: (res) => {
        console.log(res.data)
        that.setData({
          current_id: res.data.did,
          // count_num: res.data.count_num,
          content: res.data.content,
          person: res.data.person,
          phone: res.data.phone,
          addtime: res.data.addtime
        })
      }
    })
  },
  objarr_copyto_arr: function (a, b) {
    a.forEach(function (v, i) {
      b.push(v.title)
    })
  },

})
