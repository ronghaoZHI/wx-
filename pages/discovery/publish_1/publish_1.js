var commont = require("../../../js/commont.js");
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
  //提交表单数据到服务器
  formSubmit:function(e){
    wx.request({
      url: 'https://wlgx.com/Api/Special/release',
      method:'get',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data:{
        person: e.detail.value.person,
        phone: e.detail.value.phone,
        address: e.detail.value.address,
        content: e.detail.value.content,
      },
      success:function(e){
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
      filePath: that.data.files.concat(res),
      name: 'content',
      success:function(){
        wx.showModal({
          title: '已提交成功',
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