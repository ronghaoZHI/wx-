var commont = require("../../../js/commont.js");
var app = getApp()
Page({
  data: {
    region_star: ['北京', '北京', ''],
    region_to: ['北京', '北京', ''],
    region_form: ['', '', ''],
    customItem: '全部',
    files_mygrade: [],
    files_team: [],
    files_activity: [],
    files_show: [],
    files_bill: [],
    popup_book: false,
    mask: false

  },

  onLoad: function () {
    var navigator_time = getApp().globalData.navigator_time
  },
  chooseImage_mygrade: function (e) {
    commont.chooseImage_mygrade(this, e)
  },
  bind_deleteImg_mygrade: function (e) {
    commont.bind_deleteImg_mygrade(this, e)
  },
  chooseImage_team: function (e) {
    commont.chooseImage_team(this, e)
  },
  bind_deleteImg_team: function (e) {
    commont.bind_deleteImg_team(this, e)
  },
  chooseImage_activity: function (e) {
    commont.chooseImage_activity(this, e)
  },
  bind_deleteImg_activity: function (e) {
    commont.bind_deleteImg_activity(this, e)
  },
  chooseImage_show: function (e) {
    var id = app.globalData.userInfo.id
    commont.chooseImage_show(this, e,id)
  },
  bind_deleteImg_show: function (e) {
    commont.bind_deleteImg_show(this, e)
  },
  chooseImage_bill: function (e) {
    commont.chooseImage_bill(this, e)
  },
  bind_deleteImg_bill: function (e) {
    commont.bind_deleteImg_bill(this, e)
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
  // 弹窗-发票
  bind_popup_img: function (e) {
    commont.bind_popup_img(this, e)
  },
  // 弹窗-关闭
  bind_popup_close: function (e) {
    commont.bind_popup_close(this, e)
  },

  // 选择位置
  bind_location: function (e) {
    commont.bind_location(this, e)
  },
  //
  formSubmit:function(e){
    var all_data = {
      id: that.data.id,
      qq: e.detail.value.qq,
      email: e.detail.value.email,
      company_phone: e.detail.value.company_phone,
      person_intrduct: e.detail.valueperson_intrduct,
      person_yeji: e.detail.valueperson_yeji,
      product: e.detail.valueproduct,

      // files_mygrade,
      // files_team,
      // files_activity,
      // files_show,
      // files_bill,
      // status:display,
    }

    console.log(all_data);
    // //
    wx.request({
      url: 'https://wlgx.com/Api/Card/upgrade_card ',
      method: 'POST',
      data: all_data,
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log(res.data)
      },
      complete: () => {

        // 表单图片上传
        //  this.uploadimg()
        
      }
      })

    
  },

  uploadimg: function () {
    var files_mygrade = this.data.files_mygrade
    // var id = app.globalData.userInfo.id
    commont.uploadimg({
      url: 'https://wlgx.com/Api/Card/up1',  //这里是你图片上传的接口
      path: files_mygrade,     //这里是选取的图片的地址数组
      name:'yeji_img',
      header: { "Content-Type": "multipart/form-data" },
      formdata: {id:app.globalData.userInfo.id}
    })
  }

})
