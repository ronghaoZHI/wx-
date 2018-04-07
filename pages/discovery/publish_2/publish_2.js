var commont = require("../../../js/commont.js");
var app = getApp()
Page({
  data: {
    files: [],
    switch_var: false,
    day:1,
    money:1,
    day: ["1", "7", "30"],
    dayIndex: 0,
    money: ["1", "5", "20"],
    moneyIndex: 0,
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      // url: '../logs/logs'
      //   url: '../load/load'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      console.log(userInfo);
      that.setData({
        userInfo: userInfo,
        logo: userInfo.logo
      })
    })
  },

  // bindSaveTap: function (e) {
  //   console.log(e)
  //   var formData = {
  //     uid: util.getUserID(),
  //     user_name: e.detail.value.nick_name,
  //     baby_sex: e.detail.value.baby_sex,
  //     baby_age: e.detail.value.baby_age
  //   }
  //   console.log(formData)
  //   app.apiFunc.upload_file(app.apiUrl.modify_user, this.data.logo, 'photos', formData,
  //     function (res) {
  //       console.log(res);
  //     },
  //     function () {
  //     })
  // },

  // chooseImageTap: function () {
  //   let _this = this;
  //   wx.showActionSheet({
  //     itemList: ['从相册中选择', '拍照'],
  //     itemColor: "#f7982a",
  //     success: function (res) {
  //       if (!res.cancel) {
  //         if (res.tapIndex == 0) {
  //           _this.chooseWxImage('album')
  //         } else if (res.tapIndex == 1) {
  //           _this.chooseWxImage('camera')
  //         }
  //       }
  //     }
  //   })

  // },
  // chooseWxImage: function (type) {
  //   let _this = this;
  //   wx.chooseImage({
  //     sizeType: ['original', 'compressed'],
  //     sourceType: [type],
  //     success: function (res) {
  //       console.log(res);
  //       _this.setData({
  //         logo: res.tempFilePaths[0],
  //       })
  //     }
  //   })
  // },
  //表单提交数据到服务器
  formSubmit:function(e){
    wx.request({
      url: 'https://wlgx.com/Api/Special/release',
      data:{
        person: e.detail.value.person,
        phone: e.detail.value.phone,
        address: e.detail.value.address,
        content: e.detail.value.content,        
      },
      method:'post',
      header: { 'content-type':'application/x-www-form-urlencoded'},
      success:function(res){
        wx.showModal({
          title: '信息发布成功',
          content: '',
        })
      }      
    })
    this.upload() 
  },
  //上传图片
  upload:function(res){
    var that = this
    wx.uploadFile({
      url: 'https://wlgx.com/Api/Special/release',
      filePath: that.data.files,
      name: '',
      data:{},
      success:function(e){
        wx.showModal({
          title: '已提交发布',
          content: '',
        })
      }
    })
  },
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },

  bindDay: function (e) {
    console.log('picker country 发生选择改变，携带值为', e.detail.value);

    this.setData({
      dayIndex: e.detail.value
    })
  },
  bind_switch: function (e) {
      this.setData({
        switch_var: e.detail.value,
      });
    console.log('switch2 发生 change 事件，携带值为', e.detail.value)
    console.log(e.detail.value)
    // if($switch==true){
    //   this.setData({
    //     isAgree: !!e.detail.value.length
    //   });
    // }
  },

    // 拨打电话
  bind_phone: function (e) {
    commont.bind_phone(this, e)
  },
  // 导航
  bind_getlocation: function (e) {
    commont.bind_getlocation(this, e)
  },
});