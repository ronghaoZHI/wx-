//index.js
//获取应用实例
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

    carlength_id: 0,
    name: '',
    mobile: 0,
    cartype: '',
    route: '',
    load: '',
    loadcube: 0,
    price: 0,
    car_card: 0,
    addtime: '',
    type: '',
    status: 0,
    uid: 0,

    carClass: '',
    carClassIndex: 0,

    goods_id: 0,

    // https://wlgx.com/Api/Chauffeur/detail
    //   `id`        整车专线司机id',
    //   `carlength_id`  '车长(关联车长carlength表)',
    // `name`        '姓名',
    // `mobile`       '手机号',
    // `cartype`       '车型(关联车型cartype表)',
    // `route`         '主营路线(多个地址之间用,隔开)',
    // `load`          '载重吨位',
    // `loadcube`      载重立方',
    //   `price`         '运价',
    // `review_img`   '认证图片1',
    // `uid`           '用户(关联user表)',
    // `addtime`       '发布时间',
    // `review_img1`    '认证图片2',
    // `car_card`        '车牌号',
    // `type`           '是否审核',
    // `status`          '收藏状态(0.未收藏3.收藏)',
  },
  onLoad: function () {
    var that = this
    var navigator_time = getApp().globalData.navigator_time
    wx.request({
      url: 'https://wlgx.com/Api/Chauffeur/release',

      success: (res) => {
        console.log(res.data)
        var carClass = ['车型']
        this.objarr_copyto_arr(res.data.cartype, carClass)
        that.setData({
          carClass: carClass,
        })
      },
      complete: () => {
        this.get_goods_id()
        wx.request({
          url: 'https://wlgx.com/Api/Chauffeur/detail?id=' + this.data.goods_id,
          method: "GET",
          // header: { 'content-type': 'application/x-www-form-urlencoded' },
          success: (res) => {
            console.log(res.data)
            that.setData({
              carlength_id: res.data.info.carlength_id,
              name: res.data.info.name,
              mobile: res.data.info.mobile,
              cartype: res.data.info.cartype,
              route: res.data.info.route,
              load: res.data.info.load,
              loadcube: res.data.info.loadcube,
              price: res.data.info.price,
              car_card: res.data.info.car_card,
              addtime: res.data.info.addtime,
              // type: res.data.list.type,
              status: res.data.info.status,
              // uid: res.data.list.uid,
            })
          }
        })
      }
    })
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
        // 转发成
      },
      fail: function (res) {
        // 转发失败
      }
    }
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
  get_goods_id: function (e) {
    commont.get_goods_id(this, e)
  },
  objarr_copyto_arr: function (a, b) {
    a.forEach(function (v, i) {
      b.push(v.title)
    })
  },
})
