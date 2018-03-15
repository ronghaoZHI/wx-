// pages/e-card/account69/account69.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  payOrder: function () {
    wx.request({
      url: app.d.ceshiUrl + '/Api/Wxpay/wxpay', //仅为示例，并非真实的接口地址
      data: {
        order_sn: this.data.order_sn,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if (res.data.status == 1) {
          var order = res.data.arr;
          wx.requestPayment({
            timeStamp: order.timeStamp,
            nonceStr: order.nonceStr,
            package: order.package,
            signType: 'MD5',
            paySign: order.paySign,
            success: function (res) {
              wx.showModal({
                title: '支付成功',
                content: '请到"我的"->"个人中心"查看"后台名片管理系统"登陆信息',
              })
              setTimeout(function () {
                wx.navigateTo({
                  url: '../e-card/card_make/card_make',
                });
              }, 2500);
            },
            fail: function (res) {
              wx.showToast({
                title: res.data,
                duration: 3000
              })
            }
          })
        } else {
          wx.showToast({
            title: res.data.err,
            duration: 2000
          });
        }
      },
      fail: function () {
        // fail
        wx.showToast({
          title: '网络异常！err:wxpay',
          duration: 2000
        });
      }


    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})