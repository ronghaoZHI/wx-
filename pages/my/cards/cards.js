
var app = getApp()
Page({
  data: {
    cards1_list:[],
    cards2_list:[]

   
  },
   
 //从服务器获取数据
  onLoad: function () {
    var navigator_time = getApp().globalData.navigator_time
    var id = app.globalData.userInfo.id
    var that = this
    wx.request({
      url: 'https://wlgx.com/Api/User/card_collect',  
      method:'GET',
      data:{
        id:id,      
       
      },
      header: { 'Content-Type': 'application/json' }, 
      success:function(res){        
          that.setData({
            cards1_list: res.data.res5.concat(),
            cards2_list: res.data.res6.concat(), 
          })       

      }

      
    })
  }
})
