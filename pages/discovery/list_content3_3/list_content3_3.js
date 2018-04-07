var commont = require("../../../js/commont.js");
var app = getApp()
Page({
  data: {
    region_star: ['北京', '北京市', ''],
    region_to: ['北京', '北京市', ''],
    customItem: '全部',
    resource_id: 0,
    title:'',
    room_height:'',
    person:'',
    phone:'',
    address:'',
    serve:'',
    house_type: '', 
    area:''
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
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
      url: 'https://wlgx.com/Api/Storage/detail?id=' + this.data.resource_id,
      method:'get',
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        that.setData({
          title: res.data.results.title,
          room_height: res.data.results.room_height,
          person: res.data.results.person,
          phone: res.data.results.phone,
          address: res.data.results.address,
          serve: res.data.results.serve,
          house_type: res.data.results.house_type,
          area: res.data.results.area,           
        })

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
