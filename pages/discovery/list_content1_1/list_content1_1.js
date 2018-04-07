var commont = require("../../../js/commont.js");
var app = getApp()
Page({
  data: {
    region_star: ['北京', '北京市', ''],
    region_to: ['北京', '北京市', ''],
    customItem: '全部',    
    title:'',
    name:'',
    driving:'',
    phone:'',
    address:'',    
    resource_id: 0,
  },
  //来自页面的转发按钮
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '您好！这是我的名片',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  //获取当前选项id
  get_resource_id: function (e) {
    commont.get_resource_id(this, e)
  },
  onLoad: function () {
    var that = this
    var navigator_time = getApp().globalData.navigator_time
    this.get_resource_id()
    wx.request({
      url: 'https://wlgx.com/Api/Resource/detail?id=' + this.data.resource_id,      
      method:'get',
      header: { 'Content-Type': 'application/json' },
      success:function(res){
        if(res.data.status==1){
        that.setData({
          title: res.data.driver.title,
          name: res.data.driver.name,         
          phone: res.data.driver.phone,   
          address: res.data.driver.address       
        })
        }
        else{
          that.setData({
            title: res.data.list.title,
            name: res.data.list.name,
            driving: res.data.list.driving,
            phone: res.data.list.phone,
            address: res.data.list.address
          })
        }
        

      }

    })

  },

  bindRegionChange_star: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region_star: e.detail.value
    })
  },

  bindRegionChange_to: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region_to: e.detail.value
    })
  },

  scrollTop: function () {
    wx.pageScrollTo({
      scrollTop: 0
    })
  },
  // 拨打电话
  bind_phone: function (e) {
    commont.bind_phone(this, e)
  },
  // 导航
  bind_getlocation: function (e) {
    commont.bind_getlocation(this, e)
  },
  // 收藏
  bind_love: function (e) {
    commont.bind_love(this, e)
  },
})
