
var commont = require("../../js/commont.js");
var app = getApp()
Page({
  data: {
    load:true,
    region: ['北京', '北京市', ''],
    customItem: '全部',
    imgUrls: [],
    // 是否出现焦点
    indicatorDots_banner: true,
    indicatorDots_new: false,
    // 是否自动播放
    autoplay: true,
    // 自动播放间隔时间
    interval_banner: 3000,
    interval_new: 4000,
    // 滑动动画时间
    duration: 500,
    circular: true,
    vertical: true,
    userInfo: {},
    merchant_list:[],
    issue_list:[],
    car_list:[],
    vender_id: 0,
  }, 
  onLoad: function () {
    // this.getImgUrlFuc()
    // var navigator_time = getApp().globalData.navigator_time
    var that=this;
    this.download_data()
    this.get_data()
    wx.request({
      url: 'https://wlgx.com/Api/Index/index',
      method: 'get',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
       // console.log(res.data.ggtop);
        that.setData({imgUrls:res.data.ggtop})
          
      },        
      complete: () => {
        wx.request({
          url: 'https://wlgx.com/Api/Index/brand',
          method: 'post',
          header: { 'Content-Type': 'application/json' },
          success: function (res) {
            that.setData({
              merchant_list: res.data.list.concat()
            })
          }
        })
      },    
      
       fail: function (e) {
         wx.showToast({
           title: '网络异常！err:getsessionkeys',
           duration: 2000
         });
       },
       });

  },
  //最新发布货源
  download_data:function(){
    var that = this
    wx.request({
      url: 'https://wlgx.com/Api/Cargo/release',
      method: 'get',
      header: { 'Content-Type': 'application/json' },
      success:function(res){
        that.setData({
          issue_list: res.data.new.concat()
        })

      }

    })

  },
  //最新发布车源
  get_data:function(){
    var that = this
    wx.request({
      url: 'https://wlgx.com/Api/Car/release',
      method: 'get',
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        that.setData({
          car_list: res.data.new.concat()
        })

      }

    })

  },
  set_vender_id: function (e) {    
    console.log(e)
    this.data.vender_id = e.currentTarget.dataset.venderId    //获取点击选项的id
    commont.set_vender_id(this, e)
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
  },
  readme:function(){
    wx.showModal({
      title: '提示',
      content: '请到"我的"->"个人中心"查看"后台入住管理系统"登陆信息',
      // success: function (res) {
      //   if (res.confirm) {
      //     console.log('用户点击确定')
      //     wx.redirectTo({
      //       url: '',
      //     })
      //   } else if (res.cancel) {
      //     console.log('用户点击取消')
      //   }
        // }
    })
  },
  // getImgUrlFuc () {
  //   var that = this
  //   wx.request({
  //     url: 'https://wlgx.com/Api/Index/index',
  //     method: 'GET',
  //     success (res) {
  //       that.data.imgUrls = res.data.ggtop
  //     }
  //   })
  // }
    
})
