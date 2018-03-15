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
    
    name:'',
    phone:'',
    company_name:'',
    address:'',
    content:'',
    branding:'',
    addtime:'',
    review_img:'',
    review_img1:'',
    product_img:[],
    type:'',
    zy:'',
    zy1: '',
    zy2: '',
    zy3: '',
    zy4: '',
    yz:'',
    yz1: '',
    yz2: '',
    yz3: '',
    yz4: '',
    from:'',
    to:'',
    to1: '',
    to2: '',
    to3: '',
    to4: '',
    uid:0,
    status:0,
    tel:0,
    goods_id:0,
    imgstr:[]
   
// https://wlgx.com/Api/Ltl/detail
    // get 返回:list, img_str
    // 请求参数:  id
  //   `id`  '物流公司id',
  // `name`  '管理者名',
  // `phone` '手机号',
  // `company_name` '公司名称',
  // `address`  '公司位置',
  // `content` '公司简介',
  // `branding`  '合作品牌',
  // `addtime` '添加的时间',
  // `review_img` '认证图片',
  // `review_img1 '认证图片二',
  // `product_img`  '产品展示图片之间用逗号隔开',
  // `type` '是否推荐',
  // `zy`  '主营专线开始位置1',
  // `zy1` 主营专线开始位置2',
  // `zy2` '主营专线开始位置3',
  // `zy3` '主营专线开始位置4',
  // `zy4` 主营专线开始位置5',
  // `yz`  主营专线结束位置',
  // `yz1` 主营专线结束位置1',
  // `yz2` 主营专线结束位置2',
  // `yz3` 主营专线结束位置3',
  // `yz4` 主营专线结束位置4',
  // `from`  专线起始地',
  // `to` '专线目的地',
  // `to1` '专线目的地1',
  // `to2`'专线目的地2',
  // `to3`专线目的地3',
  // `to4` 专线目的地4',
  // `uid`用户uid',
  // `status` 收藏状态(0.未收藏1.收藏)',
  // `tel` 公司电话',
  },
  onLoad: function () {
    var that = this
    var navigator_time = getApp().globalData.navigator_time;
    this.get_goods_id()
    wx.request({
      url: 'https://wlgx.com/Api/Ltl/detail?id=' + this.data.goods_id,
      method: "GET",
      // header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: (res) => {
        console.log(res.data)
        that.setData({
          name: res.data.list.name,
          phone: res.data.list.phone,
          company_name: res.data.list.company_name,
          address: res.data.list.address,
          content: res.data.list.content,
          branding: res.data.list.branding,
          addtime: res.data.list.addtime,
          // review_img: res.data.list.review_img,
          // review_img1: res.data.list.review_img1,
          // product_img: res.data.list.product_img,
          // type: res.data.list.type,
          zy: res.data.list.zy,
          zy1: res.data.list.zy1,
          zy2: res.data.list.zy2,
          zy3: res.data.list.zy3,
          zy4: res.data.list.zy4,
          yz: res.data.list.yz,
          yz1: res.data.list.yz1,
          yz2: res.data.list.yz2,
          yz3: res.data.list.yz3,
          yz4: res.data.list.yz4,
          from: res.data.list.from,
          to: res.data.list.to,
          to1: res.data.list.to1,
          to2: res.data.list.to2,
          to3: res.data.list.to3,
          to4: res.data.list.to4,
          // uid: res.data.list.uid,
          status: res.data.list.status,
          tel: res.data.list.tel,
          // imgstr: res.data.img_str,
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
      url: 'https://wlgx.com/Api/Ltl/detail',
      method: "POST",
      data:{
        status:this.data.love
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