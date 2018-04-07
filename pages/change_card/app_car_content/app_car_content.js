var commont = require("../../../js/commont.js");
var app = getApp()
Page({
  data: {
    popup_img: false,
    mask: false,
    love:false,
    hdimg: [],
    //是否采用衔接滑动  
    circular: false,
    //是否显示画板指示点  
    indicatorDots: false,
    //选中点的颜色  
    indicatorcolor: "#000",
    //是否竖直  
    vertical: false,
    //是否自动切换  
    autoplay: false,
    //滑动动画时长毫秒  
    duration: 100,
    //所有图片的高度  
    // imgheights: [920],
    //图片宽度  
    // imgwidth: 750,
    //默认  
    current: 0,
    imgUrls: [],
    company_name:'',
    from:'',
    to:'',
    name:'',
    address:'',
    tel:'',
    phone:'',
    content:'',
    branding:'',
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
  onLoad: function () {
    var navigator_time = getApp().globalData.navigator_time;    
    var that = this
    var id = getApp().globalData.userInfo.id
    wx.request({
      url: 'https://wlgx.com/Api/Index/enten',
      method: 'get',
      header: { 'Content-Type': 'application/json' },
      data: {
        id: id,
      },
      success: function (res) {
        if (res.data.ad == 4) {
          that.setData({
            company_name: res.data.de1.company_name,            
            name: res.data.de3.name,
            from: res.data.de3.from,
            tel: res.data.de3.tel,
            phone: res.data.de3.phone,
            to: res.data.de3.to,            
            content: res.data.de3.content,
            branding: res.data.de3.branding,
            address: res.data.de3.address,
            imgUrls: res.data.de3.product_img
          })
        }
        else {
          wx.navigateBack({
          })
          wx.showModal({
            title: '提示',
            content: '请到选择您正确的卡片信息',
            // duration: 3000,
          })
        }
        


      }

    })

  },

  // 拨打电话
  bind_phone:function(e){
    commont.bind_phone(this, e)
  },
  // 导航
  bind_getlocation: function (e) {
    commont.bind_getlocation(this, e)
  },
  // 收藏
  bind_love:function(e){
    commont.bind_love(this, e)
  },
  // 弹窗-我的小程序
  bind_popup_img: function (e) {
    commont.bind_popup_img(this,e)
  },
  // 弹窗-关闭
  bind_popup_close: function (e) {
    commont.bind_popup_close(this, e)
  },

})
