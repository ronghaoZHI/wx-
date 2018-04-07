var app = getApp()
Page({
  data: {
    content:'',
    succ:[],
    list: [],
    imgUrls:[]
  },
  onLoad: function () {   
    var that = this;       
    var navigator_time = getApp().globalData.navigator_time;
    var id = app.globalData.userInfo.id  
    wx.request({
      url: 'https://wlgx.com/Api/User/my_message',
      method: 'get',
      header: { 'Content-Type': 'application/json' },
      data: {
            id: id,
          },
      success: function (res) {       
        console.log(res+"数组数组")
        that.setData({
           list: res.data.demand.concat(),
          //  imgUrls: res.data.photo(res.data.photo)    
         
        })
        
      },    
      fail: function (e) {
        wx.showToast({
          title: '网络异常！err:getsessionkeys',
          duration: 2000
        });
      },

    });     
        // wx.request({
        //   url: 'https://wlgx.com/Api/User/my_message',
        //   method:'get',  
        //   header: { 'Content-Type': 'application/json' },
        //   data: {
        //     id: id,
        //   },        
        //   success:function(res) {            
             
                             
        //     // console.log(res.data.demand.concat()+"所有结果")  
        //     that.data({                                        
        //       //拼接数组
        //       // demand: that.data.demand.concat(res.data.demand)
        //       list: res.data.demand,  
        //       list_img: res.data.photo
        //     })
        //   },
        //   fail:function(){
        //     console.log("找不到数据")
        //   }
        // })
      
  },  
  // 拨打电话
  bindPhone: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone
    })
  },
  //加载更多
  bindscrolltolower: function () {
    console.log('到底部')
    //加载更多
    this.requestData('demand');
  },
  
})
