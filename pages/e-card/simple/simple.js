var commont = require("../../../js/commont.js");
var app = getApp()
Page({
  data: {
    region_star: ['北京', '北京', ''],
    region_to: ['北京', '北京', ''],
    region_form: ['', '', ''],
    customItem: '全部',
    files_me: [], //个人图片 
    files_wx: [], //wx二维码图片  
    popup_book: false,
    mask: false,
    // status:false,   //展示
    input_location: '',
    input_latitude: 0.0,
    input_longitude: 0.0,
    music_id:0,
    music_name:'',
    music_web:'',
    // id: 0,
    // input_music:{id:music_id,name:music_name,web:music_web},
    //music事例数据  原始需要从服务获取  是json格式！！！
    
  },

  onLoad: function () {
    var navigator_time = getApp().globalData.navigator_time
    // this.data.id = 
  },

  // 微信
  chooseImage_wx: function (e) {
    var that = this
    var id = app.globalData.userInfo.id
    var url = 'https://wlgx.com/Api/Card/up'
    commont.chooseImage_wx(this, e,id,url)
  },
  bind_deleteImg_wx: function (e) {
    commont.bind_deleteImg_wx(this, e)
  },

  // 个人
  chooseImage_me: function (e) {
    var that= this
    var id = app.globalData.userInfo.id
    var url = 'https://wlgx.com/Api/Card/up'
    commont.chooseImage_me(this, e,id,url)
    // console.log('222')
  },
  bind_deleteImg_me: function (e) {
    commont.bind_deleteImg_me(this, e)
  },
  // 手机号码验证
  bind_validatemobile: function (e) {
    commont.bind_validatemobile(this, e)
  },
  // 电话号码验证
  bind_checkTel: function (e) {
    commont.bind_checkTel(this, e)
  },
  // 邮箱验证
  bind_isEmail: function (e) {
    commont.bind_isEmail(this, e)
  },
  // QQ验证
  bind_isQQ: function (e) {
    commont.bind_isQQ(this, e)
  },
  // 弹窗-同意书
  bind_popup_book: function (e) {
    commont.bind_popup_book(this, e)
  },
  // 弹窗-关闭
  bind_popup_close: function (e) {
    commont.bind_popup_close(this, e)
  },
  //展示
  bind_switch: function (e) {
    console.log(e.detail)
    //comment.bind_show()
  },
  // 选择位置
  bind_location: function (e) {
    commont.bind_location(this, e)
  },
  //阅读同意书
   bind_readme:function(e){
    
  },
  //
  get_music_data:function(e){
    commont.get_music_data(this,e)
  },

  //提交信息
  formSubmit:function(e) {
    // if(){}  //表单检验
    var that = this
    // console.log(e.detail.value)
    //$99 所有字段数据
    this.get_music_data() 
    var input_music = { 'id': that.data.music_id, 'name': that.data.music_name, 'web': that.data.music_web }
  //  console.log(input_music)
    var all_data = { 
      id: that.data.id,
      company_address: e.detail.value.company_address, 
      name: e.detail.value.name, 
      company_name: e.detail.value.company_name,
      company_phone: e.detail.value.mobile,
      position: e.detail.value.position,
      mobile: e.detail.value.mobile,
      latitude:that.data.input_latitude,
      longitude: that.data.input_longitude,
      wechat: e.detail.value.wechat,
      // status: that.data.display,
      music: input_music,  //music-json格式
      music_id: that.data.music_id,
      // wechat_img: that.data.files_wx ,
      // person_img: that.data.files_me 
      }

      console.log(all_data);
      // //
      wx.request({
        url:'https://wlgx.com/Api/Card/add_card',
        method:'POST',
        data: all_data,
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        success: function (res) {
          console.log(res.data)
        },
        complete:()=>{
              //             wx.uploadFile({
              // url: 'https://wlgx.com/Api/Card/add_card',
              // filePath: that.data.files_wx[0],
              // name: 'wechat_img',
              // header: { "Content-Type": "multipart/form-data" },
              // formData: formdata,
              // success: function (res) {
              //   console.log(res.data);
              //   if (res.statusCode != 200) {
              //     wx.showModal({
              //       title: '提示',
              //       content: '上传失败',
              //       showCancel: false
              //     });
              //     return;
              //   }
              // },
              // complete: () => {
              //   wx.hideToast();
            //     wx.uploadFile({
            //       url: 'https://wlgx.com/Api/Card/up',
            //       filePath: that.data.files_me[0],
            //       name: 'person_img',
            //       header: { "Content-Type": "multipart/form-data" },
            //       formData: { id: that.data.id },
            //       success: function (res) {
            //         console.log(res.data);
            //         if (res.statusCode != 200) {
            //           wx.showModal({
            //             title: '提示',
            //             content: '上传失败',
            //             showCancel: false
            //           });
            //           return
            //         }
            //         // wx.switchTab({
            //         //   url: '/pages/change_card/card/card'
            //         // })
            //       },
            //       fail: function (e) {
            //         console.log(e);
            //         wx.showModal({
            //           title: '提示',
            //           content: '上传失败',
            //           showCancel: false
            //         })
            //       },
            //       complete: () => {
            //         wx.hideToast();
            //         console.log('complete');
            //       }
            //     })
            //   }
            // })
          }
      })
    }
  

})