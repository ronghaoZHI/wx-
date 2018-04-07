var commont = require("../../../js/commont.js");
var app = getApp()
Page({
  data: {
    popup_img: false,
    mask: false,
    love: false,
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
    company_name:'',
    zy:'',
    yz:'',
    yz1:'',
    yz2:'',
    yz3:'',
    yz4:'',
    name:'',
    from:'',
    tel:'',
    phone:'',
    to:'',
    to1:'',
    to2:'',
    to3:'',
    to4:'',
    content:'',
    imgUrls: [],    
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
    wx.request({      
      url: 'https://wlgx.com/Api/Index/enten?id=24',
      method:'get',
      header: { 'Content-Type': 'application/json' },
      success:function(res){       
        
        if (res.data.ad==2){        
        that.setData({
          company_name: res.data.de1.company_name,
          zy: res.data.de1.zy,
          yz: res.data.de1.yz,
          yz1: res.data.de1.yz1,
          name: res.data.de1.name,
          from: res.data.de1.from,
          tel: res.data.de1.tel,
          phone: res.data.de1.phone,
          to: res.data.de1.to,
          to1: res.data.de1.to1,
          content: res.data.de1.content,
          branding: res.data.de1.branding,
          address: res.data.de1.address,
          imgUrls: res.data.de1.product_img              
        })
        }
        console.log(res.data.de1.product_img)
        
        
      }

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
  // 弹窗-我的小程序
  bind_popup_img: function (e) {
    commont.bind_popup_img(this, e)
  },
  // 弹窗-关闭
  bind_popup_close: function (e) {
    commont.bind_popup_close(this, e)
  },

})
