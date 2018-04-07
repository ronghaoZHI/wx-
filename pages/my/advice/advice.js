
var app = getApp()
Page({
  data: {

  },
  onLoad: function () {
    var navigator_time = getApp().globalData.navigator_time
  },
  //提交数据到服务器
  formSubmit: function (e) {
    var id = app.globalData.userInfo.id
    console.log(e.detail.value.content+"投诉内容")
   wx.request({
     url: 'https://wlgx.com/Api/User/advice',
     header: { "Content-Type": "application/x-www-form-urlencoded"},
     method: "POST",
     data: { 
       id: id,
       content: e.detail.value.content
       },
     success:function(res){      
       wx.showToast({
         title: '信息发布成功',
         duration: 2000
       });
     }
   }) 
  }

})
