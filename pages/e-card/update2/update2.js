var commont = require("../../../js/commont.js");
var app = getApp()
Page({
  data: {
    region_star: ['北京', '北京', ''],
    region_to: ['北京', '北京', ''],
    region_form: ['', '', ''],
    customItem: '全部',
    files_mygrade: [],
    files_team: [],
    files_activity: [],
    files_show: [],
    files_bill: [],
    popup_book: false,
    mask: false,

    music_id: 0,
    music_name: '',
    music_web: '',
  },

  onLoad: function () {
    var navigator_time = getApp().globalData.navigator_time
  },

  chooseImage_mygrade: function (e) {
    commont.chooseImage_mygrade(this, e)
  },
  bind_deleteImg_mygrade: function (e) {
    commont.bind_deleteImg_mygrade(this, e)
  },
  chooseImage_team: function (e) {
    commont.chooseImage_team(this, e)
  },
  bind_deleteImg_team: function (e) {
    commont.bind_deleteImg_team(this, e)
  },
  chooseImage_activity: function (e) {
    commont.chooseImage_activity(this, e)
  },
  bind_deleteImg_activity: function (e) {
    commont.bind_deleteImg_activity(this, e)
  },
  chooseImage_show: function (e) {
    commont.chooseImage_show(this, e)
  },
  bind_deleteImg_show: function (e) {
    commont.bind_deleteImg_show(this, e)
  },
  chooseImage_bill: function (e) {
    commont.chooseImage_bill(this, e)
  },
  bind_deleteImg_bill: function (e) {
    commont.bind_deleteImg_bill(this, e)
  },
  // 弹窗-同意书
  bind_popup_book: function (e) {
    commont.bind_popup_book(this, e)
  },
  // 弹窗-发票
  bind_popup_img: function (e) {
    commont.bind_popup_img(this, e)
  },
  // 弹窗-关闭
  bind_popup_close: function (e) {
    commont.bind_popup_close(this, e)
  },

  // 选择位置
  bind_location: function (e) {
    commont.bind_location(this, e)
  },
  get_music_data:function(e){
     commont.get_music_data(this,e)
  },
  formSubmit:function(e){
    var that = this

    this.get_music_data()
    var input_music = { 'id': that.data.music_id, 'name': that.data.music_name, 'web': that.data.music_web }
    
    console.log(e.detail.value)
    var formdata={
      id: app.globalData.userInfo.id,
      music: input_music,  //music-json格式
      music_id: that.data.music_id,
      person_yeji: e.detail.value.person_yeji,
      person_intrduct: e.detail.value.person_intrduct,
      product: e.detail.value.product,

      // files_mygrade,
      // files_team,
      // files_activity,
      // files_show,
      // files_bill,
    }
    wx.request({
      url:'https://wlgx.com/Api/Card/card' ,
      method:'POST',
      data: formdata,
      success:function(e){

      },
      complete:()=>{

        for (var i = 0; i < that.data.files_mygrade.length; i++) {
          wx.showToast({
            icon: "loading",
            title: '上传第' + (i + 1) + '张图',
          });
          wx.uploadFile({
            url: 'https://wlgx.com/Api/Card/up2',
            filePath: that.data.files_mygrade[i],
            name: 'files_mygrade',
            header: {
              "Content-Type": "application/json"
            },
            formData: {
              id: app.globalData.userInfo.id,
            },
            success: function (res) {

              var data = JSON.parse(res.data)
              // if (data.datas.error) {
              //   wx.showModal({
              //     title: '提示',
              //     content: '第' + i + '张' + data.datas.error,
              //     showCancel: false
              //   })

              // } else {
              //   that.setData({
              //     pic_url_list: that.data.pic_url_list.concat(data.datas.file),
              //     upload_num: that.data.upload_num + 1
              //   });
              // }
            }

          })
        }
       
      }

    })
    
    
  }
})
