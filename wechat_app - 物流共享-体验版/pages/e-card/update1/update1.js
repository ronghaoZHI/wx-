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
    popup_book: false,
    mask: false,
    input_location: '',
    input_latitude: 0.0,
    input_longitude: 0.0,
  
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
  //formSubmit
  formSubmit:function(e){

    var that = this
    // console.log(e.detail.value)
    //

    var all_data = {
      id: app.globalData.userInfo.id,
      company_address: e.detail.value.company_address,
      name: e.detail.value.name,
      company_name: e.detail.value.company_name,
      company_phone: e.detail.value.company_phone,
      position: e.detail.value.position,
      mobile: e.detail.value.mobile,
      latitude: that.data.input_latitude,
      longitude: that.data.input_longitude,
      wechat: e.detail.value.wechat,
      // status: that.data.display,
      email: e.detail.value.email
      // wechat_img: that.data.files_wx ,
      // person_img: that.data.files_me 
    }

    console.log(all_data);
    // //
    // wx.request({
    //   url: 'https://wlgx.com/Api/Card/card',
    //   method: 'POST',
    //   data: all_data,
    //   header: { 'content-type': 'application/x-www-form-urlencoded' },
    //   success: function (res) {
    //     console.log(res.data)
    //     // upload: (that, all_data.wechat_img)
    //   }
    // })

      wx.uploadFile({
        url: 'https://wlgx.com/Api/Card/card',
        filePath: that.data.files_wx[0],
        name: 'wechat_img',
        header: { "Content-Type": "multipart/form-data" },
        formData: all_data,
        success: function (res) {
          console.log(res.data);
          if (res.statusCode != 200) {
          //   wx.showModal({
          //     title: '提示',
          //     content: '上传失败',
          //     showCancel: false
          //   });
            return;
          }
        },
        complete: () => {
          wx.hideToast(); 
          wx.uploadFile({
            url: 'https://wlgx.com/Api/Card/card',
            filePath: that.data.files_me[0],
            name: 'person_img',
            header: { "Content-Type": "multipart/form-data" },
            formData: all_data,
            success: function (res) {
              console.log(res.data);
              if (res.statusCode != 200) {
                  // wx.showModal({
                  //   title: '提示',
                  //   content: '上传失败',
                  //   showCancel: false
                  // });
                return
              }
              // wx.switchTab({
              //   url: '/pages/change_card/card/card'
              // })
            },
            fail: function (e) {
              console.log(e);
              // wx.showModal({
              //   title: '提示',
              //   content: '上传失败',
              //   showCancel: false
              // })
            },
            complete: () => {
              wx.hideToast(); 
              console.log('complete');
            }
          })
        }
      })
  },
  
})
