// pages/blank/blank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  saveImg: function () {
    wx.downloadFile({
      url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      success: function (res) {
        let path = res.tempFilePath
        wx.saveImageToPhotosAlbum({
          filePath: path,
          success(res) {
            console.log(res)
          },
          fail(res) {
            console.log(res)
          },
          complete(res) {
            console.log(res)
          }
        })
      }, fail: function (res) {
        console.log(res)
      }
    })

  }
})