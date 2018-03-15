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

    name: '',
    phone: '',
    company_name: '',
    address: '',
    content: '',
    branding: '',
    addtime: '',
    review_img: '',
    review_img1: '',
    product_img: [],
    type: '',
    status: 0,
    tel: 0,
    from:'',
    to:"",
    uid:0,

    goods_id: 0,
  
    // https://wlgx.com/Api/Motorcade/detail
  //   `id`        '车队id',
  // `name`       '管理者名',
  // `addtime`     '添加时间',
  // `content`      '公司简介',
  // `address`      '公司位置',
  // `phone`       '手机号',
  // `review_img`   '认证图片',
  // `type`         '是否推荐',
  // `from`        '主营专线起始地',
  // `to`          '主营专线目的地',
  // `branding`    '合作品牌',
  // `company_name '公司名称',
  // `product_img`   '产品展示图片之间用逗号隔开',
  // `review_img1`   '认证图片二',
  // `uid`           '用户id(关联lr_user数据表)',
  // `status`         '收藏状态(0.未收藏2.收藏)',
  // `tel`            '公司电话',
  },
  onLoad: function () {
    var that = this
    var navigator_time = getApp().globalData.navigator_time;
    this.get_goods_id()
    wx.request({
      url: 'https://wlgx.com/Api/Motorcade/detail?id=' + this.data.goods_id,
      method: "GET",
      // header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: (res) => {
        console.log(res.data)
        that.setData({
          name: res.data.info.name,
          phone: res.data.info.phone,
          company_name: res.data.info.company_name,
          address: res.data.info.address,
          // content: res.data.info.content,
          // branding: res.data.info.branding,
          addtime: res.data.info.addtime,
          // review_img: res.data.info.review_img,
          // review_img1: res.data.info.review_img1,
          // product_img: res.data.list.product_img,
          // type: res.data.list.type,
          status: res.data.info.status,
          tel: res.data.info.tel,
          from: res.data.info.from,
          to: res.data.info.to,
          // uid: res.data.list.uid,
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
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  
  get_goods_id: function (e) {
    commont.get_goods_id(this, e)
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
    wx.request({
      url: 'https://wlgx.com/Api/Motorcade/detail',
      method: "POST",
      data: {
        status: this.data.love
      },
      // header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: (res) => {

      }
    })
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
