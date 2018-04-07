var commont = require("../../../js/commont.js");
var app = getApp()
Page({
  data: {
    region: ['北京', '北京市', ''],
    customItem: '全部',
    circular: true,
    vertical: true,
    userInfo: {},
    list_content:[],
    list_type:[],
    resource_id:0
  },
  //获取点击选项的Id
  set_resource_id:function(e){
    this.data.resource_id = e.currentTarget.dataset.resourceId    //获取点击选项的id
    commont.set_resource_id(this, e)
  },
  onLoad: function () {    
    var navigator_time = getApp().globalData.navigator_time
    var that = this;
    var city = this.data.region[1]//定位城市
    wx.request({
      url: 'https://wlgx.com/Api/Resource/index',
      method:'get',
      header: { 'Content-Type': 'application/json' },
      formData: { city: city},
      success:function(res){
        console.log(res.data)
        var arr=[]
        for (var x in res.data.type) {
          arr.push( res.data.type[x])
        }
        that.setData({
          list_type: arr,
          list_content: res.data.list.concat(),
        })  
      },
       complete: () => {

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
