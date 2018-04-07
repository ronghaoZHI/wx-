var commont = require("../../../js/commont.js");
var app = getApp()
Page({
  data: {
    love: false,
    poster: 'none',
    music: false,
    navigator_time: 0,
    name: '',
    position: '',
    company_address: '',
    wechat: 0,
    company_name: '',
    // company_phone: 0,
    person_img: '',
    wechat_img: '',
    music_id: 0,
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
  //来自页面的转发按钮
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '您好，这是我的名片',
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
    this.data.navigator_time = getApp().globalData.navigator_time
    var id = getApp().globalData.userInfo.id
    console.log(id)
    //获取数据
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
      url: 'https://wlgx.com/Api/Card/mycard',
      method: 'POST',
      data: {
        id: id,
      },
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success:function(res){
          if(res.data.order_type==1)
          {
            wx.request({
              url: 'https://wlgx.com/Api/Card/mycard',
              method: 'POST',
              data: {
                id: id,
              },
              header: { 'Content-Type': 'application/x-www-form-urlencoded' },
              success: function (res) {
                console.log(res.data)
                that.setData({
                  name: res.data.detail.name,
                  position: res.data.detail.position,
                  company_address: res.data.detail.company_address,
                  company_name: res.data.detail.company_name,
                  mobile: res.data.detail.mobile,
                  wechat: res.data.detail.wechat,

                  person_img: res.data.detail.person_img,
                  wechat_img: res.data.detail.wechat_img,
                  music_id: res.data.detail.music_id,
                })
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

  bind_update: function () {
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
  //二维码图片保存到本地相册
  saveImg: function () {
    console.log("进来了");
    wx.downloadFile({      
      url: "",
      success: function (res) {
        let path = res.tempFilePath
        wx.saveImageToPhotosAlbum({
          filePath: path,
          success(res) {
            console.log(res)
          },
          fail(res) {
            console.log(res)
          },
          complete(res) {
            console.log(res)
          }
        })
      }, fail: function (res) {
        console.log(res)
      }
    })

  }


})
