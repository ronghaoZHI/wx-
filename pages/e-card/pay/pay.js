var app = getApp()
Page({
  data: {

  },

  onLoad: function () {
    var navigator_time = getApp().globalData.navigator_time
  },
  //立即下单
  placeOrder:function() {
    console.log(this)    
    wx.request({
      url: 'https://wlgx.com/Api/Payment/pay_now/',
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        price: 1,  
        id: app.globalData.userInfo.id,     
        order_type: 1,        
      },      
      success(res) {
        if(res.data.status==1){
        var pay = res.data        
        wx.navigateTo({
          url: '../account/account?order_sn=' + res.data.arr.order_sn,
        })
        console.log(res)        
        
      }
      else{
          wx.showModal({
            title: '请去个人中心查看！',
            content: '',
          })     

      }
      }
    
    })
  }

})
