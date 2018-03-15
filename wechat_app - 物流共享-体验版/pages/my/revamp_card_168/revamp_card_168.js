var commont = require("../../../js/commont.js");
var app = getApp()
Page({
  data: {
    region_star: ['北京', '北京', ''],
    region_to: ['北京', '北京', ''],
    region_form: ['', '', ''],
    customItem: '全部',
    files_wx: [],
    files_me:[],
    files_mygrade: [],
    files_team: [],
    files_activity: [],
    files_show: [],
    files_bill: [],
    popup_img:false,
    mask: false,
    bill_img:"../../../images/revamp_card_bill.png"
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
  chooseImage_wx: function (e) {
    commont.chooseImage_wx(this, e)
  },
  bind_deleteImg_wx: function (e) {
    commont.bind_deleteImg_wx(this, e)
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
    commont.chooseImage_show(this, e)
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
    console.log(1)
    commont.bind_popup_img(this, e)
  },
  // 弹窗-关闭
  bind_popup_close: function (e) {
    commont.bind_popup_close(this, e)
  },

})
