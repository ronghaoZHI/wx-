var commont = require("../../../js/commont.js");
var app = getApp()
Page({
  data: {
    region_star: ['北京', '北京', ''],
    region_to: ['北京', '北京', ''],
    region_form: ['', '', ''],
    customItem: '全部',
    files_me: [],
    files_wx: [],
    files_team: [],
    files_activity: [],
    files_product: [],
    popup_book: false,
    popup_img: false,
    mask: false,
    num:90

  },

  onLoad: function () {
    var navigator_time = getApp().globalData.navigator_time
  },

  chooseImage_team: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files_team: that.data.files_team.concat(res.tempFilePaths),
          tips_team: 'hidden'
        });
      }
    })
  },
  chooseImage_me: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files_me: that.data.files_me.concat(res.tempFilePaths),
          tips_me: 'hidden'
        });
      }
    })
  },
  chooseImage_activity: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files_activity: that.data.files_activity.concat(res.tempFilePaths),
          tips_activity: 'hidden'
        });
      }
    })
  },

  chooseImage_product: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files_product: that.data.files_product.concat(res.tempFilePaths),
          tips_product: 'hidden'
        });
      }
    })
  },
  chooseImage_bill: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files_bill: that.data.files_bill.concat(res.tempFilePaths),
          tips_bill: 'hidden'
        });
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
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
  }
})
