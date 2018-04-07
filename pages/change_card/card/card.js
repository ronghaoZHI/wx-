
var app = getApp()
Page({
  data: {
    url:'../../e-card/card_make/card_make',
    url_arr:[{type:0,url:'../../e-card/card_make/card_make'},
      { type: 1, url:'../../e-card/simple_content/simple_content'},  
      { type: 3, url:'../../e-card/update_content/update_content'}
    ]
  },

  onLoad: function () {
    var that=this
    var navigator_time = getApp().globalData.navigator_time
    console.log(app.globalData.userInfo.id)
    //设置 指定url
    //get请求 type值
    wx.request({
      url: 'https://wlgx.com/Api/Card/mycard',
      method: 'POST',
      data: {
        id: app.globalData.userInfo.id,
      },
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success:(res)=>{
          console.log(res.data)

         that.data.url_arr.forEach((v,i)=>{
          if(v.type == res.data.order_type)
          {
            //  that.data.url = v.url
             that.setData({
               url:v.url
             })
            console.log(that.data)
          } 
         }) 
      }
    })
  },

  // 拨打电话
  bindPhone: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone
    })
  }

})
