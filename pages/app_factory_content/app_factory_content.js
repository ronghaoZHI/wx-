var commont = require("../../js/commont.js");
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
    imgUrls:[],    
    logo:'',
    company_name:'',
    content:'',
    business:'',
    branding:'',
    name:'',
    address:'',
    tel:'',
    phone:'',  
    vender_id: 0,
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
    var that = this
    var navigator_time = getApp().globalData.navigator_time;
    this.get_vender_id()
    wx.request({
      url: 'https://wlgx.com/Api/Index/detail?id=' + this.data.vender_id,
      method: 'get',
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        that.setData({
          logo: res.data.brand_info.logo,
          company_name: res.data.brand_info.company_name,
          content: res.data.brand_info.content,
          business: res.data.brand_info.business,
          branding: res.data.brand_info.branding,
          name: res.data.brand_info.name,
          address: res.data.brand_info.address,
          tel: res.data.brand_info.tel,
          phone: res.data.brand_info.phone,
          imgUrls: res.data.brand_info.product_img
        })
      }
    })
  },
  get_vender_id: function (e) {
    console.log("进来了哦哦")
    commont.get_vender_id(this, e)
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
