var commont = require("../../../js/commont.js");
var app = getApp()
Page({
  data: {
    love: false,
    poster: 'none',
    music: false,
    navigator_time: 0,
    //
    name: '',
    wechat: 0,
    position: '',
    company_address: '',
    company_phone: 0,
    person_yeji: '',
    person_intrduct:'',
    product: '',
    qq: 0,
    mobile: '',
    company_name: '',
    email: 0,
    latitude: 0,
    longitude: 0,

    wechat_img: [],
    person_img: [],
    yeji_img: [],
    fapiao_img: [],
    teamwork: [],
    company_activity: [],
    product_show: [],

      car_id:0,   //
    // music_id: 0,
    // music_name: '',
    // music_src: '',

    // `name` ‘姓名’,
    //   `wechat` ‘微信号’,
    //   `person_intrduct` ‘个人介绍’,
    //   `person_yeji` ‘个人 业绩’,
    //   `product` ‘产品说明’
    //   `qq` ‘qq号’,
    //   wechat_img 微信图片,
    //   yeji_img个人业绩,
    //   fapiao_img发票图片,
    //   teamwork团队合作,
    //   company_activity公司活动,
    //   product_show产品展示图片
    //     `company_address` ‘公司地址’,
    //   `company_name` ‘公司名称’,
    //   `email` ‘邮箱’,
    //   `company_phone` ‘公司电话号码’,
    //   `position` ‘职位’,
    //   `music_id` ‘音乐id’,
    //   `person_img` ‘个人形象照’,
    //   `mobile` ‘手机号’,
    //   ` latitude` ‘经度’,
    //   ` longitude` ‘纬度’
  },

  onLoad: function () {
    var that = this
    this.data.navigator_time = app.globalData.navigator_time
    this.get_car_id() //获取 电话号
    wx.request({
      url: 'https://wlgx.com/Api/Card/alldetail?mobile=' + car_id,
      method: 'GET',
      success: function (res) {
        console.log(res.data)
        that.setData({
            name : res.data.name,
            wechat : res.data.wechat,
            position : res.data.position,
            company_address : res.data.company_address,
            company_phone : res.data.company_phone,
            person_yeji : res.data.person_yeji,
            product : res.data.product,
            qq : res.data.qq,
            mobile : res.data.mobile,
            company_name : res.data.company_name,
            email : res.data.email,
            latitude : res.data.latitude,
            longitude : res.data.longitude,
            person_intrduct : res.data.person_intrduct,
        })
      }
    })
    // console.log(this.data.navigator_time,app.globalData.userInfo.id)
    // //
    // this.download_data()
  },
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')

  },
  //获取数据
  download_data: function () {
    var that = this
    var id = app.globalData.userInfo.id
    wx.request({
      url: 'https://wlgx.com/Api/Card/mycard',
      method: 'POST',
      data:{
        id: id,
      },
      header: {'Content-Type': 'application/x-www-form-urlencoded'},
      success: function (res) {
        console.log(res.data+"获取所有数据")

        that.data.name = res.data.name
        that.data.wechat = res.data.wechat
        that.data.position = res.data.position
        that.data.company_address = res.data.company_address
        that.data.company_phone = res.data.company_phone
        that.data.person_yeji = res.data.person_yeji
        that.data.product = res.data.product
        that.data.qq = res.data.qq
        that.data.mobile = res.data.mobile
        that.data.company_name = res.data.company_name
        that.data.email = res.data.email
        that.data.latitude = res.data.latitude
        that.data.longitude = res.data.longitude
        that.data.person_intrduct = res.data.person_intrduct

        that.data.wechat_img = res.data.wechat_img
        that.data.person_img = res.data.person_img
        that.data.yeji_img = res.data.yeji_img
        that.data.fapiao_img = res.data.fapiao_img
        that.data.teamwork = res.data.teamwork
        that.data.company_activity = res.data.company_activity
        that.data.product_show = res.data.product_show

        // that.data.music_id = res.data.music.music_id
        // that.data.music_name = res.data.music.music_name
        // that.data.music_src = res.data.music.music_src
      },
      complete: () => {
        //获取图片
        // wx.downloadFile({
        //   url: 'https://wlgx.com/Api/Card/card',
        //   // header: {},
        //   success: function (res) {
        //     console.log(res.data)
        //     // that.data.pic_src = res.data
        //   },
        //   complete: function (res) {

        //   },
        // })
      }
    })
    
  },
  bind_scrollTop_me: function (e) {
    commont.bind_scrollTop_me(this, e)
  },
  bind_scrollTop_company: function (e) {
    commont.bind_scrollTop_company(this, e)
  },
  bind_phone: function (e) {
    commont.bind_phone(this, e)
  },
  bind_card_phone: function (e) {
    commont.bind_card_phone(this, e)
  },
  bind_copy: function (e) {
    commont.bind_copy(this, e)
  },
  bind_getlocation: function (e) {
    commont.bind_getlocation(this, e)
  },
  bind_love: function (e) {
    commont.bind_love(this, e)
  },
  bind_music: function (e) {
    commont.bind_music(this, e)
  },

  onPageScroll: function (e) { // 获取滚动条当前位置
    console.log(e)
  },
  get_car_id: function (e) {
    commont.get_car_id(this, e)
  },
})
