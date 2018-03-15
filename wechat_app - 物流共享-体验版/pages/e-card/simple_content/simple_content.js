var commont = require("../../../js/commont.js");
var app = getApp()
Page({
  data: {
    love: false,
    poster: 'none',
    music: false,
    navigator_time:0,
    name: '',
    position: '',
    company_address: '',
    wechat:0,
    company_name:'',
    company_phone: 0,
    person_img: [],
    wechat_img:[],
    car_id:0, //电话号码

    // music_id: 0,
    // music_name: '',
    // music_src: '',

//     `name` '姓名',
// `company_address` '公司地址',
//   `company_name` '公司名称',
//   `email` '邮箱',
//   `company_phone` '公司电话号码',
//   `position` '职位',
//   `music_id` '音乐id',
//   `person_img` '个人形象照',
//   `mobile` '手机号',
//   ` latitude` '经度',
//   ` longitude` '纬度',
//   `music` '用户选择的背景音乐',
  },

  onLoad: function () {
    var that =this
    //onsole.log(res.data.name+"这是名称")
    this.data.navigator_time = getApp().globalData.navigator_time
    this.get_car_id() //获取 电话号
    wx.request({
      url: 'https://wlgx.com/Api/Card/alldetail?mobile='+car_id,
      method:'POST',
      success:function(res){
        console.log(res.data)
        that.setData({
            name : res.data.name,
            position : res.data.position,
            company_address : res.data.company_address,
            company_name : res.data.company_name,
            company_phone : res.data.company_phone,
            wechat : res.data.wechat,
        })
        
      }
    })

    // var id = getApp().globalData.userInfo.id
    // console.log(id)
    //获取数据
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
      data: {
        id: id,
      },
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log(res.data)

        that.data.name = res.data.name
        that.data.position = res.data.position
        that.data.company_address = res.data.company_address
        that.data.company_name = res.data.company_name
        that.data.company_phone = res.data.company_phone
        that.data.wechat = res.data.wechat
        
        that.data.person_img[0] = res.data.person_img
        that.data.wechat_img[0] = res.data.wechat_img
        
        that.data.music_id = res.data.music.music_id
        // that.data.music_name = res.data.music.music_name
        // that.data.music_src = res.data.music.music_src
      },
      complete: () => {
        //获取图片
        // wx.downloadFile({
        //   url: 'https://wlgx.com/Api/Card/add_card',
        //   // header: {},
        //   success: function (res) { 
        //     console.log(res.data)
        //     
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

  bind_update:function(){
    wx.showModal({
      title: '我要升级',
      content: '使用“个人风采”和“产品专区”功能需要进行名片升级，名片升级需支付69元',
      success: function (res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '../pay/pay'
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  onPageScroll: function (e) { // 获取滚动条当前位置
    console.log(e)
  },
  get_car_id: function (e) {
    commont.get_car_id(this, e)
  },
})
