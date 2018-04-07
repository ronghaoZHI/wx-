// pages/change_card/app_factory_content/app_factory_content.js
var commont = require("../../../js/commont.js");
var app = getApp()
Page({
  data: {
    popup_img: false,
    mask: false,
    imgUrls:[],
    company_name:'',
    content:'',
    business:'',
    branding:'',
    name:'',
    address:'',
    tel:'',
    phone:''

  },

  onLoad: function () {
    var navigator_time = getApp().globalData.navigator_time;
    var that = this
    var id = getApp().globalData.userInfo.id
    wx.request({
      url: 'https://wlgx.com/Api/Index/enten',
      method: 'get',
      header: { 'Content-Type': 'application/json' },
      data: {
        id: id,
      },
      success: function (res) {
        if (res.data.ad == 1) {
          that.setData({
            company_name: res.data.de.company_name,
            content: res.data.de.content,
            business: res.data.de.business,
            branding: res.data.de.branding,
            name: res.data.de.name,
            address: res.data.de.address,
            tel: res.data.de.tel,
            phone: res.data.de.phone,
            imgUrls: res.data.de.product_img
            
          })
        }
        else {
          wx.navigateBack({
          })
          wx.showModal({
            title: '提示',
            content: '请到选择您正确的卡片信息',
            // duration: 3000,
          })
        }



      }

    })


  },
  // 弹窗-我的小程序
  bind_popup_img: function (e) {
    this.setData({
      popup_img: true,
      mask: true
    });
  },
  // 弹窗-关闭
  bind_popup_close: function (e) {
    this.setData({
      popup_book: false,
      popup_img: false,
      mask: false
    });
  }

})