// pages/my/update69_content/update69_content.js
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
    person_intrduct: '',
    product: '',
    qq: 0,
    mobile: '',
    company_name: '',
    email: 0,
    latitude: 0,
    longitude: 0,

    wechat_img: '',
    person_img: '',
    yeji_img: [],
    fapiao_img: [],
    teamwork: [],
    company_activity: [],
    product_show: [],

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
    this.data.navigator_time = app.globalData.navigator_time
    console.log(this.data.navigator_time, app.globalData.userInfo.id)
    //
    this.download_data()
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
      url: 'https://wlgx.com/Api/Card/mycard2',
      method: 'POST',
      data: {
        id: app.globalData.userInfo.id,
      },
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log(res.data)
        if (res.data.order_type1 > 1) {
          wx.request({
            url: 'https://wlgx.com/Api/Card/mycard2',
            method: 'POST',
            data: {
              id: app.globalData.userInfo.id,
            },
            header: { 'Content-Type': 'application/x-www-form-urlencoded' },
            success: function (res) {
              console.log(res.data)
              that.setData({
                name: res.data.det.name,
                position: res.data.det.position,
                company_address: res.data.det.company_address,
                company_name: res.data.det.company_name,
                mobile: res.data.det.mobile,
                wechat: res.data.det.wechat,

                person_img: res.data.det.person_img,
                wechat_img: res.data.det.wechat_img,
                music_id: res.data.det.music_id,              
               
               
                company_phone: res.data.detail1.company_phone,
                person_yeji: res.data.detail1.person_yeji,
                product: res.data.detail1.product,
                qq: res.data.detail1.qq,
                mobile: res.data.det.mobile,
                company_name: res.data.det.company_name,
                email: res.data.detail1.email,
                // latitude: res.data.detail3.latitude,
                // longitude: res.data.detail3.longitude,
                person_intrduct: res.data.detail1.person_intrduct,     
                
                yeji_img: res.data.detail1.yeji_img.concat(),
                fapiao_img: res.data.detail1.fapiao_img.concat(),
                teamwork: res.data.detail1.teamwork.concat(),
                company_activity: res.data.detail1.company_activity.concat(),
                product_show: res.data.detail1.product_show.concat(),
              })
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
        } else {
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
  onShareAppMessage: function () {
    return {
      title: '微信小程序联盟',
      desc: '最具人气的小程序开发联盟!',
      path: '/pages/my/update69_content/update69_content'
    }
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

})
