// pages/my/qrcode/qrcode.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgPath:"",
    close:ture,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.saveImg()
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
  saveToClum:function(){
    var that = this
    wx.saveImageToPhotosAlbum({
      filePath:that.data.imgPath,
      success(res) {
        console.log("保存成功！")
      }
    })
  },
  rqCode:function(){
    // 只允许从相机扫码
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        console.log(res)
      }
    })
  },
  close:function(){
    this.setData({
      close:false
    })
  }
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  saveImg: function () {
    var that = this
    var id = app.globalData.userInfo.id
    // var path_url = ""
    wx.request({
      url: 'https://wlgx.com/Api/Card/get_qrcode',
      method: 'POST',
      data: {
        id: id,
      },
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log("进来了")
        // console.log(res.data.body[0])
        console.log(res.data)
        // path_url = 
        wx.downloadFile({
          url: res.data,
          success: function (res) {
            wx.saveFile({
              tempFilePath: res.tempFilePath,
              success: function (res) {
                console.log("二维码保存成功")
                that.saveData({ imgPath: res.savedFilePath })
                wx.setStorageSync('Q_filePath', res.savedFilePath);
              }
            })
          }
        })
        // wx.save({
        //   url: path_url,
        //   success: function (res) {
        //     let path = res.tempFilePath
        //     wx.saveImageToPhotosAlbum({
        //       filePath: path,
        //       success(res) {
        //         console.log(res)
        //       },
        //       fail(res) {
        //         console.log(res)
        //       },
        //       complete(res) {
        //         console.log(res)
        //       }
        //     })
        //   }, 

        // })
      },
      complete: function () {

      }
    })
  }

})