var commont = require("../../../js/commont.js");
var app = getApp()
Page({
  data: {
    region_star: ['北京', '北京市', ''],
    region_to: ['北京', '北京市', ''],
    region_form: ['北京', '北京市', ''],
    customItem: '全部',

    carLong:'',
    carLongIndex: 0,
    carClass: '',
    carClassIndex: 0,
    goodsNum:0,
    unitsNum: '',
    unitsNumIndex: 0,
    goodsClass: '',
    goodsClassIndex: 0,
    info:'',
    infoIndex: 0,
   
    // from出发地  
    // to目的地
    // addtime发布时间
    // content信息详情
    // person发布人
    // phone手机号
    // address详细地址
    // photo图片
    // tel座机号码, 
    // passby经过城市
    // price价格
    // volume货量
    // cargounits_id货量单位, 
    // carlength_id车长, 
    // cartype_id车型, 
    // cargotype_id货型, 
    // release_notes_id发布备注
  },

  onLoad: function () {
    console.log()
    var that = this
    var navigator_time = getApp().globalData.navigator_time
    wx.request({
      url:'https://wlgx.com/Api/Car/release',

      success:(res)=>{
       console.log(res.data) 
       var carLong = ['车长']
       var carClass = ['车型']
      //  var goodsNum = ['货量']
       var unitsNum = ["单位"]
       var goodsClass = ["货型"]
       var info = ["请选择"]
       this.objarr_copyto_arr(res.data.carlength, carLong)
       this.objarr_copyto_arr(res.data.cartype, carClass)
    
       this.objarr_copyto_arr(res.data.cargounits, unitsNum)
       this.objarr_copyto_arr(res.data.cargotype, goodsClass)
       this.objarr_copyto_arr(res.data.remark, info)
      
       that.setData({
         carLong: carLong,
         carClass: carClass,
         unitsNum: unitsNum,
         goodsClass: goodsClass,
         info: info,
       })
      }
    })
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

  bindCarLong: function (e) {
    this.setData({
      carLongIndex: e.detail.value
    })
  },

  bindCarClass: function (e) {
    this.setData({
      carClassIndex: e.detail.value
    })
  },
  // bindGoodsNum: function (e) {
  //   this.setData({
  //     goodsNumIndex: e.detail.value
  //   })
  // },
  bindUnitsNum: function (e) {
    this.setData({
      unitsNumIndex: e.detail.value
    })
  },
  bindGoodsClass: function (e) {
    this.setData({
      goodsClassIndex: e.detail.value
    })
  },
  bindinfo: function (e) {
    this.setData({
      infoIndex: e.detail.value
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
  // 
  formSubmit:function(e){
    console.log("这是手机号" + e.detail.value.tel)
    var date = new Date()
    var datetime = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay() + " " + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()    
    var formdata = {
      id: app.globalData.userInfo.id,
      from: this.data.region_star[1],
      to: this.data.region_to[1],
      addtime: datetime,
      person: app.globalData.userInfo.NickName,
      phone: e.detail.value.phone,
      // address: '',
      tel: e.detail.value.tel,
      passby: this.data.region_form[1],
      // price: 0,
      volume: e.detail.value.goodsNum,
      // content: this.data.infoIndex,
      cargounits_id: this.data.unitsNumIndex,
      carlength_id: this.data.carLongIndex,
      cartype_id: this.data.carClassIndex,
      cargotype_id: this.data.goodsClassIndex,
      remark_id: this.data.infoIndex,
    }
    console.log(formdata)
    wx.request({
      url: 'https://wlgx.com/Api/Car/release',
      method:'POST',
      data: formdata,
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success:function(res){
        wx.showToast({
          title: '信息发布成功',
          duration: 2000
        });

      }
    })
  },
  //取对象数组 到数组 
  objarr_copyto_arr:function(a,b){
      a.forEach(function(v,i){
        b.push(v.title)
      })
  }
})
