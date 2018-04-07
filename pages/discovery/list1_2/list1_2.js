

var app = getApp()
Page({
  data: {
    region: ['北京', '北京市', ''],
    customItem: '全部',
    circular: true,
    vertical: true,
    userInfo: {},
    list_content:[],
    list_type:[]
  },

  onLoad: function () {
    var navigator_time = getApp().globalData.navigator_time
    var that = this;
    wx.request({
      url: 'https://wlgx.com/Api/Particularly/index',
      method:'get',
      header: {'Content-Type': 'application/json'},
      success:function(res){
        that.setData({
          list_type: res.data.type,
          list_content: res.data.list.concat(),
        })  

      }

    })
  },

  scrollTop: function () {
    wx.pageScrollTo({
      scrollTop: 0
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }
    
})
