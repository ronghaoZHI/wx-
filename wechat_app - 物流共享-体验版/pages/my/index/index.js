var commont = require("../../../js/commont.js");
var app = getApp()
Page({
  data: {
    nickName: '',
    userInfoAvatar: '',
    popup_img: false,
    mask: false,
  },
  // 打开弹窗
  bind_popup_img: function (e) {
    commont.bind_popup_img(this, e)
  },
  // 关闭弹窗
  bind_popup_close: function (e) {
    commont.bind_popup_close(this, e)
  },
  onLoad: function () {
    var navigator_time = getApp().globalData.navigator_time;
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        // success  
        that.setData({
          nickName: res.userInfo.nickName,
          userInfoAvatar: res.userInfo.avatarUrl
        })
      },  
      fail: function (res) {
                  console.log("获取失败！")

      },

      // fail: function () {
      //   wx.showModal({
      //     title: '警告',
      //     content: '您点击了拒绝授权,将无法正常显示个人信息,点击确定重新获取授权。',
      //     success: function (res) {            
      //       if (res.confirm) {
      //         wx.openSetting({                 
      //           success: (res) => {
      //             if (res.authSetting["scope.userInfo"]) {////如果用户重新同意了授权登录
      //               wx.getUserInfo({
      //                 success: function (res) {
      //                   // var userInfo = res.userInfo;
      //                   that.setData({
      //                     nickName: res.userInfo.nickName,
      //                     avatarUrl: res.userInfo.avatarUrl,
      //                   })
      //                 }
      //               })
      //             }
      //           }, fail: function (res) {
      //             console.log("获取失败！")

      //           }
      //         })

      //       }
      //     }
      //   })
      // },
      complete: function () {
        // complete  
        console.log("获取用户信息完成！")
      }
    })
  } 
})  