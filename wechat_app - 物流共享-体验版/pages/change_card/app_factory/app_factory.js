var commont = require("../../../js/commont.js");
var app = getApp()
Page({
  data: {

    files_rz: [],
    files_show: [],
    files_logo: [],
    popup_book: false,
    popup_my: false,
    mask: false,
    region: ['北京', '北京市', ''],
    customItem: '全部',


  },
  //城市选择
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  //上传logo图
  chooseImage_logo: function (e) {
    var that = this;
    var files_logo = this.data.files_logo;
    if (files_logo.length >= 1) {
      this.setData({
        lenMore: 1
      });
      setTimeout(function () {
        that.setData({
          lenMore: 0
        });
      }, 2500);
      return false;
    }
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files_logo: that.data.files_logo.concat(res.tempFilePaths),
          tips_logo: 'hidden'
        });
      }
    })
  },
  // 删除logo图片
  bind_deleteImg_logo: function (e) {
    var files_logo = this.data.files_logo;
    var index = e.currentTarget.dataset.index;
    files_logo.splice(index, 1);
    this.setData({
      files_logo: files_logo,
      tips_logo: 'neddih'
    });
    console.log(files_logo)
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
  onLoad: function () {
    var navigator_time = getApp().globalData.navigator_time
  },

  
})
