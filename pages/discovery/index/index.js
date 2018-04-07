var commont = require("../../../js/commont.js")

var app = getApp()
Page({
  data: {
    goods_id:0,
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
    tab_hd: 1,
    pub: []
    // pub_id:0,
    // pub_img:"",
    // pub_person:"",
    // pub_address:"",
    // pub_content:"",
    // pub_photo:[],
    // pub_addtime:""

    //id编号,img发布人头像,person发布人,address详细地址,
    //content信息详情,photo发布图片,addtime发布时间
  },

  onLoad: function () {
    //var navigator_time = getApp().globalData.navigator_time
    var that = this;
    wx.request({
      url: 'https://wlgx.com/Api/Find/carousel',
      method: 'get',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({ imgUrls: res.data.ggtop })

      },
      fail: function (e) {
        wx.showToast({
          title: '网络异常！err:getsessionkeys',
          duration: 2000
        });
      },
      complete: function (e) {
        wx.request({
          url: 'https://wlgx.com/Api/Find/index?id=' + app.globalData.userInfo.id,
          method: 'get',
          // header: { 'Content-Type': 'application/json'},
          // data:{},
          success: function (res) {
            console.log(res.data)
            //   err: "没有找到相关信息！.."
            that.setData({
              pub: res.data.new.concat()
              //  pub_id :0,
              //  pub_img:"",
              //  pub_person:"",
              //  pub_address:"",
              //  pub_content:"",
              //  pub_photo:[],
              //  pub_addtime:""
            })
          }
        })
      },
    });
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
  // 拨打电话
  bindPhone: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone
    })
  },
  // 选项卡
  bind_tab_hd: function (e) {
    this.setData({
      tab_hd: e.currentTarget.dataset.tab_hd
    })
  },
  set_goods_id: function (e) {
    console.log(e)
    this.data.goods_id = e.currentTarget.dataset.goodsId    //获取点击选项的 goods_id
    commont.set_goods_id(this, e)
  },
})
