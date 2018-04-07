
var app = getApp()
Page({
  data: {
    region_star: ['北京', '北京', ''],
    region_to: ['北京', '北京', ''],
    region_form: ['', '', ''],
    customItem: '全部',
    files: [],
    collect1_list:[],    
    collect2_list:[],
    collect3_list:[],
    collect4_list:[]
  },
  onLoad: function () {
    var navigator_time = getApp().globalData.navigator_time
    var id = app.globalData.userInfo.id
    var that = this
    wx.request({
      url: 'https://wlgx.com/Api/User/small_collect',
      method:'post',
      data:{
        id:id,      
        },
      header: { 'Content-Type': 'application/json' },   
      success:function(res){        
        that.setData({
          collect1_list: res.data.res.concat(), 
          collect2_list: res.data.res2.concat(), 
          collect3_list: res.data.res3.concat(), 
          collect4_list: res.data.res4.concat(), 
               
        })     
      },
      fail:function(){
        wx.showToast({
          title: '网络异常！err:getsessionkeys',
          duration: 2000
        });
      }
    })
  },
  bindRegionChange_star: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region_star: e.detail.value
    })
  },

  bindRegionChange_to: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region_to: e.detail.value
    })
  },

  bindRegionChange_form: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region_form: e.detail.value
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
          files: that.data.files.concat(res.tempFilePaths),
          tips:'hidden'
        });
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  }
})
